// user.controller.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.registerUser = async (req, res) => {
    try {
      // Extract user registration data from request body
      const { username, email, password } = req.body;
  
      // Check if user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
  
      // Hash the password securely using bcryptjs
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance with the hashed password
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      });
  
      // Save the user data to the database
      await newUser.save();
  
      // Generate JWT token
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Respond with success message and token
      res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

// Function to create a new user
const createUser = async (userData) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    // Create a new user instance
    const newUser = new User({
      username: userData.username,
      email: userData.email,
      password: hashedPassword
    });
    // Save the user data to the database
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser };

// user.controller.js

// Function to get a user by ID
const getUserById = async (userId) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { createUser, getUserById };

  
  // user.controller.js

// Function to update a user by ID
const updateUserById = async (userId, updatedData) => {
    try {
      // Update the user data in the database
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { createUser, getUserById, updateUserById };

  
  // user.controller.js

// Function to delete a user by ID
const deleteUserById = async (userId) => {
    try {
      await User.findByIdAndDelete(userId);
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { createUser, getUserById, updateUserById, deleteUserById };
  