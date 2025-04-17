const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();

router.post('/register1', async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const newAdmin = new Admin({ username, email, password, role });
    await newAdmin.save();
    res.json({ message: 'Admin registered' });
  } catch (err) {
    console.error("Admin registration error:", err);
    res.status(500).json({ message: 'Registration failed!' });
  }
});


router.post('/login1', async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin || admin.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  req.session.admin = { id: admin._id, role: admin.role };
  const redirectTo = admin.role === 'admin' ? '/admin/index' : '/admin/index';

  res.json({
    message: 'Logged in successfully',
    admin: req.session.admin,
    redirectTo
  });
});

router.post("/logout1", (req, res) => {
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
  if (!req.session.admin) {
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

router.get("/get-admin", async (req, res) => {
  if (!req.session.admin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  console.log("Session in get-admin:", req.session); // ✅ Now inside
  try {
    const admin = await Admin.findById(req.session.admin.id).select("-password");
    console.log("Fetched admin:", admin); // ✅ Now inside

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.json({ admin });
  } catch (err) {
    console.error("Get Admin Error:", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.post('/update-admin', async (req, res) => {
  try {
    if (!req.session.admin || req.session.admin.role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { firstName, lastName, email, bio } = req.body;
    const fullName = `${firstName} ${lastName}`.trim();

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.session.admin.id,
      {
        username: fullName,
        email,
        bio
      },
      { new: true, runValidators: true }
    );

    if (!updatedAdmin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.json({ message: 'Admin profile updated successfully', admin: updatedAdmin });
  } catch (error) {
    console.error('Error updating admin:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

  
module.exports = router;
