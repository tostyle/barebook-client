import React from 'react'

const DeliveryProject = ({
  deliveries,
  onClickAddDelivery,
  onClickDeleteDelivery,
  onClickHideDelivery,
}) =>
  <div>
    {deliveries.map((delivery, index) =>
      <div key={index}>
        <div>
          <span>
            {index + 1}
          </span>
          <button onClick={() => onClickHideDelivery(index)}>
            {delivery.hide ? 'show' : 'hide'}
          </button>
          <button onClick={() => onClickDeleteDelivery(index)}>delete</button>
        </div>
        {!delivery.hide &&
          <div>
            <div>
              <span>ชื่อ นามสกุล</span>
              <input type="text" />
            </div>
            <div>
              <span>เบอร์โทรศัพท์</span>
              <input type="text" />
            </div>
            <div>
              <span>ที่อยู่</span>
              <input type="text" />
            </div>
          </div>}
      </div>
    )}
    <button onClick={onClickAddDelivery}>Add</button>
  </div>

export default DeliveryProject
