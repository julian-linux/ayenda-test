import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

// eslint-disable-next-line react/prop-types
const Loading = ({ error = null }) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log('error', error)
  }
  return ''
}

const Genres = Loadable({
  loader: () => import('pages/genres'),
  loading: Loading
})

const Albums = Loadable({
  loader: () => import('pages/albums'),
  loading: Loading
})

const Artists = Loadable({
  loader: () => import('pages/artists'),
  loading: Loading
})

const Songs = Loadable({
  loader: () => import('pages/songs'),
  loading: Loading
})

const RandomSong = Loadable({
  loader: () => import('pages/random-song'),
  loading: Loading
})

const NotFound = Loadable({
  loader: () => import('pages/not-found'),
  loading: Loading
})

const Routes = () => (
  <Switch>
    <Route path='/genres/:genre_name/random_song' exact component={RandomSong} />
    <Route path='/albums/:id/songs' exact component={Songs} />
    <Route path='/artists/:id/albums' exact component={Albums} />
    <Route path='/artists' exact component={Artists} />
    <Route path='/genres' exact component={Genres} />
    <Route path='/' exact component={Artists} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
