const express = require('express')
const router = express.Router()
const {addReviews} = require('../controllers/review.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')
router.post('/create', authMiddleware, addReviews)
module.exports = router;