import { compose, lifecycle, withState } from 'recompose'
import axios from 'axios'
import BookStyle from './BookStyle'

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
const enhance = compose(
  withState('bookSizeList', 'setBookSizeList', []),
  withState('coverPageList', 'setCoverPageList', []),
  withState('paperTypeList', 'setPaperTypeList', []),
  lifecycle(cycle)
)

export default enhance(BookStyle)
