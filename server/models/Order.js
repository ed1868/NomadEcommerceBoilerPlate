const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  customer: {
    customerId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String
    }
  },
  items: {
    type: [orderItemSchema],
    required: true,
    default: []
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Shipped', 'Delivered']
  },
  payment: {
    method: {
      type: String,
      required: true
    },
    transactionId: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  shipping: {
    address: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zip: {
        type: String,
        required: true
      }
    },
    method: {
      type: String,
      required: true
    },
    estimatedDelivery: {
      type: Date
    }
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

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
