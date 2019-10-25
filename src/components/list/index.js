import React from 'react'
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap'

const List = ({ data, isAlbum, id, onSelectItem }) => (
  <ListGroup>
    {data.map(({ name, preview_url, spotify_url }, key) => (
      <ListGroupItem key={`item-${key}`} className='list-item align-middle'>
        <Row>
          <Col sm='4'>
            <audio controls>
              <source src={preview_url} type='audio/mpeg' />
            </audio>
          </Col>
          <Col sm='8'>
            <Button onClick={() => onSelectItem(spotify_url)} color='link' size='lg'>{name}</Button>
          </Col>
        </Row>

      </ListGroupItem>
    ))}
  </ListGroup>
)

export default List
