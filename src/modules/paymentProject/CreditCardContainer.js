import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux'
import CreditCard from './CreditCard'
import withInput from '../../enhancer/withInput'
import { charge } from '../../actions/order'

// const { Omise } = window
const cycle = {
  componentDidMount() {
    window.Omise.setPublicKey('pkey_test_580p6cuswqnlh700hty')
  },
}
const handlers = {
  onSubmitAddCard: ({ setOmiseToken, ...props }) => e => {
    e.preventDefault()
    const card = {
      name: props.cardName,
      number: props.cardNo,
      expiration_month: props.expireMonth,
      expiration_year: props.expireYear,
      security_code: props.cvc,
    }
    window.Omise.createToken('card', card, function(statusCode, response) {
      if (response.object == 'error' || !response.card.security_code_check) {
        // Display an error message.
        let message_text = 'SET YOUR SECURITY CODE CHECK FAILED MESSAGE'
        if (response.object == 'error') {
          message_text = response.message
          // self.setState({
          //   errors: message_text.split(','),
          // });
        }
      } else {
        setOmiseToken(() => response.id)
        // self.setOmiseToken(response.id);
      }
    })
    return false
  },
  onClickCharge: ({ charge, omiseToken }) => () => {
    charge(omiseToken)
  },
}

const enhance = compose(
  lifecycle(cycle),
  connect(null, { charge }),
  withState('omiseToken', 'setOmiseToken', ''),
  withInput('cardName'),
  withInput('cardNo'),
  withInput('expireMonth'),
  withInput('expireYear'),
  withInput('cvc'),
  withHandlers(handlers)
)

export default enhance(CreditCard)
