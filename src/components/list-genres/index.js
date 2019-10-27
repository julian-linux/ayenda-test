import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const ListSongs = ({ data, isAlbum, id, onSelectItem }) => (
  <ListGroup>
    {data.map((name, key) => (
      <ListGroupItem key={`genre-${key}`}>
        <span>{name}</span>
      </ListGroupItem>
    ))}
  </ListGroup>
)

export default ListSongs
