import React from 'react'
import { Row } from 'reactstrap'
import Loading from 'components/loading'
import Cover from 'components/cover'
import { useData } from 'hooks'
import { useLocation } from 'react-router-dom'

const Albums = () => {
  const { pathname } = useLocation()
  const data = useData(pathname)

  if (!data.data || data.loading) {
    return <Loading />
  }

  return (
    <Row>
      {data.data.map((album, key) => (
        <Cover
          {...album}
          key={`cover-${key}`}
          isAlbum
        />
      ))}
    </Row>
  )
}

export default Albums
