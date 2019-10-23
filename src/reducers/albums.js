import TYPES from 'types/albums'

const initialState = {
  loading: false,
  data: []
}

const albumsReducer = (state = initialState, {type, payload = null}) => {
  switch(type) {
    default: 
      return state
  }
}

export default albumsReducer
