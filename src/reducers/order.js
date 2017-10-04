import { SET_ORDER } from '../constants/ActionTypes'

const getInitialState = () => ({
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
  files: {
    front_cover: '',
    back_cover: '',
    spine: '',
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
    default:
      return state
  }
}
export default order
