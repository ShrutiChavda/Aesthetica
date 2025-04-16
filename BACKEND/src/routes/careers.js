const express = require('express');
const router = express.Router();
const Career = require('../models/Career');

router.get('/', async (req, res) => {
  const careers = await Career.find().sort({ created_at: -1 });
  res.json(careers);
});

router.post('/', async (req, res) => {
  const career = new Career(req.body);
  await career.save();
  res.json({ message: 'Career posted', career });
});

router.put('/:id', async (req, res) => {
  const updated = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Career updated', updated });
});

router.delete('/:id', async (req, res) => {
  await Career.findByIdAndDelete(req.params.id);
  res.json({ message: 'Career deleted' });
});

module.exports = router;
