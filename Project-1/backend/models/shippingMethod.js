// shippingMethod.js

const mongoose = require('mongoose');

const shippingMethodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  estimatedDeliveryTime: { type: String }, // You can adjust the type as needed
  shippingCost: { type: Number, required: true },
  // Add other attributes as needed
});

const ShippingMethod = mongoose.model('ShippingMethod', shippingMethodSchema);

module.exports = ShippingMethod;
