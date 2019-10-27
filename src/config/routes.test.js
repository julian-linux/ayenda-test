import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers, { initialState } from 'reducers'

import RoutesConfig from './routes'
import GenresPage from 'pages/genres'
import AlbumsPage from 'pages/albums'
import ArtistsPage from 'pages/artists'
import SongsPage from 'pages/songs'
import NotFoundPage from 'pages/not-found'

const store = createStore(reducers, initialState)

afterEach(async () => {
  try {
    await Loadable.preloadAll()
  } catch (err) {}
})

describe('Routes configuration ', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter initialEntries={['/']}>
        <RoutesConfig />
      </MemoryRouter>
    )
  })

  it('should render Genres Page if path is setted', async () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['genres']}>
          <RoutesConfig />
        </MemoryRouter>
      </Provider>
    )

    expect(component.contains(GenresPage)).toBeTruthy()
  })

  it('should render Albums Page if path is setted', async () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/artists/1/albums']}>
          <RoutesConfig />
        </MemoryRouter>
      </Provider>
    )

    expect(component.contains(AlbumsPage)).toBeTruthy()
  })

  it('should render Artist Page if path is setted', async () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/artists']}>
          <RoutesConfig />
        </MemoryRouter>

      </Provider>
    )

    expect(component.contains(ArtistsPage)).toBeTruthy()
  })

  it('should render Artist Page as Home/Default Page', async () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <RoutesConfig />
        </MemoryRouter>

      </Provider>
    )

    expect(component.contains(ArtistsPage)).toBeTruthy()
  })

  it('should render Songs Page if path is setted', async () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['albums/1/songs']}>
          <RoutesConfig />
        </MemoryRouter>
      </Provider>
    )

    expect(component.contains(SongsPage)).toBeTruthy()
  })

  it('should render Not Found Page if path is not defined in routes', async () => {
    const component = mount(
      <MemoryRouter initialEntries={['/path/to/route']}>
        <RoutesConfig />
      </MemoryRouter>
    )

    expect(component.contains(NotFoundPage)).toBeTruthy()
  })
  /** */
})
