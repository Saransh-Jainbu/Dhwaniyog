import React from 'react';
import { Link } from 'react-router-dom';
import dashboard_1 from './assets/dashboard_1.jpeg';

const Dashboard = () => {
  return (
    <div className="flex">
      
      <div className="w-64 bg-gray-100 h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-black">
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

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2 rounded" />
              <input type="text" placeholder="Last Name" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select className="border p-2 rounded">
                <option>Male</option>
                <option>Female</option>
              </select>
              <select className="border p-2 rounded">
  <option value="" disabled selected>Select Age</option>
  {[...Array(100)].map((_, i) => (
    <option key={i} value={i + 1}>{i + 1}</option>
  ))}
</select>
            </div>
            <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
            <input type="text" placeholder="Address" className="border p-2 rounded w-full" />
            <input type="tel" placeholder="Contact Number" className="border p-2 rounded w-full" />
            <div className="grid grid-cols-2 gap-4">
              <select className="border p-2 rounded">
                <option>Appoint To</option>
              </select>
              <select className="border p-2 rounded">
                <option>Category</option>
              </select>
            </div>
            <textarea placeholder="Problem" className="border p-2 rounded w-full h-24"></textarea>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
