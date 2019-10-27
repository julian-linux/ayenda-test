import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'reactstrap'
import ListSongs from '.'

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

describe('ListSongs Component', () => {
  it('renders without crashing', () => {
    shallow(<ListSongs data={data} />)
  })

  it('should have songs if there is data', () => {
    const component = shallow(<ListSongs data={data} />)
    expect(component.find('.list-item')).toHaveLength(2)
  })

  it('should show song preview if there is previewUrl', () => {
    const component = shallow(<ListSongs data={data} />)
    expect(component.find('audio')).toHaveLength(2)
  })

  it('should NOT show song preview if there is NOT previewUrl', () => {
    const testData = [...data]
    delete testData[0].preview_url
    delete testData[1].preview_url
    const component = shallow(<ListSongs data={testData} />)
    expect(component.find('audio')).toHaveLength(0)
  })

  it('should play song when is selected', () => {
    let actionCalled = false
    const component = shallow(<ListSongs data={data} onSelectItem={() => { actionCalled = true }} />)
    component.find(Button).first().simulate('click')
    expect(actionCalled).toBeTruthy()
  })
})
