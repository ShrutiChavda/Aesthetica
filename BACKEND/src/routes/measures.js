const express = require('express');
const router = express.Router();
const Measure = require('../models/Measure');

router.get('/', async (req, res) => {
  const measures = await Measure.find().sort({ created_at: -1 });
  res.json(measures);
});

router.post('/', async (req, res) => {
  const measure = new Measure(req.body);
  await measure.save();
  res.json({ message: 'Measurement added', measure });
});

router.put('/:id', async (req, res) => {
  const updated = await Measure.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Measurement updated', updated });
});

router.delete('/:id', async (req, res) => {
  await Measure.findByIdAndDelete(req.params.id);
  res.json({ message: 'Measurement deleted' });
});

module.exports = router;
