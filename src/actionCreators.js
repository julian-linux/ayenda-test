import TYPES from 'types'

export const fetchDataAC = route => ({ type: TYPES.DATA.REQUEST, payload: { route } })

export const fetchDataSuccessAC = (data, route) => ({
  type: TYPES.DATA.SUCCESS,
  payload: { data, route }
})

export const fetchDataErrorAC = (error, route) => ({
  type: TYPES.DATA.ERROR,
  payload: { error, route }
})
