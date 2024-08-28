import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboard_1 from './assets/dashboard_1.jpeg';
import axios from 'axios';



const AddPatient = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    email: '',
    address: '',
    contactNumber: '',
    appointTo: '',
    category: '',
    problem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/add-patient', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };
    
    
  
  return (
    
    <div className="flex">
      <div className="w-64 bg-gray-100 h-screen p-4">
        <Link to="/" className="flex items-center text-gray-700 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5 mb-4 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        </Link>
        <Link to="/therapistdashboard" className="flex mt-6 items-center text-gray-700 hover:text-black">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Patient
        </Link>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Add Patient</h1>
            <div className="relative">
              <img src={dashboard_1} alt="Profile" className="w-12 h-12 rounded-full" />
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" className="border p-2 rounded" value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" className="border p-2 rounded" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select name="gender" className="border p-2 rounded" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select name="age" className="border p-2 rounded" value={formData.age} onChange={handleChange}>
                <option value="" disabled>Select Age</option>
                {[...Array(100)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <input type="email" name="email" placeholder="Email" className="border p-2 rounded w-full" value={formData.email} onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" className="border p-2 rounded w-full" value={formData.address} onChange={handleChange} />
            <input type="tel" name="contactNumber" placeholder="Contact Number" className="border p-2 rounded w-full" value={formData.contactNumber} onChange={handleChange} />
            <div className="grid grid-cols-2 gap-4">
              <select name="appointTo" className="border p-2 rounded" value={formData.appointTo} onChange={handleChange}>
                <option value="">Appoint To</option>
                {/* Add options dynamically if needed */}
              </select>
              <select name="category" className="border p-2 rounded" value={formData.category} onChange={handleChange}>
                <option value="">Category</option>
                {/* Add options dynamically if needed */}
              </select>
            </div>
            <textarea name="problem" placeholder="Problem" className="border p-2 rounded w-full h-24" value={formData.problem} onChange={handleChange}></textarea>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
