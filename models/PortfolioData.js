const mongoose = require('mongoose');

// Define your schema for the portfolio data
const portfolioSchema = new mongoose.Schema({
  section: String,      // The section of your portfolio (e.g., 'Home', 'Contact', 'Skills')
  title: String,        // The title of the section
  content: String,      // The content or description in that section
  image: String,        // Optional image URL for each section
});

// Create the model using the schema
const PortfolioData = mongoose.model('PortfolioData', portfolioSchema);

module.exports = PortfolioData;
