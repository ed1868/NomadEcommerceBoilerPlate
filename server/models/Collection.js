const mongoose = require('mongoose');

const orderInCollectionSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The collection name is required'],
    minlength: 1
  },
  orders: {
    type: [orderInCollectionSchema],
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

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
