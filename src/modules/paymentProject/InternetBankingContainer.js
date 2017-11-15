import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { chargeInternetBanking } from '../../actions/order'
import InternetBanking from './InternetBanking'

const handlers = {
  onClickCharge: ({ charge, omiseToken }) => async () => {
    const data = await charge(omiseToken)
    if (data.response) {
      const popUp = window.open(
        data.response.authorize_uri,
        '_blank',
        'width=500,height=500'
      )

      const pollTimer = window.setInterval(function() {
        if (popUp.closed !== false) {
          // !== is required for compatibility with Opera
          window.clearInterval(pollTimer)
          console.log('success')
        }
      }, 2000)
    }
  },
}
const enhance = compose(
  connect(null, { charge: chargeInternetBanking }),
  withHandlers(handlers)
)

export default enhance(InternetBanking)
