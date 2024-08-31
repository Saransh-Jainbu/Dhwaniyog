const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load environment variables from .env file
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection error', err);
  });


// Define schema and model
const PatientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  age: Number,
  email: String,
  address: String,
  contactNumber: String,
  appointTo: String,  
  appointBy: String,  
  category: String,
  problem: String,
  sessions: Number,
  image: [String],  // Store multiple images as an array of strings (paths)
  additionalImage: String,  // Store additional image as a string (path)
});

const Patient = mongoose.model('patients', PatientSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // Append timestamp to make filenames unique
  }
});

const upload = multer({ storage: storage });

// Handle POST request for adding patients
app.post('/addpatient', upload.fields([{ name: 'image' }, { name: 'additionalImage' }]), async (req, res) => {
  const { body, files } = req;

  // Handle images
  let imagePaths = [];
  if (files.image) {
    imagePaths = files.image.map(file => `/uploads/${file.filename}`);
  }

  let additionalImagePath = '';
  if (files.additionalImage) {
    additionalImagePath = `/uploads/${files.additionalImage[0].filename}`;
  }

  // Create new patient with form data and image paths
  const patient = new Patient({
    ...body,
    image: imagePaths,
    additionalImage: additionalImagePath
  });

  try {
    await patient.save();
    res.status(201).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
