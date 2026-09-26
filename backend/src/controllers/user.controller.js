const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
//create user
const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const isEmailExist = await User.findOne({ email });
    const isNumberExist = await User.findOne({ mobile });
    if (isEmailExist) {
      return res
        .status(403)
        .json({ message: "This email already exists, try with another!" });
    }
    if (isNumberExist) {
      return res
        .status(403)
        .json({ message: "This Number already exists, try with another!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
    });
    res.status(201).json({ message: "new user created", data: newUser });
  } catch (error) {
    console.log(error);
  }
};
//login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isEmailExist = await User.findOne({ email });
    if (!isEmailExist) {
      return res
        .status(404)
        .json({ message: "Email or Password is incorrect!" });
    }
    const isCorrectPass = await bcrypt.compare(password, isEmailExist.password);
    if (!isCorrectPass) {
      return res
        .status(404)
        .json({ message: "Email or Password is incorrect!" });
    }
    const token = jwt.sign({id : isEmailExist._id, role : isEmailExist.role}, process.env.JWT_SECRET, {expiresIn: "7d"})
    res.status(200).json({ message: "You are logged in.", data: isEmailExist, token : token });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { registerUser, loginUser };
