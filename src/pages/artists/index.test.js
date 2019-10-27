import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Button } from 'reactstrap'
import ArtistsPage from '.'
import Cover from 'components/cover'
import Loading from 'components/loading'
import reducers, { initialState } from 'reducers'

let randomGenre = ''

jest.mock('actions', () => ({
  dispatchActionSelectRandomSong: () => genre => {
    randomGenre = genre
  }
}))

beforeEach(() => {
  randomGenre = ''
})

afterEach(() => {
  randomGenre = ''
})

const url = 'artists'

const mockState = { ...initialState }

mockState.endpoints.genres = {
  loading: false,
  data: ['garage_rock', 'modern_rock', 'permanent_wave']
}

mockState.endpoints[url] = {
  loading: false,
  data: [
    {
      id: 1,
      image: 'https://i.scdn.co/image/ed0552e9746ed2bbf04ae4bcb5525700ca31522d',
      name: 'Arctic Monkeys',
      popularity: '83.0',
      spotify_id: '7Ln80lUS6He07XvHI8qqHH',
      spotify_url: 'https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH'
    },
    {
      id: 2,
      image: 'https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91',
      name: 'Metallica',
      popularity: '84.0',
      spotify_id: '2ye2Wgw4gimLv2eAKyk1NB',
      spotify_url: 'https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB'
    }
  ]
}

describe('Artists Page', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter initialEntries={[url]}>
        <ArtistsPage />
      </MemoryRouter>
    )
  })

  it('shoud loading if has not data', () => {
    const store = createStore(reducers, initialState)

    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ArtistsPage />
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
          <ArtistsPage />
        </MemoryRouter>
      </Provider>
    )

    expect(component.find(Cover).length).toBeGreaterThan(1)
  })

  it('should search a random song if button is clicked', () => {
    const store = createStore(reducers, mockState)

    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[url]}>
          <ArtistsPage />
        </MemoryRouter>
      </Provider>
    )

    component.find(Button).first().simulate('click')
    expect(mockState.endpoints.genres.data.includes(randomGenre))
  })
})
