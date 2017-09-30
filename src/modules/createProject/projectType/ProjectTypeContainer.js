import axios from 'axios'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import ProjectType from './ProjectType'

const cycle = {
  async componentDidMount() {
    const { setProjectTypeList, setObjectiveTypeList } = this.props
    const projectTypes = axios({
      method: 'GET',
      url: `/api/project_type`,
    })

    const objectiveTypes = axios({
      method: 'GET',
      url: `/api/objective_type`,
    })
    const { data: projectTypeDatas } = await projectTypes
    const { data: objectiveTypeDatas } = await objectiveTypes
    setProjectTypeList(() => projectTypeDatas)
    setObjectiveTypeList(() => objectiveTypeDatas)
  },
}

const enhance = compose(
  withState('projectTypeList', 'setProjectTypeList', []),
  withState('objectiveTypeList', 'setObjectiveTypeList', []),
  lifecycle(cycle)
)

export default enhance(ProjectType)
