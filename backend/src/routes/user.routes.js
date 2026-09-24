const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/user.controller.js')
router.post('/users/register', registerUser)
router.post('/users/login', loginUser)
module.exports = router;