const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');

// GET all applicants
router.get('/', async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update an applicant
router.put('/:id', async (req, res) => {
  try {
    const updated = await Applicant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE an applicant
router.delete('/:id', async (req, res) => {
  try {
    await Applicant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Applicant deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
