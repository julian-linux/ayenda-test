import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar className='bg-light mb-2' expand='lg'>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem className='mr-3'>
            <NavLink to='/artists'>Home/Artists</NavLink>
          </NavItem>
          <NavItem className='mr-2'>
            <NavLink to='/genres'>Genres</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavComponent
