const Notification = require('../models/Notification');
const { successResponse, errorResponse } = require('../utils/responseUtils');

const notificationController = {
  // Get notifications for current user with pagination
  async getUserNotifications(req, res, next) {
    try {
      // Get pagination parameters from query string with defaults
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      // In a real app, you would get these from the authenticated user session
      // For now, we'll assume they come from the request
      const userId = req.user?.id;
      const organizationId = req.user?.organization_id;

      if (!userId || !organizationId) {
        return res.status(401).json(errorResponse('Unauthorized - User not authenticated or missing organization', 401));
      }

      // Validate pagination parameters
      if (page < 1 || limit < 1) {
        return res.status(400).json(errorResponse('Invalid pagination parameters'));
      }

      const result = await Notification.getForUser(userId, organizationId, page, limit);
      res.json(successResponse(result.data, result.pagination));
    } catch (error) {
      next(error);
    }
  },

  // Mark notifications as read
  async markNotificationsAsRead(req, res, next) {
    try {
      const { notification_ids } = req.body;
      
      // Validate request body
      if (!notification_ids || !Array.isArray(notification_ids) || notification_ids.length === 0) {
        return res.status(400).json(errorResponse('Invalid request. notification_ids must be a non-empty array.'));
      }

      // In a real app, you would get these from the authenticated user session
      // For now, we'll assume they come from the request
      const userId = req.user?.id;
      const organizationId = req.user?.organization_id;

      if (!userId || !organizationId) {
        return res.status(401).json(errorResponse('Unauthorized - User not authenticated or missing organization', 401));
      }

      await Notification.markAsRead(notification_ids, userId, organizationId);
      
      res.status(200).json(successResponse({ 
        message: 'Notifications marked as read',
        updated: notification_ids 
      }));
    } catch (error) {
      next(error);
    }
  }
};

module.exports = notificationController;
