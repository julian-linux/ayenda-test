import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchAction } from 'actions'
// import { selectRouteData } from 'selectors'
// import isEmpty from 'lodash/isEmpty'
import { useData } from 'hooks'
const route = 'artists'

const Artists = () => {
  const data = useData(route)
  console.log('data', data)

  return (<div>Artists</div>)
}

Artists.route = 'artis'

export default Artists
