require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const session = require('express-session');  
const MongoStore = require('connect-mongo'); 
const authRoutes = require('./src/routes/auth');

const app = express();

const PORT = 5000;
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/aesthetica";

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Ensure a session secret is properly set
const sessionSecret = process.env.SESSION_SECRET || "default_secret";


// app.use(session({
//     secret: process.env.SESSION_SECRET || "default_secret",
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//       mongoUrl: mongoURI,
//       collectionName: "sessions"
//     }),
//     cookie: {
//       secure: false,
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000
//     }
//   }));
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoURI }),
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: 'lax',
      secure: false
    }
  }));
  


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ Error connecting to MongoDB: ", err));

app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('<h1>Server is running!</h1><p>MongoDB Connected</p>');
  });
  
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

