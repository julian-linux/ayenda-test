import React, { useState, useEffect } from 'react'
import { Row, Col, Popover, PopoverHeader, PopoverBody, Button, ListGroup, ListGroupItem } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/loading'

import { dispatchActionSelectSong } from 'actions'

import { ReactComponent as SuggestionIcon } from 'icons/light-bulb.svg'

const Player = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [suggestedSongs, setSuggestedSongs] = useState([])
  const song = useSelector(state => state.selectedSong)
  const albumSongs = useSelector(state => state.endpoints[pathname])

  useEffect(() => {
    if (song) {
      setIsLoading(true)
    }
  }, [song])

  useEffect(() => {
    if (albumSongs && !isEmpty(albumSongs.data)) {
      const songs = []
      for (let i = 0; i < 3; i += 1) {
        if (albumSongs.data[i]) {
          songs.push(albumSongs.data[i])
        } else {
          songs.push(albumSongs.data[i - 1])
        }
        setSuggestedSongs(songs)
      }
    }
  }, [albumSongs])

  const onLoad = () => {
    setIsLoading(false)
  }

  const selectSuggestedSong = song => {
    setPopoverOpen(false)
    dispatchActionSelectSong(dispatch)(song)
  }

  if (!song) {
    return null
  }

  const loading = isLoading && (<Loading />)

  const suggestions = !isLoading && !isEmpty(suggestedSongs) && (
    <>
      <Popover isOpen={popoverOpen} trigger='focus' placement='left' target='suggestions'>
        <PopoverHeader>Sugerencias</PopoverHeader>
        <PopoverBody>
          <ListGroup>
            {suggestedSongs.map(({ name, spotify_url: spotifyUrl }, idx) => (
              <ListGroupItem key={`suggestion-${idx}`}>
                <Button color='link' onClick={() => selectSuggestedSong(spotifyUrl)}>
                  {name}
                </Button>
              </ListGroupItem>))}
          </ListGroup>
        </PopoverBody>
      </Popover>
      <Button id='suggestions' color='link' className='float-right' onClick={() => setPopoverOpen(!popoverOpen)}><SuggestionIcon style={{ width: '48px' }} /></Button>
    </>
  )

  return (
    <Row className='fixed-bottom justify-content-center'>
      <Col md='8'>
        {loading}
        {suggestions}
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
