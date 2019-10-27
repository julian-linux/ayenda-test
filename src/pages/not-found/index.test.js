import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '.'

describe('NotFound Page', () => {
  it('renders without crashing', () => {
    shallow(<NotFoundPage />)
  })
})
