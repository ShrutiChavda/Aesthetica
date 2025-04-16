const Measure = require('../../../BACKEND/src/models/Measure');

exports.getAll = () => Measure.find().sort({ created_at: -1 });
exports.getById = (id) => Measure.findById(id);
exports.create = (data) => new Measure(data).save();
exports.update = (id, data) => Measure.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Measure.findByIdAndDelete(id);
