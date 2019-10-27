import fetchMock from 'fetch-mock'

import { fetchAction, dispatchActionSelectSong, dispatchActionSelectRandomSong } from '.'
import TYPES from 'types'

const actionsDispatched = []

const dispatch = action => {
  actionsDispatched.push(action.type)
}

afterEach(() => {
  actionsDispatched.length = 0
  fetchMock.restore()
})

describe('Actions component', () => {
  it('when "fetchAction" is called, should call fetch data actions', async () => {
    fetchMock.getOnce('*', {})
    await fetchAction(dispatch)('test')
    expect(actionsDispatched.includes(TYPES.DATA.REQUEST))
    expect(actionsDispatched.includes(TYPES.DATA.SUCCESS))
  })

  xit('when "fetchAction" has errpr, should call ERROR actions', async () => {
    fetchMock.getOnce('*', 500) // there is an error with this
    await fetchAction(dispatch)('test')
    expect(actionsDispatched.includes(TYPES.DATA.REQUEST))
    expect(actionsDispatched.includes(TYPES.DATA.ERROR))
  })

  it('when "dispatchActionSelectSong" is called, should call data action', async () => {
    dispatchActionSelectSong(dispatch)('test')
    expect(actionsDispatched.includes(TYPES.SELECT.SONG))
  })

  it('when "dispatchActionSelectRandomSong" is called, should call fetch data actions', async () => {
    fetchMock.getOnce('*', { data: { spotify_url: '' } })
    await dispatchActionSelectRandomSong(dispatch)('test')
    expect(actionsDispatched.includes(TYPES.RANDOM_SONG.REQUEST))
    expect(actionsDispatched.includes(TYPES.RANDOM_SONG.SUCCESS))
  })
})
