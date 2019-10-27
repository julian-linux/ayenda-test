import React from 'react'
import { Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './index.scss'

const Cover = ({ id, image, name, isAlbum = false }) => {
  let link = `/artists/${id}/albums`
  let adClass = 'cover-valign'
  if (isAlbum) {
    link = `/albums/${id}/songs`
    adClass = ''
  }
  const coverName = <span className='cover-name'>{name}</span>
  return (
    <Col sm='3' className='p-2 text-center align-middle cover-container'>
      <NavLink to={link} className='text-white text-bold'>
        <div className={`cover-image ${adClass}`} style={{ backgroundImage: `url("${image}")` }}>
          {isAlbum || coverName}
        </div>
      </NavLink>
      {isAlbum && coverName}
    </Col>
  )
}

export default Cover
