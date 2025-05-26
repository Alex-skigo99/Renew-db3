const express = require('express');
const router = express.Router();

// Import route modules
const userRoutes = require('./userRoutes');
const notificationRoutes = require('./notificationRoutes');

// Register routes
router.use('/users', userRoutes);
router.use('/notifications', notificationRoutes);

// Sample route
router.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

module.exports = router;
