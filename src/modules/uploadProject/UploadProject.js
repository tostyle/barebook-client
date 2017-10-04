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
}) => {
  return (
    <div>
      <h1>อัพโหลดไฟล์</h1>
      <p>ปกหน้า</p>
      <Dropzone onDrop={onUploadFrontCover} style={{}} multiple={false}>
        <button>Upload</button>
        {frontCover &&
          <p>
            {frontCover.name}
          </p>}
      </Dropzone>
      <p>ปกหลัง</p>
      <Dropzone onDrop={onUploadBackCover} style={{}} multiple={false}>
        <button>Upload</button>
        {backCover &&
          <p>
            {backCover.name}
          </p>}
      </Dropzone>
      <p>สันหนังสือ</p>
      <Dropzone onDrop={onUploadSpine} style={{}} multiple={false}>
        <button>Upload</button>
        {spine &&
          <p>
            {spine.name}
          </p>}
      </Dropzone>
      <p>ไฟล์สำหรับเนื้อใน</p>
      <Dropzone onDrop={onUploadPages} style={{}}>
        <button>Uploads</button>
        {pages.length > 0 &&
          pages.map((page, index) =>
            <p key={index}>
              {page.name}
            </p>
          )}
      </Dropzone>
    </div>
  )
}

export default UploadProject
