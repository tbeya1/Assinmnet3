const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Base route for testing
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Portfolio API' });
});

// Fetch all portfolio data from MongoDB
router.get('/portfolio-data', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne(); // Assuming there's only one document in the collection
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio data not found' });
    }
    res.json(portfolio); // Return portfolio data in JSON format
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch portfolio data' });
  }
});

module.exports = router;
