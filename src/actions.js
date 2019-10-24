import fetch from 'config/api'

import {
  fetchDataAC, fetchDataSuccessAC, fetchDataErrorAC
} from 'actionCreators'

export const fetchAction = dispatch => async (route) => {
  dispatch(fetchDataAC(route))
  try {
    const { data } = await fetch(route)
    dispatch(fetchDataSuccessAC(data, route))
  } catch (error) {
    dispatch(fetchDataErrorAC(error, route))
  }
}
