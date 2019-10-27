import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import Loading from 'components/loading'
import Cover from 'components/cover'
import { useData } from 'hooks'
import { ReactComponent as PlayIcon } from 'icons/play.svg'
import { dispatchActionSelectRandomSong } from 'actions'
import { useDispatch } from 'react-redux'

const Artists = () => {
  const dispatch = useDispatch()
  const data = useData('artists')
  const genres = useData('genres')

  const playRandomSong = () => {
    const randomGenre = genres.data[Math.floor(Math.random() * genres.data.length)]
    dispatchActionSelectRandomSong(dispatch)(randomGenre)
  }

  if (!data.data || data.loading) {
    return <Loading />
  }

  return (
    <>
      <Row>
        <Col xs='2'>
          <Button onClick={playRandomSong}>
            <PlayIcon style={{ width: '16px', marginRight: '6px' }} />
          Random Song
          </Button>
        </Col>
      </Row>
      <Row className='justify-content-center mt-2'>
        {data.data.map((artist, key) => <Cover key={`cover-${key}`} {...artist} />)}
      </Row>
    </>
  )
}

export default Artists
