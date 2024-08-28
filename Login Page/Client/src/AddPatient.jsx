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
    appointBy: '',
    category: '',
    problem: '',
    sessions: 0,
    image: [], 
    additionalImage: [] 
  });

  const [imagePreview, setImagePreview] = useState([]);
  const [additionalImagePreview, setAdditionalImagePreview] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const files = Array.from(e.target.files);
      setFormData({
        ...formData,
        image: files
      });

      const previews = files.map(file => URL.createObjectURL(file));
      setImagePreview(previews);
    } else if (e.target.name === 'additionalImage') {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        additionalImage: file
      });

      setAdditionalImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === 'image') {
        formData.image.forEach(file => data.append('image', file));
      } else {
        data.append(key, formData[key]);
      }
    }
    try {
      const response = await axios.post('http://localhost:5000/addpatient', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  const removeImagePreview = (index) => {
    const updatedPreview = imagePreview.filter((_, i) => i !== index);
    setImagePreview(updatedPreview);

    const updatedFiles = formData.image.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      image: updatedFiles
    });
  };

  const removeAdditionalImagePreview = () => {
    setAdditionalImagePreview(null);
    setFormData({
      ...formData,
      additionalImage: ''
    });
  };

  return (
    <div className="flex">
      <div className="w-64 bg-gray-100 h-screen p-4">
        <Link to="/therapistdashboard" className="flex items-center text-gray-700 hover:text-black">
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

            <div>
              <input type="file" name="additionalImage" placeholder='upload' onChange={handleChange} className="p-2 rounded w-full" />
              {additionalImagePreview && (
                <div className="relative mt-2 w-24 h-24">
                  <img src={additionalImagePreview} alt="Additional Preview" className="w-full h-full object-cover rounded" />
                  <button type="button" onClick={removeAdditionalImagePreview} className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1">X</button>
                </div>
              )}
            </div>
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
              </select>
              <select name="category" className="border p-2 rounded" value={formData.category} onChange={handleChange}>
                <option value="">Category</option>
              </select>
            </div>
            <textarea name="problem" placeholder="Problem" className="border p-2 rounded w-full h-24" value={formData.problem} onChange={handleChange}></textarea>


            <div>
              <span className='font-montserrat font-semibold'>Upload relevant documents (if any)</span>
              <input type="file" name="image" onChange={handleChange} multiple className="border p-2 rounded w-full mt-2" />
              <div className="flex flex-wrap mt-4">
                
                {imagePreview.map((src, index) => (
                  <div key={index} className="relative w-24 h-24 mr-2 mb-2">
                    <img src={src} alt="Preview" className="w-full h-full object-cover rounded" />
                    <button type="button" onClick={() => removeImagePreview(index)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1">X</button>
                  </div>
                ))}
              </div>
            </div>

            

            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
