const express = require("express");

const router = express.Router();

const { addToCart, getCart } = require("../controllers/cart.controller.js");

router.post("/add", addToCart);

router.get("/:user", getCart);

module.exports = router;
