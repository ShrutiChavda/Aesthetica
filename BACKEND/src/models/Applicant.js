const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  position: String,
  status: { type: String, enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected'], default: 'Pending' },
  pic: { type: String },
  resume: String,
  applied_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Applicant', applicantSchema);
