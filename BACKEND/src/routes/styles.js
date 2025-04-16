const express = require('express');
const router = express.Router();
const Style = require('../models/Style');

router.get('/', async (req, res) => {
  const styles = await Style.find().sort({ created_at: -1 });
  res.json(styles);
});

router.post('/', async (req, res) => {
  const style = new Style(req.body);
  await style.save();
  res.json({ message: 'Style created', style });
});

router.put('/:id', async (req, res) => {
  const updated = await Style.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Style updated', updated });
});

router.delete('/:id', async (req, res) => {
  await Style.findByIdAndDelete(req.params.id);
  res.json({ message: 'Style deleted' });
});

module.exports = router;
