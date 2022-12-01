const productsArray = [
  {
    id: '1',
    title: 'Coffee',
    price: 24900,
  },
  {
    id: '2',
    title: 'Sunglasses',
    price: 99900,
  },
  {
    id: '3',
    title: 'Camera',
    price: 3999000,
  },
]

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id)

  if (productData === undefined) {
    console.log('Product data does not exist for ID: ' + id)
    return undefined
  }

  return productData
}

export { productsArray, getProductData }
