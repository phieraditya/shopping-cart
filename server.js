// sk_test_51MAClnBCzbmNogDuJyztCMZ4AgjcsQCR293VjTxsckDGlhgSTPu9kXzZyJLRdTACl0ROxtwtosuyqBM5sDRg9og700TXghENVM

// Panci Susu 20 cm: price_1MAV7WBCzbmNogDuwCAIb0Cm
// Panci Susu Non Stick 20 cm: price_1MAVBoBCzbmNogDuNOwFK7AX
// Mesin Cuci Mini: price_1MAVFaBCzbmNogDu032exKAc

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51MAClnBCzbmNogDuJyztCMZ4AgjcsQCR293VjTxsckDGlhgSTPu9kXzZyJLRdTACl0ROxtwtosuyqBM5sDRg9og700TXghENVM'
)

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.post('/checkout', async (req, res) => {
  /*
Data from front-end
req.body.items
[
  {
    id: 1,
    quantity: 3
  }
]

Stripe wants
[
  {
    price: 1
    quantity: 3
  }
]
  */
  console.log(req.body)
  const items = req.body.items
  let lineItems = []

  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  })

  res.send(
    JSON.stringify({
      url: session.url,
    })
  )
})

app.listen('4000', () => console.log('Listening on Port 4000!!'))
