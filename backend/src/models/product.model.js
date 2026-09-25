const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
  },
  { timestamps: true },
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
