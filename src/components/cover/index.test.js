import React from 'react'
import { shallow } from 'enzyme'
import Cover from '.'

describe('Cover Component', () => {
  it('renders without crashing', () => {
    shallow(<Cover />)
  })

  it('should have class "artist-component-name" if isAlbum prop', () => {
    const wrapper = shallow(<Cover isAlbum id={0} image='testImg' name='testName' />)
    expect(wrapper.find('.artist-component-name')).toHaveLength(1)
  })
})
