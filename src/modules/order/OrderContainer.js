import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Order from './Order'

const mapState = state => {
  return {
    order: state.order,
  }
}
const OrderWithRouter = withRouter(Order)

export default connect(mapState)(OrderWithRouter)
