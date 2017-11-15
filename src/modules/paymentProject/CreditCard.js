import React from 'react'

const CreditCard = ({
  onSubmitAddCard,
  onChangeCardNo,
  cardNo,
  onChangeExpireMonth,
  expireMonth,
  onChangeExpireYear,
  expireYear,
  onChangeCvc,
  cvc,
  cardName,
  onChangeCardName,
  onClickCharge,
}) =>
  <div>
    <form onSubmit={onSubmitAddCard}>
      <label>Name </label>
      <input type="text" value={cardName} onChange={onChangeCardName} />
      <label>Card No </label>
      <input type="text" value={cardNo} onChange={onChangeCardNo} />
      <label>Expire Month</label>
      <input type="text" value={expireMonth} onChange={onChangeExpireMonth} />
      <label>Expire Year</label>
      <input type="text" value={expireYear} onChange={onChangeExpireYear} />
      <label>CVC</label>
      <input type="text" value={cvc} onChange={onChangeCvc} />
      <button>Add Card</button>
    </form>
    <button onClick={onClickCharge}>Charge</button>
  </div>

export default CreditCard
