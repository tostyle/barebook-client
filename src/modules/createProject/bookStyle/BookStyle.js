import React from 'react'

const BookStyle = ({ bookSizeList, coverPageList, paperTypeList }) => {
  return (
    <div>
      <h3>1. ขนาดหนังสือ</h3>
      {bookSizeList.map(data =>
        <div key={data._id}>
          <input type="radio" name="bookSize" value={data.name} />
          {data.name}
        </div>
      )}
      <h3>2. หน้าปก</h3>
      {coverPageList.map(data =>
        <div key={data._id}>
          <input type="radio" name="coverPage" value={data.name} />
          {data.name}
        </div>
      )}
      <h3>3. เนื้อใน</h3>
      {paperTypeList.map(data =>
        <div key={data._id}>
          <input type="radio" name="paperType" value={data.name} />
          {data.name}
        </div>
      )}
    </div>
  )
}

export default BookStyle
