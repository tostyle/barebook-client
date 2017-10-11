import { compose, withHandlers, withState } from 'recompose'
import PreviewPdf from './PreviewPdf'

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
}

const enhance = compose(
  withState('numPages', 'setNumPages', null),
  withState('pageNumber', 'setPageNumber', 1),
  withHandlers(handlers)
)

export default enhance(PreviewPdf)
