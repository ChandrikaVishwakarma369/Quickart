const router = require('./routes/user.routes.js')
const express = require('express')
const appp = express()
appp.use(express.json());
appp.use("/api", router)
module.exports = appp;