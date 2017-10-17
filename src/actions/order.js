import { createAction } from 'redux-actions'
import axios from 'axios'
import {
  SET_ORDER,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
} from '../constants/ActionTypes'

export const setOrder = createAction(SET_ORDER)
const createProjectRequest = createAction(CREATE_PROJECT_REQUEST)
const createProjectSuccess = createAction(CREATE_PROJECT_SUCCESS)

export const createProject = () => {
  return async (dispatch, getState) => {
    dispatch(createProjectRequest())
    try {
      const { data } = await axios({
        method: 'POST',
        data: {}, //getState().order,
        url: `/api/orders`,
      })
      const { _id: orderId } = data.result
      return dispatch(createProjectSuccess(orderId))
    } catch (e) {
      console.log(e)
    }
  }
}
