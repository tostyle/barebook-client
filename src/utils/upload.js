import mime from 'mime-types'
import JsPDF from 'jspdf'
import axios from 'axios'

const isImage = type => type === 'image/png' || type === 'imge/jpg'

const convertFileToPDF = file => {
  const extention = mime.extension(file.type)
  return new Promise(resolve => {
    const doc = new JsPDF()
    const reader = new window.FileReader()
    reader.onload = event => {
      doc.addImage(event.target.result, extention, 15, 40, 180, 160)
      resolve(doc.output('blob'))
    }
    reader.readAsDataURL(file)
  })
}
const upload = (type, orderId) => async files => {
  const url =
    type === 'pages'
      ? `/api/upload/${orderId}/multiple`
      : `/api/upload/${orderId}`
  const formData = new window.FormData()
  formData.append('type', type)
  formData.append('orderId', orderId)
  if (type === 'pages') {
    files.forEach((file, index) => {
      formData.append(`files`, file)
    })
  } else {
    formData.append('file', files[0])
  }
  try {
    const { data } = await axios({
      method: 'POST',
      url,
      data: formData,
    })
    return data
  } catch (e) {
    return false
  }
}
export default { upload, isImage, convertFileToPDF }
