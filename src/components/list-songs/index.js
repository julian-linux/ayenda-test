import React from 'react'
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap'

const List = ({ data, isAlbum, id, onSelectItem }) => (
  <ListGroup>
    {data.map(({ name, preview_url: previewUrl, spotify_url: spotifyUrl }, key) => (
      <ListGroupItem key={`item-${key}`} className='list-item align-middle'>
        <Row>
          <Col sm='4'>
            {previewUrl ? (
              <audio controls>
                <source src={previewUrl} type='audio/mpeg' />
              </audio>
            ) : 'No hay preview de Canción'}

          </Col>
          <Col sm='8'>
            <Button onClick={() => onSelectItem(spotifyUrl)} color='link' size='lg'>{name}</Button>
          </Col>
        </Row>

      </ListGroupItem>
    ))}
  </ListGroup>
)

export default List
