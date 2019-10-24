import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAction } from 'actions'
import { selectRouteData } from 'selectors'
import isEmpty from 'lodash/isEmpty'

export const useData = (route) => {
  const dispatch = useDispatch()
  const reducerData = useSelector(selectRouteData(route))

  useEffect(() => {
    if (isEmpty(reducerData)) {
      fetchAction(dispatch)(route)
    }
  }, [reducerData, dispatch, route])

  return reducerData
}
