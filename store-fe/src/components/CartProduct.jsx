import Button from 'react-bootstrap/Button'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import { getProductData } from '../productsStore'

const CartProduct = (props) => {
  const cart = useContext(CartContext)
  const { id, quantity } = props
  const productData = getProductData(id)

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>Rp.{(quantity * productData.price).toLocaleString()}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  )
}

export default CartProduct
