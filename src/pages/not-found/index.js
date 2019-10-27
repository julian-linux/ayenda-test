import React from 'react'
import { Row, Col, Jumbotron } from 'reactstrap'
const NotFound = () => (
  <Row>
    <Col>
      <Jumbotron>
        <h1 className='display-3'>404!</h1>
        <p className='lead'>Page not found</p>
        <hr className='my-2' />
      </Jumbotron>
    </Col>
  </Row>
)

export default NotFound
