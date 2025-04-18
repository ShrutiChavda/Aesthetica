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
  const redirectTo = user.role === 'user' ? '/user/index' : '/user/index';

  res.json({
    message: 'Logged in successfully',
    user: req.session.user,
    redirectTo
  });
});

router.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid"); // Clear session cookie
    return res.status(200).json({ message: "Logged out" });
  });
});

const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

// router.get('/get-user', (req, res) => {
//     console.log("SESSION:", req.session);
//     if (req.session.user) {
//       res.json({ user: req.session.user });
//     } else {
//       res.status(401).json({ message: 'Unauthorized' });
//     }
//   });

router.get("/get-user", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });a
  }

  console.log("Session in get-user:", req.session); // ✅ Now inside
  try {
    const user = await User.findById(req.session.user.id).select("-password");
    console.log("Fetched user:", user); // ✅ Now inside

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ user });
  } catch (err) {
    console.error("Get User Error:", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.post('/update-user', async (req, res) => {
  try {
    if (!req.session.user || req.session.user.role !== 'user') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { firstName, lastName, email, bio } = req.body;
    const fullName = `${firstName} ${lastName}`.trim();

    const updatedUser = await User.findByIdAndUpdate(
      req.session.user.id,
      {
        username: fullName,
        email,
        bio
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router;
