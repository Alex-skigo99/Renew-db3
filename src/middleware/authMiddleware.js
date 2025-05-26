/**
 * Authentication middleware
 * 
 * In a real application, this would verify JWT tokens or session cookies
 * For this example, we're using a simpler approach to simulate authentication
 */
const authMiddleware = (req, res, next) => {
  // In a real app, this would come from JWT token or session
  // For demo purposes, we'll use query parameters or headers
  
  // Try to get user info from Authorization header or query params
  const userId = req.headers['user-id'] || req.query.userId;
  const organizationId = req.headers['organization-id'] || req.query.organizationId;
  
  // Check if we have the necessary authentication info
  if (!userId || !organizationId) {
    return res.status(401).json({ 
      error: 'Unauthorized', 
      message: 'Authentication required. Please provide userId and organizationId.' 
    });
  }
  
  // Attach user info to request object
  req.user = {
    id: userId,
    organization_id: organizationId
  };
  
  next();
};

module.exports = authMiddleware;
