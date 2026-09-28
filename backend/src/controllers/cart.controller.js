const Cart = require("../models/cart.model.js");
//add to cart
const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;
    const addCart = await Cart.create({
      user,
      items: [
        {
          product,
          quantity,
        },
      ],
    });
    res
      .status(201)
      .json({ success: true, message: "added to cart", data: addCart });
  } catch (error) {
    res.status(500).json({ message: "server error occured!" });
  }
};
//get the cart
const getCart = async (req, res) => {
  try {
    const { user } = req.params;

    const cart = await Cart.find({ user });

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error occurred!",
    });
  }
};
module.exports = { addToCart, getCart };
