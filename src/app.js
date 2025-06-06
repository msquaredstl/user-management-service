// src/app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json()); // Parse JSON request bodies

// Root route
app.get('/', (req, res) => {
  res.send('User Management Service is running!');
});

// Mount user routes
app.use('/api/users', userRoutes);

// Global error handler middleware
app.use(errorHandler);

module.exports = app;
