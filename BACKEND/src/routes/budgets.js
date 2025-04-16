const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

router.get('/', async (req, res) => {
  const budgets = await Budget.find().sort({ created_at: -1 });
  res.json(budgets);
});

router.post('/', async (req, res) => {
  const budget = new Budget(req.body);
  await budget.save();
  res.json({ message: 'Budget created', budget });
});

router.put('/:id', async (req, res) => {
  const updated = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Budget updated', updated });
});

router.delete('/:id', async (req, res) => {
  await Budget.findByIdAndDelete(req.params.id);
  res.json({ message: 'Budget deleted' });
});

module.exports = router;
