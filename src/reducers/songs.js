import TYPES from 'types/songs'

const initialState = {
  loading: false,
  data: []
}

const songsReducer = (state = initialState, {type, payload = null}) => {
  switch(type) {
    default: 
      return state
  }
}

export default songsReducer
