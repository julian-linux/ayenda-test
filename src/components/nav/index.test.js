import React from 'react'
import { shallow } from 'enzyme'
import { NavbarToggler, Collapse } from 'reactstrap'
import Nav from '.'

describe('Nav Component', () => {
  it('renders without crashing', () => {
    shallow(<Nav />)
  })

  it('should toggle navbar when toggler is clicked', () => {
    const component = shallow(<Nav />)
    component.find(NavbarToggler).first().simulate('click')
    expect(component.find(Collapse).first().props().isOpen).toBeTruthy()
  })
})
