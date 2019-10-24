import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
// import { NavLink } from 'react-router-dom'
// import './index.scss'

const List = ({ data }) => {
  // let textClass = ''
  // let link = `artists/${id}/albums`
  // if (isAlbum) {
  //   textClass = 'artist-component-name'
  //   link = `album/${id}/songs`
  // }
  return (
    <ListGroup>
      {data.map(({ name }, key) => (
        <ListGroupItem key={`item-${key}`}>
          {name}
        </ListGroupItem>
      ))}
    </ListGroup>
    // <Col className='m-2 artist-component-container text-center'>
    //   <NavLink to={link}>
    //     <img width='200px' height='200px' className='rounded-circle' src={image} alt={name} />
    //     <h6 className={`text-white ${textClass}`}>{name}</h6>
    //   </NavLink>
    // </Col>
  )
}

export default List
