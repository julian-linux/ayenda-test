import React from 'react'
import { Row } from 'reactstrap'
import Loading from 'components/loading'
import Artist from 'components/artist'
import { useData } from 'hooks'
import { useLocation } from 'react-router-dom'

const Albums = () => {
  const { pathname } = useLocation()
  const data = useData(pathname)
  console.log('data', data)

  if (!data.data || data.loading) {
    return <Loading />
  }

  return (
    <Row>
      {data.data.map((album, key) => (
        <Artist
          {...album}
          key={`artist-${key}`}
          isAlbum
        />
      ))}
    </Row>
  )
}

export default Albums
