import fetch from 'config/api'

import {
  fetchDataAC, fetchDataSuccessAC, fetchDataErrorAC, selectSongAc
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

export const dispatchActionSelectSong = dispatch => async (song) => {
  dispatch(selectSongAc(song))
}
