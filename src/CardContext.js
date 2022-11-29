import { createContext, useState } from 'react'
import { productsArray, getProductData } from './productsStore'

export const CardContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneToCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
})

export function CardProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity

    if (quantity === undefined) return 0

    return quantity
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([...cartProducts, { id: id, quantity: 1 }])
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      )
    }
  }

  function removeOneToCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity == 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      )
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => currentProduct.id != id)
    )
  }

  function getTotalCost() {
    let totalCost = 0
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id)
      totalCost += productData.price * cartItem.quantity
    })
    return totalCost
  }

  const contextValue = {
    items: [],
    getProductQuantity,
    addOneToCart,
    removeOneToCart,
    deleteFromCart,
    getTotalCost,
  }

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  )
}

export default CardProvider
