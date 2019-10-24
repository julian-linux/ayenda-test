import React, { useEffect } from 'react'
import { fetchAction } from 'actions'

const Genres = () => {
  const data = fetchAction('genres')

  return (<div>Genres</div>)
}

export default Genres
