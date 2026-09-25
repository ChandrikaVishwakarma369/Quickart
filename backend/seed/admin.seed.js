require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../src/models/user.model.js");
const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    await User.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      mobile: process.env.ADMIN_MOBILE,
      password: hashedPassword,
      role: "admin",
    });
    console.log("Admin created successfully");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

createAdmin();
