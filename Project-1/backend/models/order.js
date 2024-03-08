const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  // Add other attributes like shippingAddress, paymentMethod, etc. as needed
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
