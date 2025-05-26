const db = require('./src/db');
const DatabaseTableConstants = require('./src/db/DatabaseTableConstants');
const { v4: uuidv4 } = require('uuid');

async function testNotifications() {
  try {
    // Get a user and organization ID from the database
    const user = await db(DatabaseTableConstants.USER_TABLE).first();
    
    if (!user) {
      console.error('No user found in the database. Please run the seed script first.');
      process.exit(1);
    }

    // Display the user info for testing the API
    console.log('User ID for testing:', user.id);
    console.log('Organization ID for testing:', user.organization_id);
    
    // Get notifications for this user
    const notifications = await db(DatabaseTableConstants.NOTIFICATION_TABLE)
      .where({ 
        user_id: user.id,
        organization_id: user.organization_id
      })
      .select('*');
    
    console.log(`User has ${notifications.length} notifications in the database`);
    console.log('Notification details:', JSON.stringify(notifications, null, 2));
    
    // Add a test notification if needed
    if (parseInt(notificationCount.count) === 0) {
      const notificationId = uuidv4();
      await db(DatabaseTableConstants.NOTIFICATION_TABLE).insert({
        id: notificationId,
        user_id: user.id,
        organization_id: user.organization_id,
        notification_text: 'Test notification created by script',
        read: false,
        data: JSON.stringify({ test: true }),
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('Test notification created with ID:', notificationId);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

testNotifications();
