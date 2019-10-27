import React from 'react'
import ListSongs from 'components/list-genres'
import Loading from 'components/loading'
import { useData } from 'hooks'

const Genres = () => {
  const data = useData('genres')

  if (!data.data || data.loading) {
    return <Loading />
  }

  return (
    <ListSongs data={data.data} />
  )
}

export default Genres
