import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Routes from 'config/routes'
import store from 'config/store'
import Nav from 'components/nav'
import Player from 'components/player'

const App = () => (
  <Provider store={store}>
    <Container className='pb-5'>
      <Router>
        <Row>
          <Col>
            <Nav />
          </Col>
        </Row>
        <Row className='pb-5'>
          <Col>
            <Routes />
          </Col>
        </Row>
        <Player />
      </Router>
    </Container>
  </Provider>
)

export default App
