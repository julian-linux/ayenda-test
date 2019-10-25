import React from 'react'
import { Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './index.scss'

const ArtistImg = ({ id, image, name, isAlbum = false }) => {
  let textClass = ''
  let link = `/artists/${id}/albums`
  if (isAlbum) {
    textClass = 'artist-component-name'
    link = `/albums/${id}/songs`
  }
  return (
    <Col sm='3' className='p-2 text-center align-middle artist-container'>
      <NavLink to={link} className={`text-white text-bold ${textClass}`}>
        <div className='artist-image' style={{ backgroundImage: `url("${image}")` }}>
          <span>{name}</span>
        </div>
      </NavLink>
    </Col>
  )
}

export default ArtistImg
