import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'
import Order from './Order'
import { createProject } from '../../actions/order'

const mapState = state => {
  return {
    order: state.order,
  }
}

const mapDispatch = dispatch => {
  return {
    createProject: bindActionCreators(createProject, dispatch),
  }
}

const handlers = {
  onClickCreateProject: ({ createProject, history, order }) => async () => {
    const res = await createProject()
    if (res.payload) {
      return history.push(`/project/upload`)
    }
  },
}

const enhance = compose(
  withRouter,
  connect(mapState, mapDispatch),
  withHandlers(handlers)
)
export default enhance(Order)
