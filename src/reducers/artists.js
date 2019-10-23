import TYPES from 'types/artists'

const initialState = {
  loading: false,
  data: []
}

const artistsReducer = (state = initialState, {type, payload = null}) => {
  switch(type) {
    default: 
      return state
  }
}

export default artistsReducer
