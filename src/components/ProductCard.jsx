import { Card, Button, Form, Row, Col } from 'react-bootstrap'

const ProductCard = (props) => {
  const { product } = props

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Rp.{product.price.toLocaleString()}k</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
