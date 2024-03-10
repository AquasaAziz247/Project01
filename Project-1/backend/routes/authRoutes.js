// authRoutes.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User registration route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if the user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    // Save the user to the database
    await newUser.save();
    // Respond with a success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// User login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
    // Respond with the JWT token
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error in user login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;


// authRoutes.js


// Password reset endpoint
router.post('/reset-password', async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate and send password reset email
    const transporter = nodemailer.createTransport({
      // Configure email transporter (e.g., SMTP, Gmail)
    });

    const mailOptions = {
      from: 'your-email@example.com',
      to: email,
      subject: 'Password Reset',
      text: 'Here is your password reset link...'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending password reset email:', error);
        return res.status(500).json({ message: 'Error sending password reset email' });
      }
      console.log('Password reset email sent:', info.response);
      res.json({ message: 'Password reset email sent' });
    });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


// authRoutes.js


// Email verification endpoint
router.post('/verify-email', async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate and send verification email
    const transporter = nodemailer.createTransport({
      // Configure email transporter (e.g., SMTP, Gmail)
    });

    const mailOptions = {
      from: 'your-email@example.com',
      to: email,
      subject: 'Email Verification',
      text: 'Here is your email verification link...'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending verification email:', error);
        return res.status(500).json({ message: 'Error sending verification email' });
      }
      console.log('Verification email sent:', info.response);
      res.json({ message: 'Verification email sent' });
    });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


