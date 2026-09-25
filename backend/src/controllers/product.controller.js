const Product = require("../models/product.model.js");
//create product
const addProduct = async (req, res) => {
  try {
    const {
      productname,
      description,
      category,
      price,
      stock,
      brand,
      images,
      rating,
    } = req.body;
    const newProduct = await Product.create({
      productname,
      description,
      category,
      price,
      stock,
      brand,
      images,
      rating,
    });
    res
      .status(201)
      .json({ message: "new product created successfully", data: newProduct });
  } catch (error) {
    return res.status(500).json({ message: "server error accured!" });
  }
};
module.exports = { addProduct };
