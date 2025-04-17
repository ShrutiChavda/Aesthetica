const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
  room_id: String,
  room_name: String,
  category: { type: String, enum: ['Luxury Villa', 'Modern Apartment', 'Urban Loft', 'Studio', 'Penthouse', 'Beach House'], required: true },
  designer_name: String,
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Measure', measureSchema);
