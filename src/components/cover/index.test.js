import React from 'react'
import { shallow } from 'enzyme'
import Cover from '.'

describe('Cover Component', () => {
  it('renders without crashing', () => {
    shallow(<Cover />)
  })

  it('should NOT have class "cover-valign" if isAlbum prop', () => {
    const wrapper = shallow(<Cover isAlbum id={0} image='testImg' name='testName' />)
    expect(wrapper.find('.cover-valign').length).toEqual(0)
  })
})
