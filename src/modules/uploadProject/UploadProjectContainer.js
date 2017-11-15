import { compose, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import UploadProject from './UploadProject'
import { setOrder } from '../../actions/order'
import { Upload } from '../../utils'

const { isImage, convertFileToPDF, upload } = Upload

const handles = {
  onUploadFrontCover: ({ setOrderFiles, orderId }) => async files => {
    const uploadedFileIsImage = isImage(files[0].type)
    if (uploadedFileIsImage) {
      files[0] = await convertFileToPDF(files[0])
    }
    const fileType = 'front_cover'
    const uploadedFile = await upload(fileType, orderId)(files)
    if (uploadedFile) {
      setOrderFiles(fileType, uploadedFile.fileName)
    }
  },
  onUploadBackCover: ({ setOrderFiles, orderId }) => async files => {
    const uploadedFileIsImage = isImage(files[0].type)
    if (uploadedFileIsImage) {
      files[0] = await convertFileToPDF(files[0])
    }
    const fileType = 'back_cover'
    const uploadedFile = await upload(fileType, orderId)(files)
    if (uploadedFile) {
      setOrderFiles(fileType, uploadedFile.fileName)
    }
  },
  onUploadSpine: ({ setOrderFiles, orderId }) => async files => {
    const uploadedFileIsImage = isImage(files[0].type)
    if (uploadedFileIsImage) {
      files[0] = await convertFileToPDF(files[0])
    }
    const fileType = 'spine'
    const uploadedFile = await upload(fileType, orderId)(files)
    if (uploadedFile) {
      setOrderFiles(fileType, uploadedFile.fileName)
    }
  },
  onUploadPages: ({ setOrder, pages, orderId }) => async files => {
    const convertedFiles = await Promise.all(
      files.map(async (file, index) => {
        const uploadedFileIsImage = isImage(file.type)
        if (uploadedFileIsImage) {
          const convertedFile = await convertFileToPDF(file)
          return convertedFile
        } else {
          return file
        }
      })
    )
    const fileType = 'pages'
    const uploadedFiles = await upload(fileType, orderId)(convertedFiles)
    const fileNames = uploadedFiles.map(file => file.filename)
    setOrder({
      pages: pages.concat(fileNames),
    })
  },
  onClickMergeBook: props => async () => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: `/api/upload/${props.orderId}/merge`,
        data: { sources: props.pages },
      })
      if (data.result) {
        props.history.push('/project/preview')
      }
    } catch (e) {
      console.log(e)
    }
  },
}

const mapState = state => ({
  files: state.order.files,
  pages: state.order.pages,
  orderId: state.order._id,
})
const mapDispatch = dispatch => ({
  setOrder: bindActionCreators(setOrder, dispatch),
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const setOrderFiles = (fileType, uploadedFile) => {
    return dispatchProps.setOrder({
      files: Object.assign({}, stateProps.files, { [fileType]: uploadedFile }),
    })
  }
  return Object.assign({}, stateProps, ownProps, dispatchProps, {
    setOrderFiles,
  })
}

const enhance = compose(
  connect(mapState, mapDispatch, mergeProps),
  withHandlers(handles)
)

export default enhance(UploadProject)
