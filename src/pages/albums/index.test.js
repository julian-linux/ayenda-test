import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AlbumsPage from '.'
import Cover from 'components/cover'
import Loading from 'components/loading'
import reducers, { initialState } from 'reducers'
const url = '/artists/1/albums'

const mockState = { ...initialState }

mockState.endpoints[url] = {
  loading: false,
  data: [
    {
      id: 20,
      image: 'https://i.scdn.co/image/ab67616d0000b2737ba54b0fa3fe1c986a318446',
      name: 'Do I Wanna Know?',
      spotify_url: 'https://open.spotify.com/album/0GrKYRlFm3vI2YOZZ9mHNs',
      total_tracks: 2
    },
    {
      id: 20,
      image: 'https://i.scdn.co/image/ab67616d0000b2737ba54b0fa3fe1c986a318446',
      name: 'Do I Wanna Know?',
      spotify_url: 'https://open.spotify.com/album/0GrKYRlFm3vI2YOZZ9mHNs',
      total_tracks: 2
    }
  ]
}

describe('Albums Page', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter initialEntries={[url]}>
        <AlbumsPage />
      </MemoryRouter>
    )
  })

  it('shoud loading if has not data', () => {
    const store = createStore(reducers, initialState)
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AlbumsPage />
        </MemoryRouter>
      </Provider>
    )
    expect(component.contains(Loading)).toBeTruthy()
  })

  it('should have multiple cover components if has data', () => {
    const store = createStore(reducers, mockState)

    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[url]}>
          <AlbumsPage />
        </MemoryRouter>
      </Provider>
    )

    expect(component.find(Cover).length).toBeGreaterThan(1)
  })
})
