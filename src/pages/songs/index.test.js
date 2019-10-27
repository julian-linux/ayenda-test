import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import SongsPage from '.'
import ListSongs from 'components/list-songs'
import Loading from 'components/loading'
import reducers, { initialState } from 'reducers'
import { Button } from 'reactstrap'

const url = '/albums/20/songs'

let selectedSong = ''

jest.mock('actions', () => ({
  dispatchActionSelectSong: () => song => {
    selectedSong = song
  }
}))

beforeEach(() => {
  selectedSong = ''
})

afterEach(() => {
  selectedSong = ''
})

const mockState = { ...initialState }

mockState.endpoints[url] = {
  loading: false,
  data: [
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
}

describe('Songs Page', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter initialEntries={[url]}>
        <SongsPage />
      </MemoryRouter>
    )
  })

  it('shoud loading if has not data', () => {
    mockState.endpoints[url].loading = true
    const store = createStore(reducers, mockState)
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[url]}>
          <SongsPage />
        </MemoryRouter>
      </Provider>
    )
    expect(component.contains(Loading)).toBeTruthy()
    mockState.endpoints[url].loading = false
  })

  it('should have list songs if has data', () => {
    const store = createStore(reducers, mockState)

    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[url]}>
          <SongsPage />
        </MemoryRouter>
      </Provider>
    )

    expect(component.contains(ListSongs)).toBeTruthy()
  })

  it('should dispatch action if a song is selected', () => {
    const store = createStore(reducers, mockState)

    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[url]}>
          <SongsPage />
        </MemoryRouter>
      </Provider>
    )

    component.find(ListSongs).first().find(Button).first().simulate('click')
    expect(selectedSong).toEqual(mockState.endpoints[url].data[0].spotify_url)
  })
})
