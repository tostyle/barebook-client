import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import TechnicProject from './TechnicProject'
import { setOrder } from '../../actions/order'
import { Upload } from '../../utils'

const { isImage, convertFileToPDF, upload } = Upload

const handlers = {
  onUploadBookmark: ({ orderId, setTechnicFiles, technics }) => async files => {
    const uploadedFileIsImage = isImage(files[0].type)
    if (uploadedFileIsImage) {
      files[0] = await convertFileToPDF(files[0])
    }
    const fileType = 'bookmark'
    const uploadedFile = await upload(fileType, orderId)(files)
    if (uploadedFile) {
      setTechnicFiles(fileType, uploadedFile)
    }
  },
  onUploadHalfjacket: ({
    orderId,
    setTechnicFiles,
    technics,
  }) => async files => {
    const uploadedFileIsImage = isImage(files[0].type)
    if (uploadedFileIsImage) {
      files[0] = await convertFileToPDF(files[0])
    }
    const fileType = 'halfjacket'
    const uploadedFile = await upload(fileType, orderId)(files)
    if (uploadedFile) {
      setTechnicFiles(fileType, uploadedFile)
    }
  },
  onClickAddVacuumPlastic: ({ setTechnicFiles, technics }) => e => {
    e.preventDefault()
    const fileType = 'vacuumPlastic'
    setTechnicFiles(fileType, true)
  },
  onClickAddTopping: ({ setTechnicFiles, technics }) => e => {
    e.preventDefault()
    const fileType = 'vacuumPlastic'
    setTechnicFiles(fileType, true)
    setOrder({
      technics: Object.assign({}, technics, { [fileType]: true }),
    })
  },
}

const mapState = state => ({
  technics: state.order.technics,
  orderId: state.order._id,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const setTechnicFiles = (fileType, uploadedFile) => {
    return dispatchProps.setOrder({
      technics: Object.assign({}, stateProps.files, {
        [fileType]: uploadedFile,
      }),
    })
  }
  return Object.assign({}, stateProps, ownProps, dispatchProps, {
    setTechnicFiles,
  })
}

const enhance = compose(
  connect(mapState, { setOrder }, mergeProps),
  withHandlers(handlers)
)
export default enhance(TechnicProject)
