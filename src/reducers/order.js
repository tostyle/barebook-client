import { SET_ORDER, CREATE_PROJECT_SUCCESS } from '../constants/ActionTypes'

const getInitialState = () => ({
  _id: '',
  name: '',
  project_type: '',
  objective_type: '',
  package: '',
  promotion: '',
  user_id: null,
  total_page: 0,
  total_book: 0,
  size: {
    _id: '',
    name: '',
    detail: '',
  },
  cover_type: {
    _id: '',
    name: '',
    detail: '',
  },
  paper_type: {
    _id: '',
    name: '',
    detail: '',
  },
  binding_type: '',
  bw_page: '',
  color_page: '',
  color: {
    color_pages: [],
  },
  files: {
    front_cover: '',
    back_cover: '',
    spine: '',
    book: '',
  },
  pages: [],
  technics: [],
  deliveries: [],
  payment: {
    status: '',
    amount: 0,
    pay_date: null,
  },
})

const order = (state = getInitialState(), action) => {
  switch (action.type) {
    case SET_ORDER:
      return Object.assign({}, state, action.payload)
    case CREATE_PROJECT_SUCCESS:
      return Object.assign({}, state, { _id: action.payload })
    default:
      return state
  }
}
export default order
