import { compose, withHandlers, withState } from 'recompose'
import axios from 'axios'
import UploadProject from './UploadProject'

const upload = type => async files => {
  const url = type === 'pages' ? '/api/upload/1/multiple' : '/api/upload/1'
  const formData = new FormData()
  if (type === 'pages') {
    files.forEach((file, index) => {
      formData.append(`files`, file)
    })
  } else {
    formData.append('file', files[0])
  }
  formData.append('type', type)
  console.log('files', files, formData)
  const res = await axios({
    method: 'POST',
    url,
    data: formData,
  })
  if (res.status === 402) return true
  return false
}

const handles = {
  onUploadFrontCover: ({ setFrontCover }) => async files => {
    await upload('frontCover')(files)
    setFrontCover(() => files[0])
  },
  onUploadBackCover: ({ setBackCover }) => async files => {
    await upload('backCover')(files)
    setBackCover(() => files[0])
  },
  onUploadSpine: ({ setSpine }) => async files => {
    await upload('spine')(files)
    setSpine(() => files[0])
  },
  onUploadPages: ({ setPages }) => async files => {
    await upload('pages')(files)
    setPages(pages => pages.concat(files))
  },
}

const enhance = compose(
  withState('frontCover', 'setFrontCover', null),
  withState('backCover', 'setBackCover', null),
  withState('spine', 'setSpine', null),
  withState('pages', 'setPages', []),
  withHandlers(handles)
)

export default enhance(UploadProject)
