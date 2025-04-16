const Budget = require('../../../BACKEND/src/models/Budget');

exports.getAll = () => Budget.find().sort({ created_at: -1 });
exports.getById = (id) => Budget.findById(id);
exports.create = (data) => new Budget(data).save();
exports.update = (id, data) => Budget.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Budget.findByIdAndDelete(id);
