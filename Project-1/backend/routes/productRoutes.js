// productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Define route handlers for CRUD operations

module.exports = router;

router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  router.post('/products', async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const product = new Product({ name, description, price });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  router.put('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price }, { new: true });
      res.json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  router.delete('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  