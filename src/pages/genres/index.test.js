import React from 'react'
import { shallow } from 'enzyme'
import GenresPage from '.'

describe('Genres Page', () => {
  it('renders without crashing', () => {
    shallow(<GenresPage />)
  })
})
