// src/routes/userRoutes.js
const express = require('express');
const {
  registerUser,
  loginUser,
  getUserProfile
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get logged in user profile
router.get('/profile', protect, getUserProfile);

module.exports = router;
