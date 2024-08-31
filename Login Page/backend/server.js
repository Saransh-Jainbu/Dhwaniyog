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

// Define schemas and models
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
  sessions: { type: Number, default: 0 }, // Corrected this line
  status: String,
  image: [String],  // Store multiple images as an array of strings (paths)
  additionalImage: String,  // Store additional image as a string (path)
});

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  supervisior: String,
  problem: String,
  sessions: Number,
  status: String,
  assignedTo: String,
  image: [String],
});

const TherapistSchema = new mongoose.Schema({
  Name: String,
  email: String,
  supervisor: String,
  totalSessions: Number,
});

const CategorySchema = new mongoose.Schema({
  Name: String,
});

const Patient = mongoose.model('patients', PatientSchema);
const Student = mongoose.model("students", StudentSchema);
const Therapist = mongoose.model("therapists", TherapistSchema);
const Category = mongoose.model('category', CategorySchema);

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
    additionalImage: additionalImagePath,
  });

  try {
    await patient.save();
    res.status(201).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get patient by ID
app.get('/patients/:id', async (req, res) => {
  console.log('Fetching patient with ID:', req.params.id);
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    console.error('Error fetching patient details:', error);
    res.status(500).json({ message: 'Error fetching patient details', error: error.message });
  }
});

app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student details', error: error.message });
  }
});

// Get all patients
app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients' });
  }
});

// Get all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
});

// Get all therapists
app.get('/therapists', async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.json(therapists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching therapists' });
  }
});

// Get all categories
app.get('/category', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category' });
  }
});

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
