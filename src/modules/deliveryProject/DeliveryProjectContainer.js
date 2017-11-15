import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import DeliveryProject from './DeliveryProject'
import { setOrder } from '../../actions/order'

const mapState = state => {
  return {
    deliveries: state.order.deliveries,
  }
}

const handlers = {
  onClickAddDelivery: ({ setOrder, deliveries }) => () => {
    setOrder({
      deliveries: [...deliveries, { hide: false }],
    })
  },
  onClickHideDelivery: ({ setOrder, deliveries }) => hideIndex => {
    setOrder({
      deliveries: deliveries.map((delivery, index) => {
        if (hideIndex === index) {
          return { ...delivery, hide: !delivery.hide }
        }
        return delivery
      }),
    })
  },
  onClickDeleteDelivery: ({ setOrder, deliveries }) => removeIndex => {
    const removedDeliveries = deliveries.filter(
      (delivery, index) => index !== removeIndex
    )
    setOrder({
      deliveries: removedDeliveries,
    })
  },
}

const enhance = compose(connect(mapState, { setOrder }), withHandlers(handlers))
export default enhance(DeliveryProject)
