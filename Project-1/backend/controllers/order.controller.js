// order.controller.js
const Order = require('../models/order.model');

// Function to create a new order
const createOrder = async (orderData) => {
  try {
    const newOrder = new Order(orderData);
    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    throw error;
  }
};

module.exports = { createOrder };

// order.controller.js

// Function to get an order by ID
const getOrderById = async (orderId) => {
    try {
      const order = await Order.findById(orderId);
      return order;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { createOrder, getOrderById };

  
 // order.controller.js

// Function to delete an order by ID
const deleteOrderById = async (orderId) => {
    try {
      await Order.findByIdAndDelete(orderId);
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { createOrder, getOrderById, deleteOrderById };
   