import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../productsStore'

const Store = () => {
  return (
    <>
      <h1>Welcome to the Store!</h1>
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
      </Row>
    </>
  )
}

export default Store
