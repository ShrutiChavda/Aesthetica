const Style = require('../../../BACKEND/src/models/Style');

exports.getAll = () => Style.find().sort({ created_at: -1 });
exports.getById = (id) => Style.findById(id);
exports.create = (data) => new Style(data).save();
exports.update = (id, data) => Style.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Style.findByIdAndDelete(id);
