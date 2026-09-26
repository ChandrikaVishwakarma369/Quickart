const router = require('./routes/user.routes.js')
const address = require('./routes/address.routes.js')
const product = require('./routes/product.routes.js')
const reviews = require('./routes/review.routes.js')
const express = require('express')
const appp = express()
appp.use(express.json());
appp.use("/api", router)
appp.use("/api/address", address)
appp.use("/api/product", product)
appp.use("/api/review", reviews)
module.exports = appp;