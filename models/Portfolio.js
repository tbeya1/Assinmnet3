const mongoose = require('mongoose');


// Define the Schema for Portfolio Data
const portfolioSchema = new mongoose.Schema({
  home: {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  contact: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: true },
  },
  skills: {
    title: { type: String, required: true },
    skillsList: [{ type: String, required: true }],
  },
  experience: {
    title: { type: String, required: true },
    items: [{
      jobTitle: { type: String, required: true },
      description: { type: String, required: true },
    }]
  },
  education: {
    title: { type: String, required: true },
    items: [{
      degree: { type: String, required: true },
      institution: { type: String, required: true },
      year: { type: Number, required: true },
    }]
  },
  projects: {
    title: { type: String, required: true },
    projectsList: [{
      name: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    }]
  }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
