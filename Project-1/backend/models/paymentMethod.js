// paymentMethod.js

const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  acceptedCurrencies: { type: [String] }, // Array of accepted currencies
  paymentProcessingFees: { type: Number }, // You can adjust the type as needed
  // Add other attributes as needed
});

const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema);

module.exports = PaymentMethod;
