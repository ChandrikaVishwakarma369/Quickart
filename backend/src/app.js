const router = require('./routes/user.routes.js')
const address = require('./routes/address.routes.js')
const product = require('./routes/product.routes.js')
const express = require('express')
const appp = express()
appp.use(express.json());
appp.use("/api", router)
appp.use("/api/address", address)
appp.use("/api/product", product)
module.exports = appp;