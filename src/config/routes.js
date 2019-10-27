import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from 'components/loading'

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

const NotFound = Loadable({
  loader: () => import('pages/not-found'),
  loading: Loading
})

const Routes = () => (
  <Switch>
    <Route path='/albums/:id/songs' exact component={Songs} />
    <Route path='/artists/:id/albums' exact component={Albums} />
    <Route path='/artists' exact component={Artists} />
    <Route path='/genres' exact component={Genres} />
    <Route path='/' exact component={Artists} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
