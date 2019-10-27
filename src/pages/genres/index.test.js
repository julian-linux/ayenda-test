import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Loading from 'components/loading'
import ListGenres from 'components/list-genres'
import reducers, { initialState } from 'reducers'
import GenresPage from '.'

const url = 'genres'

const mockState = { ...initialState }

mockState.endpoints[url] = {
  loading: false,
  data: ['rock', 'pop']
}

describe('Genres Page', () => {
  it('renders without crashing', () => {
    const store = createStore(reducers, initialState)
    shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={[url]}>
          <GenresPage />
        </MemoryRouter>
      </Provider>
    )
  })

  it('shoud loading if has not data', () => {
    mockState.endpoints[url].loading = true
    const store = createStore(reducers, mockState)
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <GenresPage />
        </MemoryRouter>
      </Provider>
    )
    expect(component.contains(Loading)).toBeTruthy()
    mockState.endpoints[url].loading = false
  })

  it('shoud List songs if has data', () => {
    const store = createStore(reducers, mockState)
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <GenresPage />
        </MemoryRouter>
      </Provider>
    )
    expect(component.contains(ListGenres)).toBeTruthy()
  })
})
