import React from 'react'

const BookStyle = ({
  bookSizeList,
  coverPageList,
  paperTypeList,
  order,
  onChangeBookSize,
  onChangeCoverPage,
  onChangePaperType,
}) => {
  return (
    <div>
      <h3>1. ขนาดหนังสือ</h3>
      {bookSizeList.map(data =>
        <div key={data._id}>
          <input
            type="radio"
            name="bookSize"
            value={JSON.stringify(data)}
            checked={order.size._id === data._id}
            onChange={onChangeBookSize}
          />
          {data.name}
        </div>
      )}
      <h3>2. หน้าปก</h3>
      {coverPageList.map(data =>
        <div key={data._id}>
          <input
            type="radio"
            name="coverPage"
            value={JSON.stringify(data)}
            checked={order.cover_type._id === data._id}
            onChange={onChangeCoverPage}
          />
          {data.name}
          {order.cover_type._id === data._id &&
            <p>
              {order.cover_type.detail}
            </p>}
        </div>
      )}
      <h3>3. เนื้อใน</h3>
      {paperTypeList.map(data =>
        <div key={data._id}>
          <input
            type="radio"
            name="paperType"
            value={JSON.stringify(data)}
            checked={order.paper_type._id === data._id}
            onChange={onChangePaperType}
          />
          {data.name}
          {order.cover_type._id === data._id &&
            <p>
              {order.paper_type.detail}
            </p>}
        </div>
      )}
    </div>
  )
}

export default BookStyle
