const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  project_name: String,
  category: { 
    type: String, 
    enum: ['Luxury Villa', 'Modern Apartment', 'Urban Loft', 'Studio', 'Penthouse', 'Beach House'], 
    required: true 
  },
  amount: Number,
  spent: Number,
  remaining: Number,
  total_budget: Number,
  created_at: { type: Date, default: Date.now },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
