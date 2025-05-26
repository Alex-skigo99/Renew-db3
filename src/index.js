require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Determine the status code to send
  const statusCode = err.statusCode || 500;
  
  // In production, don't send the full error details
  const errorResponse = {
    error: {
      message: process.env.NODE_ENV === 'production' 
        ? 'An error occurred while processing your request' 
        : err.message,
      status: statusCode
    }
  };
  
  // Include stack trace in development mode
  if (process.env.NODE_ENV !== 'production') {
    errorResponse.error.stack = err.stack;
  }
  
  res.status(statusCode).json(errorResponse);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
