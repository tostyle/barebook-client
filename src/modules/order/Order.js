import React from 'react'

const Order = ({ order, history }) => {
  return (
    <div>
      <p>
        <span>ชื่อหนังสือ</span>
        <input type="text" value={order.name} />
      </p>
      <p>
        <span>
          ขนาด {order.size.name}
        </span>
      </p>
      <p>
        <span>
          หน้าปก {order.cover_type.name}
        </span>
      </p>
      <p>
        <span>
          {order.cover_type.detail}
        </span>
      </p>
      <p>
        <span>
          เนื้อใน {order.paper_type.name}
        </span>
      </p>
      <p>
        <span>
          {order.paper_type.detail}
        </span>
      </p>
      <h5>ราคาต่อเล่ม</h5>
      <div>
        <input type="text" />
        <span>หน้า</span>
      </div>
      <div>
        <input type="text" />
        <span>เล่ม</span>
      </div>
      <button onClick={() => history.push(`/project/upload`)}>
        อัพโหลดไฟล์งาน
      </button>
    </div>
  )
}

export default Order
