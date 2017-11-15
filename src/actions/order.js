import { createAction } from 'redux-actions'
import axios from 'axios'
import {
  SET_ORDER,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_CHARGE,
  CREATE_CHARGE_SUCCESS,
} from '../constants/ActionTypes'

export const setOrder = createAction(SET_ORDER)
const createProjectRequest = createAction(CREATE_PROJECT_REQUEST)
const createProjectSuccess = createAction(CREATE_PROJECT_SUCCESS)

const createCharge = createAction(CREATE_CHARGE)
const createChageSuccess = createAction(CREATE_CHARGE_SUCCESS)

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

export const charge = tokenId => {
  return async dispatch => {
    try {
      dispatch(createProjectRequest())
      const { data } = await axios({
        method: 'POST',
        data: { tokenId },
        url: `/api/payment/charge`,
      })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export const chargeInternetBanking = tokenId => {
  return async dispatch => {
    try {
      dispatch(createProjectRequest())
      const { data } = await axios({
        method: 'POST',
        data: { tokenId },
        url: `/api/payment/chargeInternetBanking`,
      })
      console.log(data)
      return data
    } catch (e) {
      console.log(e)
    }
  }
}
