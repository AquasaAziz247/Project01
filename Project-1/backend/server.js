const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = 'mongodb://localhost:27017/mywebsite';

const Product = require('./models/product');
const User = require('./models/User');
const Order = require('./models/order');
// const Category = require('./models/category');
// const Cart = require('./models/cart');
// const Review = require('./models/review');
// const ShippingMethod = require('./shippingMethod');
// const PaymentMethod = require('./paymentMethod');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mywebsite', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});