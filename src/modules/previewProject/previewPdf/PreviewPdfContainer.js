import {
  compose,
  withHandlers,
  withState,
  lifecycle,
  withProps,
} from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove } from 'lodash'
import PreviewPdf from './PreviewPdf'
import { setOrder } from '../../../actions/order'

const handlers = {
  onDocumentLoad: ({ setNumPages }) => ({ numPages }) => {
    setNumPages(() => numPages)
  },
  nextPage: ({ setPageNumber }) => () => {
    setPageNumber(pageNumber => pageNumber + 1)
  },
  previousPage: ({ setPageNumber }) => () => {
    setPageNumber(pageNumber => pageNumber - 1)
  },
  onChangeColorPage: ({ pageNumber, setOrder, colorPages }) => () => {
    // console.log(colorPages)
    if (!colorPages.includes(pageNumber)) {
      colorPages.push(pageNumber)
    } else {
      remove(colorPages, page => page === pageNumber)
    }
    setOrder({
      color: {
        color_pages: [...colorPages],
      },
    })
  },
}

const mapState = state => {
  const colorPages = state.order.color.color_pages
  return {
    colorPages,
    orderId: state.order._id,
  }
}

const mapDispatch = dispatch => ({
  setOrder: bindActionCreators(setOrder, dispatch),
})

const newProps = props => {
  return {
    bookPath: `http://localhost:4040/api/orders/${props.orderId}/book`,
  }
}

const enhance = compose(
  connect(mapState, mapDispatch),
  withProps(newProps),
  withState('numPages', 'setNumPages', null),
  withState('pageNumber', 'setPageNumber', 1),
  withHandlers(handlers)
)

export default connect(mapState, mapDispatch)(enhance(PreviewPdf))
