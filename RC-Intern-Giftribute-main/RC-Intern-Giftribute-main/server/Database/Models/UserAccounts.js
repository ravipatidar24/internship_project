const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: 'Giftribute',
    required: true
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    default: "",
    required: true
  },
  userPhoneNumber: {
    type: String,
    default: "",
    unique: true,
    required: true

  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
