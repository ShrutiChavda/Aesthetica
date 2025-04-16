// backend/routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST new blog
router.post('/', async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(400).json({ error: err.message });
  }
});

// PUT update blog
router.put('/:id', async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update" });
  }
});

// DELETE blog
router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete" });
  }
});

module.exports = router;
