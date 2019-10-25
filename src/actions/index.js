import fetch from 'config/api'

import {
  fetchDataAC, fetchDataSuccessAC, fetchDataErrorAC, selectSongAC,
  fetchRandomSongAC, fetchRandomSongSuccessAC, fetchRandomSongErrorAC
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
  dispatch(selectSongAC(song))
}

export const dispatchActionSelectRandomSong = dispatch => async (randomSong) => {
  const route = `genres/${randomSong}/random_song`
  dispatch(fetchRandomSongAC(route))
  try {
    const { data } = await fetch(route)
    dispatch(fetchRandomSongSuccessAC(data))
    dispatchActionSelectSong(dispatch)(data.spotify_url)
  } catch (error) {
    dispatch(fetchRandomSongErrorAC(error, route))
  }
}
