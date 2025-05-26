const db = require('../db');

class Notification {
  static async getForUser(userId, organizationId, page = 1, limit = 10) {
    // Calculate offset for pagination
    const offset = (page - 1) * limit;
    
    // Query to get paginated notifications
    const notifications = await db('notification')
      .where({ user_id: userId, organization_id: organizationId })
      .orderBy('created_at', 'desc')
      .limit(limit)
      .offset(offset);

    // Query to get total count for pagination
    const totalCountResult = await db('notification')
      .where({ user_id: userId, organization_id: organizationId })
      .count('id as count')
      .first();
      
    const total = parseInt(totalCountResult.count);
    const lastPage = Math.ceil(totalItems / limit);

    return {
      data: notifications,
      pagination: {
        currentPage: page,
        perPage: limit,
        lastPage,
        total
      }
    };
  }

  static async markAsRead(notificationIds, userId, organizationId) {
    // Update notifications to mark them as read
    // Only update notifications that belong to the current user and organization
    const result = await db('notification')
      .whereIn('id', notificationIds)
      .andWhere({
        user_id: userId,
        organization_id: organizationId
      })
      .update({
        read: true,
        updated_at: new Date()
      });

    return result;
  }

  static async create(notificationData) {
    const [newNotification] = await db('notification')
      .insert({
        ...notificationData,
        created_at: new Date(),
        updated_at: new Date()
      })
      .returning('*');
    
    return newNotification;
  }
}

module.exports = Notification;
