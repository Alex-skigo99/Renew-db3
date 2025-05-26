/**
 * Helper functions for standardizing API responses
 */

/**
 * Generate a success response with data and optional pagination
 * @param {Object} data - The response data
 * @param {Object} pagination - Optional pagination info
 * @returns {Object} Formatted response object
 */
const successResponse = (data, pagination = null) => {
  const response = { data };
  
  if (pagination) {
    response.pagination = pagination;
  }
  
  return response;
};

/**
 * Generate an error response
 * @param {String} message - Error message
 * @param {Number} status - HTTP status code
 * @param {Object} details - Additional error details
 * @returns {Object} Formatted error object
 */
const errorResponse = (message, status = 400, details = null) => {
  const error = {
    message,
    status
  };
  
  if (details) {
    error.details = details;
  }
  
  return { error };
};

module.exports = {
  successResponse,
  errorResponse
};
