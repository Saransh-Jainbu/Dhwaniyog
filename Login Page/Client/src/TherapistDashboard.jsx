import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VerticalLine from "./VerticalLine";
import axios from "axios";
import { ToastContainer , toast } from "react-toastify";

function TherapistDashboard() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category state

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/patients");
        setPatients(response.data);
      
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  // Filter patients based on search query and selected category
  const filteredPatients = patients.filter((patient) => {
    const matchesSearchQuery = `${patient.firstName} ${patient.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || patient.category === selectedCategory;
    return matchesSearchQuery && matchesCategory;
  });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6 flex flex-col justify-between">
        <div>
          <button
            onClick={() => navigate("/")}
            className="text-xl font-bold mb-8"
          >
            DHWANIयोग
          </button>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-300 hover:text-white">
              Patients
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Pending Cases
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Completed Cases
            </a>
          </nav>
        </div>
        <div>
          <button
            onClick={() => navigate("/logout")}
            className="block text-gray-300 hover:text-white mb-4"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Patients</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/AddPatient")}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              New Patient
            </button>
            
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <button className="bg-white text-black px-4 py-2 rounded border border-gray-300">
              Filter
            </button>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded"
            >
              <option value="All">All Categories</option>
              <option value="Articulation Disorders">
                Articulation Disorders
              </option>
              <option value="Phonological Disorders">
                Phonological Disorders
              </option>
              <option value="Voice Disorders">Voice Disorders</option>
              <option value="Aphasia">Aphasia</option>
              <option value="Dysarthria">Dysarthria</option>
              <option value="Apraxia of Speech">Apraxia of Speech</option>
              <option value="Speech Delay">Speech Delay</option>
              <option value="Cluttering">Cluttering</option>
              <option value="Resonance Disorders">Resonance Disorders</option>
            </select>
            <input
              type="text"
              placeholder="Search by Name"
              className="px-4 py-2 border rounded w-full max-w-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRefresh}
              className="bg-white text-black px-4 py-2 rounded border border-gray-300"
            >
              {/* Refresh Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Patient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow">
              <div className="flex justify-center">
                {patient.image && patient.image.length > 0 ? (
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src={patient.image[0]}
                    alt={`${patient.firstName} ${patient.lastName}`}
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    {/* Placeholder Avatar */}
                    <span className="text-gray-500 text-xl">
                      {patient.firstName.charAt(0)}
                      {patient.lastName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-center mt-4 text-xl font-semibold">
                {patient.firstName} {patient.lastName}
              </h3>
              <p className="text-center text-gray-500">{patient.category}</p>
              <div className="flex flex-row mt-4 text-center gap-2 font-medium justify-evenly">
                <p>
                  <span className="font-normal">Sessions:</span>
                  <br />
                  {patient.sessions}
                </p>
                <VerticalLine />
                <p>
                  <span className="font-normal">Case Status:</span>
                  <br />
                  {patient.status || "Pending"}
                </p>
                <VerticalLine />
                <p>
                  <span className="font-normal">Allotted To:</span>
                  <br />
                  {patient.appointTo}
                </p>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => navigate("/activityplans")}
                  className="bg-gray-200 text-black px-4 py-2 rounded-full"
                >
                  View Case
                </button>
                <button
                  onClick={() => navigate(`/editpatient/${patient.id}`)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full"
                >
                  Edit Case
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TherapistDashboard;
