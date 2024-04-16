const express = require('express');
const mongoose = require('mongoose');
const logger = require('./utils/logger'); // Import the logger

// Import routes
const taxiStationsRoutes = require('./routes/taxiStationsRoutes');
const destinationsRoutes = require('./routes/destinationsRoutes');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/q_marshall')
  .then(() => logger.info('Connected to MongoDB')) // Log success message
  .catch(err => {
    logger.error('Error connecting to MongoDB:', err); // Log error message
    process.exit(1); // Exit process on error
  });

// Middleware
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`); // Log request method and URL
  next();
});

// Routes
app.use('/api/taxi-stations', taxiStationsRoutes);
app.use('/api/destinations', destinationsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack); // Log error stack trace
  res.status(500).json({ error: 'Something went wrong!' }); // Send error response as JSON
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`); // Log server start message
});
