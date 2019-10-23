import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

const middlewares = [thunk];

let enhancers = applyMiddleware(...middlewares);

// Dev tools are helpful
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (typeof devToolsExtension === 'function') {
    enhancers = devToolsExtension(applyMiddleware(...middlewares))
  }
}



export default createStore(
  reducers,
  {},
  enhancers,
);