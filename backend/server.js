require("dotenv").config()
const app = require('./src/app.js')
const connectToDB  = require('./src/config/db.js');
const PORT = process.env.PORT

const startServer = async () => {
  await connectToDB();

  app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();