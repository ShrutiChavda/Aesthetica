const Blog = require('../../../BACKEND/src/models/Blog');

exports.getAll = () => Blog.find().sort({ created_at: -1 });
exports.getById = (id) => Blog.findById(id);
exports.create = (data) => new Blog(data).save();
exports.update = (id, data) => Blog.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Blog.findByIdAndDelete(id);
