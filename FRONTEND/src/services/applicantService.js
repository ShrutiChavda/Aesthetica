const Applicant = require('../../../BACKEND/src/models/Applicant');

exports.getAll = () => Applicant.find().sort({ applied_at: -1 });
exports.getById = (id) => Applicant.findById(id);
exports.create = (data) => new Applicant(data).save();
exports.update = (id, data) => Applicant.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Applicant.findByIdAndDelete(id);
