require("dotenv").config();
const express = require("express");
const { connectMongoDb } = require("./connection");

// Routers
const userRouter = require("./routes/user.route");
const homeRouter = require("./routes/home.route");

const app = express();
const PORT = process.env.PORT || 8000;
const uri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nodejs_learning_db";

// Connection
connectMongoDb(uri);

// Middleware
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", homeRouter);
app.use("/api/users/", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
