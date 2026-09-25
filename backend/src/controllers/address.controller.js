const Address = require("../models/address.model.js");
const User = require("../models/user.model.js");
//add address
const addAddress = async (req, res) => {
  try {
    const { fullname, email, mobile, location, city, state } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Please enter the registered email." });
    }
    if (user.mobile !== mobile) {
      return res
        .status(400)
        .json({ message: "you entered different contact , please enter same" });
    }
    const newAddress = await Address.create({
      user : user._id,
      fullname,
      email,
      mobile,
      location,
      city,
      state,
    });
    return res
      .status(201)
      .json({ message: "new address added", data: newAddress });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { addAddress };
