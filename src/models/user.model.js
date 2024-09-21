const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    profession: {
      type: String,
    },
  },
  { timestamps: true }
);
//Model
const User = mongoose.model("users", userSchema);
module.exports = User;
