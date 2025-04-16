const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  position: String,
  department: String,
  location: String,
  posted_date: Date,
  total_applications: { type: Number, default: 0 },
  experience: String,
  type: { type: String, enum: ['Full-time', 'Part-time', 'Internship'] },
  status: { type: String, enum: ['Open', 'Closed'], default: 'Open' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Career', careerSchema);
