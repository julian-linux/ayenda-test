import { combineReducers } from 'redux';

import albums from './albums.js'
import artists from './artists'
import genres from './genres'
import songs from './songs'

export default combineReducers({
  albums,
  artists,
  genres,
  songs
})