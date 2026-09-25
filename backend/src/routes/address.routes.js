const express = require('express')
const router = express.Router()
const {addAddress} = require('../controllers/address.controller.js')
router.post('/create', addAddress)
module.exports = router;