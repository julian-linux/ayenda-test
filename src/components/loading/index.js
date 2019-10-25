import React from 'react'
import { Row, Col, Spinner } from 'reactstrap'

const Loading = () => (
  <Row>
    <Col className='mt-5 mb-5 text-center'><Spinner color='primary' /></Col>
  </Row>
)

export default Loading
