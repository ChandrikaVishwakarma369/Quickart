const express = require('express')
const router = express.Router()
const {addProduct} = require('../controllers/product.controller.js')
router.post('/create', addProduct)
module.exports = router;