// models/User.js

const mongoose=require ('mongoose')

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
  