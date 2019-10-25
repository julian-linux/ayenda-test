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

export const selectSongAC = song => ({ type: TYPES.SELECT.SONG, payload: { song } })

export const fetchRandomSongAC = route => ({ type: TYPES.RANDOM_SONG.REQUEST })

export const fetchRandomSongSuccessAC = (data, route) => ({ type: TYPES.RANDOM_SONG.SUCCESS })

export const fetchRandomSongErrorAC = (error, route) => ({
  type: TYPES.RANDOM_SONG.ERROR,
  payload: { error, route }
})
