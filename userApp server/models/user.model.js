const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
  mobile: { type: String, unique: true },
  email: { type: String, minlength: 5, maxlength: 50, unique: true },
  password: { type: String },
  status: Number,
  gender: String,
  address: {
    street: String,
    city: String,
    country: String,
    pincode: Number,
  }
});

module.exports = mongoose.model("User", userSchema);



