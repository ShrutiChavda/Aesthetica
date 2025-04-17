require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const session = require('express-session');  
const MongoStore = require('connect-mongo'); 
const authRoutes = require('./src/routes/userauth');
const authRoutess = require('./src/routes/adminauth');
const blogRoutes = require('./src/routes/blogs');
const styleRoutes = require('./src/routes/styles');
const budgetRoutes = require('./src/routes/budgets');
const measureRoutes = require('./src/routes/measures'); 
const careerRoutes = require('./src/routes/careers');
const applicantRoutes = require('./src/routes/applicants');

const path = require('path');
const app = express();

const PORT = 5000;
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/aesthetica";

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
          mongoUrl: mongoURI,
          collectionName: "sessions"
        }),
  cookie: { maxAge: 86400000 }
}));

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Error connecting to MongoDB: ", err));

app.use('/auth', authRoutes);

app.use('/auth1', authRoutess);

app.use('/blogs', blogRoutes);
app.use('/styles', styleRoutes);
app.use('/budgets', budgetRoutes);
app.use('/measures', measureRoutes);
app.use('/careers', careerRoutes);
app.use('/applicants', applicantRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads/resumes', express.static(path.join(__dirname, 'uploads/resumes')));

app.get('/', (req, res) => {
    res.send('<h1>Server is running!</h1><p>MongoDB Connected</p>');
  });
  
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

