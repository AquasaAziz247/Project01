// userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Example route for fetching user profile
router.get('/profile', async (req, res) => {
  try {
    // Get user profile based on authentication (assuming user ID is stored in req.user)
    const userProfile = await User.findById(req.user.userId);
    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }
    res.status(200).json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Add more routes for user-related functionalities like profile update, password reset, etc.

module.exports = router;
