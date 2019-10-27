import React from 'react'
import { shallow } from 'enzyme'
import { ListGroupItem } from 'reactstrap'
import ListGenres from '.'

const data = ['rock', 'pop']

describe('ListGenres Component', () => {
  it('renders without crashing', () => {
    shallow(<ListGenres data={data} />)
  })

  it('should have genres if there is data', () => {
    const component = shallow(<ListGenres data={data} />)
    expect(component.find(ListGroupItem)).toHaveLength(2)
  })
})
