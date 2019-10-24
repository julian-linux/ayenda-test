import React from 'react'
import { Row } from 'reactstrap'
import Loading from 'components/loading'
import Artist from 'components/artist'
import { useData } from 'hooks'

const Artists = () => {
  const data = useData('artists')

  if (!data.data || data.loading) {
    return <Loading />
  }

  return (
    <Row>
      {data.data.map((artist, key) => <Artist key={`artist-${key}`} {...artist} />)}
    </Row>
  )
}

export default Artists
