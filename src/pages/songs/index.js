import React from 'react'
import { Row, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Loading from 'components/loading'
import ListSongs from 'components/list-songs'

import { useData } from 'hooks'
import { dispatchActionSelectSong } from 'actions'

const Songs = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const data = useData(pathname)

  const onSelectSong = song => dispatchActionSelectSong(dispatch)(song)

  if (!data.data || data.loading) {
    return <Loading />
  }

  return (
    <Row>
      <Col>
        <ListSongs data={data.data} onSelectItem={onSelectSong} />
      </Col>
    </Row>
  )
}

export default Songs
