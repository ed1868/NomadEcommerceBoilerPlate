const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: [true, 'The item name is required'],
    minlength: 1
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  colors: {
    type: [String],
    default: []
  },
  categories: {
    type: [String],
    default: []
  },
  stock: {
    type: Number,
    default: 0
  },
  images: {
    type: [String],
    default: []
  },
  timestamps: {
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
