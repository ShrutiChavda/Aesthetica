const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');

router.get('/', async (req, res) => {
  const applicants = await Applicant.find().sort({ applied_at: -1 });
  res.json(applicants);
});

router.post('/', async (req, res) => {
  const applicant = new Applicant(req.body);
  await applicant.save();
  res.json({ message: 'Application submitted', applicant });
});

router.put('/:id', async (req, res) => {
  const updated = await Applicant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Applicant status updated', updated });
});

router.delete('/:id', async (req, res) => {
  await Applicant.findByIdAndDelete(req.params.id);
  res.json({ message: 'Applicant deleted' });
});

module.exports = router;
