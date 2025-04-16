const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  total_projects: { type: Number, default: 0 },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Style', styleSchema);
