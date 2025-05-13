
require('dotenv').config();  
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors'); // For handling CORS
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api'); // Import your API routes


// Middleware setup
app.use('/api', apiRoutes);
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Allow JSON in request bodies

mongoose.set('strictQuery', true);

// Connect to MongoDB using environment variable for the URI
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';  // Fallback URI for local development
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Serve static files from the "public" folder 
app.use(express.static(path.join(__dirname, 'public')));

// Serve the portfolio homepage at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler middleware
app.use((err, req, res, next) => {
  // Serve a static error page for all errors
  res.status(err.status || 500).sendFile(path.join(__dirname, 'public', 'error.html'));
});



