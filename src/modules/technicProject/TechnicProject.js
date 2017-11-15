import React from 'react'
import Dropzone from 'react-dropzone'

const TechnicProject = props =>
  <div>
    <div>
      <h2>ที่คั่นหนังสือ</h2>
      <Dropzone onDrop={props.onUploadBookmark} style={{}} multiple={false}>
        <button>Upload</button>
      </Dropzone>
    </div>
    <div>
      <h2>ฮาล์ฟแจ๊กเก็ต</h2>
      <Dropzone onDrop={props.onUploadHalfjacket} style={{}} multiple={false}>
        <button>Upload</button>
      </Dropzone>
    </div>
    <div>
      <h2>หุ้มพลาสติกสูญญากาศ</h2>
      <button onClick={props.onClickAddVacuumPlastic}>Add</button>
    </div>
    <div>
      <h2>ท๊อปปิ้ง</h2>
      <button onClick={props.onClickAddTopping}>Add</button>
    </div>
  </div>

export default TechnicProject
