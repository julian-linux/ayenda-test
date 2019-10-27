import reducers, { initialState } from 'reducers'
import TYPES from 'types'

const route = 'test'
const data = []
const selectedSong = ''

describe('Reducers ', () => {
  it('should return initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState)
  })

  it('should handle TYPES.DATA.REQUEST', () => {
    const reducer = reducers(undefined, { payload: { route }, type: TYPES.DATA.REQUEST })
    const reducerExpected = { selectedSong, endpoints: { test: { loading: true, data } } }
    expect(reducer).toEqual(reducerExpected)
  })

  it('should handle TYPES.DATA.SUCCESS', () => {
    const mockData = { test: 'test' }
    const reducer = reducers(undefined, { payload: { route, data: mockData }, type: TYPES.DATA.SUCCESS })
    const reducerExpected = { selectedSong, endpoints: { test: { loading: false, data: mockData } } }
    expect(reducer).toEqual(reducerExpected)
  })

  it('should handle TYPES.DATA.SUCCESS with data', () => {
    const reducer = reducers(undefined, { payload: { route }, type: TYPES.DATA.SUCCESS })
    const reducerExpected = { selectedSong, endpoints: { test: { loading: false, data } } }
    expect(reducer).toEqual(reducerExpected)
  })

  it('should handle TYPES.DATA.ERROR', () => {
    const error = 'error'
    const reducer = reducers(undefined, { payload: { route, error }, type: TYPES.DATA.ERROR })
    const reducerExpected = { selectedSong, endpoints: { test: { loading: false, data, error } } }
    expect(reducer).toEqual(reducerExpected)
  })

  it('should handle TYPES.DATA.SONG', () => {
    const song = 'test'
    const reducer = reducers(undefined, { payload: { song }, type: TYPES.SELECT.SONG })
    const reducerExpected = { endpoints: {}, selectedSong: song }
    expect(reducer).toEqual(reducerExpected)
  })
})
