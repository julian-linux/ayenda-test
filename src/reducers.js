import TYPES from 'types'

export const initialState = {
  endpoints: {},
  selectedSong: ''
}

const initialPayload = {
  route: null,
  data: null,
  error: null
}

const setReducerData = (state, payload, loading = false) => {
  const endpoints = {
    ...state.endpoints
  }

  let selectedSong = state.selectedSong

  if (payload.route) {
    endpoints[payload.route] = {
      ...endpoints[payload.route],
      loading,
      data: []
    }
    if (payload.data) {
      endpoints[payload.route].data = payload.data
    }
    if (payload.error) {
      endpoints[payload.route].error = payload.error
    }
  }

  if (payload.song) {
    selectedSong = payload.song
  }

  return {
    endpoints,
    selectedSong
  }
}

const genresReducer = (state = initialState, { type, payload = initialPayload }) => {
  switch (type) {
    case TYPES.DATA.REQUEST:
      return setReducerData(state, payload, true)
    case TYPES.DATA.SUCCESS:
      return setReducerData(state, payload)
    case TYPES.DATA.ERROR:
      return setReducerData(state, payload, true)
    case TYPES.SELECT.SONG:
      return setReducerData(state, payload)
    default:
      return state
  }
}

export default genresReducer
