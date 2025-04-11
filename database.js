const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testdatabase")

// User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
});

// Model Create
const User = mongoose.model("User", userSchema);

module.exports = User;
