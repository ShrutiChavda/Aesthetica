const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;
  const newUser = new User({ username, email, password, role });
  await newUser.save();
  res.json({ message: 'User registered' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  req.session.user = { id: user._id, role: user.role };
  const redirectTo = user.role === 'admin' ? '/admin/index' : '/user/index';

  res.json({
    message: 'Logged in successfully',
    user: req.session.user,
    redirectTo
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out' });
});

router.get('/get-user', (req, res) => {
    console.log("SESSION:", req.session);
    if (req.session.user) {
      res.json({ user: req.session.user });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });
  
module.exports = router;
