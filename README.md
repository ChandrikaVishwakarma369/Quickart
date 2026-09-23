# BACKEND SETUP :
# Quickart Backend

This is the backend API for the Quickart e-commerce application. It is built with Node.js, Express, and MongoDB using Mongoose, and includes authentication, product management, cart, orders, reviews, and user-related APIs.

## Tech Stack   

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Multer for uploads
- dotenv for environment configuration
- CORS support

## Features

- User registration and login
- JWT-based authentication and role-based access
- Product catalog management
- Category management
- Cart and order processing
- Address management
- Review and rating support
- File upload support for product/media assets

## Project Structure

```bash
backend/
├── server.js
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   ├── constants/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   └── tests/
├── uploads/
└── .env
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running locally or a MongoDB connection string ready
- A `.env` file configured

## Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/quickart
JWT_SECRET=your_super_secret_key
```

Notes:
- Replace the MongoDB URI with your actual database connection string if needed.
- Keep `JWT_SECRET` secure and unique in production.

## Installation

From the `backend` directory, run:

```bash
npm install
```

## Running the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server will start on the port defined in `.env` (default is `5000` if not set).

## API Modules

The backend includes modules for:

- `auth`
- `user`
- `product`
- `category`
- `cart`
- `order`
- `address`
- `review`

## Database Connection

The application connects to MongoDB using Mongoose in `src/config/db.js`.

```js
await mongoose.connect(process.env.MONGO_URI)
```

If the database connection fails, the server will exit with an error.

## Useful Commands

```bash
npm run dev   # start with nodemon
npm start     # start the app normally
```

## Notes

- Uploaded files are stored under the `uploads/` directory.
- Server startup is handled in `server.js`.
- The project is structured in a modular format for easier extension and maintenance.

## License

This project is licensed under the ISC License.
