const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String, 
  },
  walletAddress: {
    type: String
  }
})

const albumSchema = new mongoose.Schema({
  name:{
    type: String, 
    required: true
  },

  createdAt: {
    type: Date,
    default:  Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
})

const placeSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  
  description: {
    type: String, 
  },

  referPlaces: {
    type: [String]
  },
  thumbnail: {
    type: String,
  },
  address: {
    type: String
  }
})

let User = mongoose.model("User", userSchema);
let Author = mongoose.model("Album", albumSchema);
let Place = mongoose.model('Place', placeSchema);

module.exports = {User, Author, Place};