const express = require('express');
const router = express.Router();

// Import route modules
const userRoutes = require('./userRoutes');

// Register routes
router.use('/users', userRoutes);

// Sample route
router.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

module.exports = router;
