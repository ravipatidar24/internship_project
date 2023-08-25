const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gift',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
