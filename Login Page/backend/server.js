const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
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
  sessions: Number,
  image: String
});

const Patient = mongoose.model('Patient', PatientSchema);

app.post('/addpatient', async (req, res) => {
  const patient = new Patient(req.body);
  try {
    await patient.save();
    res.status(201).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
