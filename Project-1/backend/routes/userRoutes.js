// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Route to handle user registration
router.post('/register', UserController.registerUser);

module.exports = router;
