const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// Get all budgets
router.get('/', async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new budget
router.post('/', async (req, res) => {
  try {
    const newBudget = new Budget(req.body);
    await newBudget.save();
    res.json({ message: 'Budget created successfully', newBudget });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an existing budget
router.put('/:id', async (req, res) => {
  try {
    const updatedBudget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Budget updated successfully', updatedBudget });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a budget
router.delete('/:id', async (req, res) => {
  try {
    await Budget.findByIdAndDelete(req.params.id);
    res.json({ message: 'Budget deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET user budget
router.get('/:username', async (req, res) => {
  const budget = await Budget.findOne({ username: req.params.username });
  res.json(budget || {});
});

// PUT user budget
router.put('/:username', async (req, res) => {
  const { totalBudget, categories } = req.body;
  const updated = await Budget.findOneAndUpdate(
    { username: req.params.username },
    { totalBudget, categories },
    { upsert: true, new: true }
  );
  res.json(updated);
});


router.get('/session', (req, res) => {
  if (req.session && req.session.user) {
    res.json({ username: req.session.user.user_name });
  } else {
    res.status(401).json({ error: 'Not logged in' });
  }
});

module.exports = router;
