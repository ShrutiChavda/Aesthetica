const express = require('express');
const router = express.Router();
const Career = require('../models/Career');
const { upload, upload1 } = require('../middleware/upload');

router.get('/', async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', upload.single('pic'), async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.pic = req.file.filename;
    }
    const career = new Career(data);
    await career.save();
    res.status(201).json(career);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', upload.single('pic'), async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (req.file) {
      data.pic = req.file.filename;
    }
    const updated = await Career.findByIdAndUpdate(id, data, { new: true });
    res.json({ message: 'Career updated', updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.json({ message: 'Career deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
