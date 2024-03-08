// product.controller.js
const Product = require('../models/product.model');

// Function to create a new product
const createProduct = async (productData) => {
  try {
    const newProduct = new Product(productData);
    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (error) {
    throw error;
  }
};

module.exports = { createProduct };


// product.controller.js

// Function to get a product by ID
const getProductById = async (productId) => {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { createProduct, getProductById };

  
  // product.controller.js

// Function to update a product by ID
const updateProductById = async (productId, updatedData) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
      return updatedProduct;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { createProduct, getProductById, updateProductById };


  // product.controller.js

// Function to delete a product by ID
const deleteProductById = async (productId) => {
    try {
      await Product.findByIdAndDelete(productId);
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { createProduct, getProductById, updateProductById, deleteProductById };
  
