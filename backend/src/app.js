const router = require('./routes/user.routes.js')
const address = require('./routes/address.routes.js')
const express = require('express')
const appp = express()
appp.use(express.json());
appp.use("/api", router)
appp.use("/api/address", address)
module.exports = appp;