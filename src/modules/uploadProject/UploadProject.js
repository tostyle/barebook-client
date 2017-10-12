import React from 'react'
import Dropzone from 'react-dropzone'

const UploadProject = ({
  onUploadFrontCover,
  onUploadBackCover,
  onUploadSpine,
  onUploadPages,
  frontCover,
  backCover,
  spine,
  pages,
  files,
  history,
}) => {
  return (
    <div>
      <h1>อัพโหลดไฟล์</h1>
      <p>ปกหน้า</p>
      <Dropzone onDrop={onUploadFrontCover} style={{}} multiple={false}>
        <button>Upload</button>
        {files.front_cover &&
          <p>
            {files.front_cover}
          </p>}
      </Dropzone>
      <p>ปกหลัง</p>
      <Dropzone onDrop={onUploadBackCover} style={{}} multiple={false}>
        <button>Upload</button>
        {files.back_cover &&
          <p>
            {files.back_cover}
          </p>}
      </Dropzone>
      <p>สันหนังสือ</p>
      <Dropzone onDrop={onUploadSpine} style={{}} multiple={false}>
        <button>Upload</button>
        {files.spine &&
          <p>
            {files.spine}
          </p>}
      </Dropzone>
      <p>ไฟล์สำหรับเนื้อใน</p>
      <Dropzone onDrop={onUploadPages} style={{}}>
        <button>Uploads</button>
        {pages.length > 0 &&
          pages.map((page, index) =>
            <p key={index}>
              {page}
            </p>
          )}
      </Dropzone>
      <button onClick={() => history.push('/project/preview')}>Submit</button>
    </div>
  )
}

export default UploadProject
