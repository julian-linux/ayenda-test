import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import Loading from 'components/loading'

const Player = () => {
  const [isLoading, setIsLoading] = useState(true)
  const song = useSelector(state => state.selectedSong)

  useEffect(() => {
    if (song) {
      setIsLoading(true)
    }
  }, [song])
  const onLoad = () => {
    setIsLoading(false)
  }

  if (!song) {
    return null
  }

  const loading = isLoading && (<Loading />)

  return (
    <Row className='fixed-bottom justify-content-center'>
      <Col md='8'>
        {loading}
        <iframe
          onLoad={onLoad}
          title='Spotify'
          className='SpotifyPlayer'
          src={`https://embed.spotify.com?uri=${song}`}
          width='100%'
          height='90px'
          frameBorder='0'
          allowtransparency='true'
        />
      </Col>
    </Row>
  )
}

export default Player
