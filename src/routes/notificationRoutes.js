const express = require('express');
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Apply authentication middleware to all notification routes
router.use(authMiddleware);

/**
 * @route   GET /api/notifications
 * @desc    Get notifications for current user with pagination
 * @access  Private
 */
router.get('/', notificationController.getUserNotifications);

/**
 * @route   PATCH /api/notifications
 * @desc    Mark specified notifications as read
 * @access  Private
 */
router.patch('/', notificationController.markNotificationsAsRead);

module.exports = router;
