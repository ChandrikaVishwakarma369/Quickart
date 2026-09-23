require("dotenv").config()
const express = require('express');
const app = express()
const connectToDB  = require('./src/config/db.js');
const PORT = process.env.PORT

const startServer = async () => {
  await connectToDB();

  app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();