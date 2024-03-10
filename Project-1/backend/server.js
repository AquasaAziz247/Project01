const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = 'mongodb://localhost:27017';

const Product = require('./models/product');
const User = require('./models/user');
const Order = require('./models/order');
// const Category = require('./models/category');
// const Cart = require('./models/cart');
// const Review = require('./models/review');
// const ShippingMethod = require('./shippingMethod');
// const PaymentMethod = require('./paymentMethod');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!9999')
  })
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

