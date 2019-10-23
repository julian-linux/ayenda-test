import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'config/routes'
import store from 'config/store';

const  App= ()=>(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
)


export default App;
