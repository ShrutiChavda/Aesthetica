const Career = require('../../../BACKEND/src/models/Career');

exports.getAll = () => Career.find().sort({ created_at: -1 });
exports.getById = (id) => Career.findById(id);
exports.create = (data) => new Career(data).save();
exports.update = (id, data) => Career.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Career.findByIdAndDelete(id);
