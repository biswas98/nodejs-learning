const mongoose = require("mongoose");

const connectMongoDb = async (uri) => {
  await mongoose
    .connect(uri)
    .then(() => console.log("Successfully connected to MongoDB!"))
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    });
};

module.exports = {
  connectMongoDb,
};
