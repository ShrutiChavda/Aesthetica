const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["Draft", "Published"], required: true },
  time: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Blog", blogSchema);
