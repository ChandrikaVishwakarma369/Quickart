const Order = require("../models/order.model.js");
const addOrder = async (req, res) => {
  try {
    const {
      user,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
    } = req.body;

    const addOrder = await Order.create({ user,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      })
      res.status(201).json({success : true, message : "created successfully", data : addOrder})

  } catch (error) {
    res.status(500).json({ success: false, message: "server error occured!" });
  }
};
module.exports={addOrder}