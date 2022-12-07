// Panci Susu 20 cm: price_1MAV7WBCzbmNogDuwCAIb0Cm
// Panci Susu Non Stick 20 cm: price_1MAVBoBCzbmNogDuNOwFK7AX
// Mesin Cuci Mini: price_1MAVFaBCzbmNogDu032exKAc

const productsArray = [
  {
    id: 'price_1MAV7WBCzbmNogDuwCAIb0Cm',
    title: 'Panci Susu Stainless Steel',
    price: 110900,
  },
  {
    id: 'price_1MAVBoBCzbmNogDuNOwFK7AX',
    title: 'Panci Susu Non Stick',
    price: 85000,
  },
  {
    id: 'price_1MAVFaBCzbmNogDu032exKAc',
    title: 'Mesin Cuci 4.5 kg',
    price: 624800,
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
