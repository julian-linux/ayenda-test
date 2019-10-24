import React from 'react'
import { Row, Col } from 'reactstrap'
import Loading from 'components/loading'
import List from 'components/list'
import { useData } from 'hooks'
import { useLocation } from 'react-router-dom'

const Songs = () => {
  const { pathname } = useLocation()
  const data = useData(pathname)
  console.log('data', data)

  if (!data.data || data.loading) {
    return <Loading />
  }

  return (
    <Row>
      <Col>
        <List data={data.data} />
      </Col>
    </Row>
  )
}

export default Songs
