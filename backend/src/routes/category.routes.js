const express = require("express");

const router = express.Router();

const {
  addCategory,
  getCategories,
} = require("../controllers/category.controller.js");

router.post("/add", addCategory);

router.get("/", getCategories);

module.exports = router;
