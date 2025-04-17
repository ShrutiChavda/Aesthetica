const multer = require('multer');
const path = require('path');

// Full path to the frontend images directory (using an absolute path)
const imgPath1 = 'C:/Users/i/Downloads/Aesthetica/FRONTEND/src/assets/images'; // Use full path directly
const imagePath = path.join(__dirname, '../uploads'); // For backend uploads

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagePath);  // Backend upload location
  },
  filename: (req, file, cb) => {
    // Use original file name
    cb(null, file.originalname);
  }
});

const storage1 = multer.diskStorage({
  destination: (req, file, cb1) => {
    cb1(null, imgPath1);  // Frontend upload location (static path)
  },
  filename: (req, file, cb1) => {
    // Use original file name
    cb1(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (!allowedTypes.includes(ext)) {
    return cb(new Error('Only JPG and PNG files are allowed'));
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });
const upload1 = multer({ storage1, fileFilter });

// Exporting both upload middlewares
module.exports = { upload, upload1 };
