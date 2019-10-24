import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Routes from 'config/routes'
import store from 'config/store'
import Nav from 'components/nav'

const App = () => (
  <Provider store={store}>
    <Router>
      <Container>
        <Row>
          <Col>
            <Nav />
          </Col>
        </Row>
        <Row>
          <Col className='p-4'>
            <Routes />
          </Col>
        </Row>
      </Container>
    </Router>
  </Provider>
)

export default App
