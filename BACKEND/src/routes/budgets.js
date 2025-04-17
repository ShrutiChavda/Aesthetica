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

module.exports = router;
