const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors({
  origin: '*', 
  methods: 'GET,POST,PUT,DELETE', 
  credentials: true, 
}));
app.use(bodyParser.json());

require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection error', err);
  });

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
  sessions: { type: Number, default: 0 }, 
  status: String,
  image: [String],  
  additionalImage: String,  
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

const ActivitySchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'students', required: true },
  activity1: { type: String, required: true },
  activity2: { type: String, required: true },
  attachments: [String], // Array of strings to store file paths
  createdAt: { type: Date, default: Date.now }
});

const GoalSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'students', required: true },
  progress: { type: String, required: true },
  expectation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Activity = mongoose.model('Activity', ActivitySchema);
const Goal = mongoose.model('Goal', GoalSchema); // Added Goal model
const Patient = mongoose.model('patients', PatientSchema);
const Student = mongoose.model("students", StudentSchema);
const Therapist = mongoose.model("therapists", TherapistSchema);
const Category = mongoose.model('category', CategorySchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // Append timestamp to make filenames unique
  }
});

const upload = multer({ storage: storage });

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

app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients' });
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
});

app.get('/therapists', async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.json(therapists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching therapists' });
  }
});

app.get('/category', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category' });
  }
});

const activityStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/activities/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadActivity = multer({ storage: activityStorage });

app.post('/activities', uploadActivity.array('attachments'), async (req, res) => {
  const { studentId, activity1, activity2 } = req.body;
  const attachments = req.files.map(file => `/uploads/activities/${file.filename}`);

  if (!studentId || !activity1 || !activity2) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newActivity = new Activity({
    studentId,
    activity1,
    activity2,
    attachments,
  });

  try {
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ message: 'Error saving activities', error });
  }
});

app.get('/activities/:studentId', async (req, res) => {
  try {
    const activityPlans = await Activity.find({ studentId: req.params.studentId });
    res.json(activityPlans);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching activity plans', error });
  }
});

app.post('/goals', async (req, res) => {
  const { studentId, progress, expectation } = req.body;

  if (!studentId || !progress || !expectation) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newGoal = new Goal({
    studentId,
    progress,
    expectation
  });

  try {
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(400).json({ message: 'Error saving goal', error });
  }
});

app.get('/goals/:studentId', async (req, res) => {
  try {
    const goals = await Goal.find({ studentId: req.params.studentId });
    res.json(goals);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching goals', error });
  }
});

app.use('/uploads', express.static('uploads'));

app.listen(5000, () => console.log('Server running on port 5000'));
