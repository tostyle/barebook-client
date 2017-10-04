import { compose, lifecycle, withState, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import axios from 'axios'
import BookStyle from './BookStyle'
import { setOrder } from '../../../actions/order'

const cycle = {
  async componentDidMount() {
    const { setBookSizeList, setCoverPageList, setPaperTypeList } = this.props
    const loadBookSizes = axios({ method: 'GET', url: `/api/size` })
    const loadCoverPages = axios({ method: 'GET', url: `/api/cover_page` })
    const loadPaperTypes = axios({ method: 'GET', url: `/api/paper_type` })

    const { data: bookSizeDatas } = await loadBookSizes
    const { data: coverPageDatas } = await loadCoverPages
    const { data: paperTypeDatas } = await loadPaperTypes
    console.log(bookSizeDatas, coverPageDatas, paperTypeDatas)
    setBookSizeList(() => bookSizeDatas)
    setCoverPageList(() => coverPageDatas)
    setPaperTypeList(() => paperTypeDatas)
  },
}

const onChangeBookStyle = (styleTyle, setOrder) => {
  return data => {
    const objData = JSON.parse(data)
    const editedOrder = { [styleTyle]: objData }
    setOrder(editedOrder)
  }
}

const handles = {
  onChangeBookSize: ({ setOrder }) => event => {
    return onChangeBookStyle('size', setOrder)(event.target.value)
  },
  onChangeCoverPage: ({ setOrder }) => event => {
    return onChangeBookStyle('cover_type', setOrder)(event.target.value)
  },
  onChangePaperType: ({ setOrder }) => event => {
    return onChangeBookStyle('paper_type', setOrder)(event.target.value)
  },
}

const enhance = compose(
  withState('bookSizeList', 'setBookSizeList', []),
  withState('coverPageList', 'setCoverPageList', []),
  withState('paperTypeList', 'setPaperTypeList', []),
  withHandlers(handles),
  lifecycle(cycle)
)

const mapState = state => ({ order: state.order })
const mapDispatch = dispatch => {
  return {
    setOrder(order) {
      return dispatch(setOrder(order))
    },
  }
}
export default connect(mapState, mapDispatch)(enhance(BookStyle))
