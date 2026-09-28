const express = require('express')
const router = express.Router()
const {addOrder} = require('../controllers/order.controller.js')
router.post('/create', addOrder)
module.exports = router;