import { createSelector } from 'reselect'

export const selectRouteData = route => createSelector(
  state => state.endpoints,
  endpoints => endpoints[route] || {}
)
