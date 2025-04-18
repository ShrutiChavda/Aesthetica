const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// File storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './uploads/resumes';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// GET all applicants
router.get('/', async (req, res) => {
  const applicants = await Applicant.find().sort({ applied_at: -1 });
  res.json(applicants);
});

// POST applicant with file upload
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { full_name, email, position, pic } = req.body;
    const resume = req.file ? `/uploads/resumes/${req.file.filename}` : '';

    const applicant = new Applicant({
      full_name,
      email,
      position,
      pic,
      resume
    });

    await applicant.save();
    res.json({ message: 'Application submitted', applicant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Other routes unchanged...
module.exports = router;
