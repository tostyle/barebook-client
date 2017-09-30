import { compose, lifecycle, withState } from 'recompose'
import axios from 'axios'
import Package from './Package'

const cycle = {
  async componentDidMount() {
    const { setPackageList } = this.props
    const { data } = await axios({
      method: 'GET',
      url: `/api/package`,
    })
    setPackageList(() => data)
  },
}

const enhance = compose(
  withState('packageList', 'setPackageList', []),
  lifecycle(cycle)
)

export default enhance(Package)
