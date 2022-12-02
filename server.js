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
Data from react
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
    price: 99000
    quantity: 3
  }
]
  */
})
