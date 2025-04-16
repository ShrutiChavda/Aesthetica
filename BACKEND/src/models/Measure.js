const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
  room_id: String,
  room_name: String,
  category: String,
  designer_name: String,
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Measure', measureSchema);
