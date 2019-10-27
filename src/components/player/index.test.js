import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Popover, ListGroupItem, Button } from 'reactstrap'
import reducers, { initialState } from 'reducers'

import Player from '.'
// import Loading from 'components/loading'

const route = '/albums/20/songs'

let actionCalled = false

const data = [
  {
    id: 165,
    name: '2013',
    spotify_url: 'https://open.spotify.com/track/3FiVtA8z2yUOyw7MiHjiVM',
    preview_url: 'https://p.scdn.co/mp3-preview/82bd3ffd727cc8c743e55ad3c84737c5fda147c2?cid=76ef95421e3a4e7aac6358eba6727257',
    duration_ms: '146887',
    explicit: 'f'
  },
  {
    id: 164,
    name: 'Do I Wanna Know?',
    spotify_url: 'https://open.spotify.com/track/7xmwLmkoWpghkq8jyEhtbx',
    preview_url: 'https://p.scdn.co/mp3-preview/d0d17c547f9b96a808ca4a248fb5603d29c35f69?cid=76ef95421e3a4e7aac6358eba6727257',
    duration_ms: '273424',
    explicit: 'f'
  }
]

jest.mock('actions', () => ({
  dispatchActionSelectSong: () => song => {
    actionCalled = true
  }
}))

describe('Player Component', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  beforeEach(() => {
    actionCalled = false
  })

  it('renders without crashing', () => {
    const store = createStore(reducers, initialState)
    shallow(
      <Provider store={store}>
        <MemoryRouter>
          <Player />
        </MemoryRouter>
      </Provider>
    )
  })

  it('should render NULL if there is NOT a song in store', () => {
    const store = createStore(reducers, initialState)
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Player />
        </MemoryRouter>
      </Provider>
    )
    expect(component.contains(Player)).toBeFalsy()
  })

  it('should render if there is a song in store', () => {
    const mockState = { ...initialState }
    mockState.selectedSong = 'https://open.spotify.com/track/7xmwLmkoWpghkq8jyEhtbx'
    const store = createStore(reducers, mockState)
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Player />
        </MemoryRouter>
      </Provider>
    )
    expect(component.contains(Player)).toBeTruthy()
  })

  it('should render suggested songs button/list if there is songs in store', () => {
    const mockState = { ...initialState }
    mockState.selectedSong = 'https://open.spotify.com/track/7xmwLmkoWpghkq8jyEhtbx'
    mockState.endpoints[route] = {
      loading: false,
      data
    }
    const store = createStore(reducers, mockState)

    const component = mount((
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Player />
        </MemoryRouter>
      </Provider>),
    { attachTo: div }
    )
    component.find('iframe').first().simulate('load')
    expect(component.find(Popover).first()).toBeTruthy()
    component.unmount()
  })

  it('should open suggesteds songs list when the suggest button is clicked', () => {
    const mockState = { ...initialState }
    mockState.selectedSong = 'https://open.spotify.com/track/7xmwLmkoWpghkq8jyEhtbx'
    mockState.endpoints[route] = {
      loading: false,
      data
    }
    const store = createStore(reducers, mockState)

    const component = mount((
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Player />
        </MemoryRouter>
      </Provider>),
    { attachTo: div }
    )
    component.find('iframe').first().simulate('load')
    component.find('#suggestions').first().simulate('click')
    expect(component.find(Popover).first().props().isOpen).toBeTruthy()

    component.unmount()
  })

  it('should hide list and should dispatch actio  when a sugested song is selected', () => {
    const mockState = { ...initialState }
    mockState.selectedSong = 'https://open.spotify.com/track/7xmwLmkoWpghkq8jyEhtbx'
    mockState.endpoints[route] = {
      loading: false,
      data
    }
    const store = createStore(reducers, mockState)

    const component = mount((
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Player />
        </MemoryRouter>
      </Provider>),
    { attachTo: div }
    )
    component.find('iframe').first().simulate('load')
    component.find('#suggestions').first().simulate('click')

    component.find(ListGroupItem).first().find(Button).first().simulate('click')
    expect(component.find(Popover).first().props().isOpen).toBeFalsy()
    expect(actionCalled).toBeTruthy()
    component.unmount()
  })
})
