const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  project_name: String,
  caregory: String,
  amount: Number,
  spent: Number,
  remaining: Number,
  total_budget: Number,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Budget', budgetSchema);
