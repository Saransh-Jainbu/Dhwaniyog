import React from "react";
import { useNavigate } from "react-router-dom";
import VerticalLine from "./VerticalLine";
import { useState, useEffect } from "react";
import axios from "axios";

function TherapistDashboard() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

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

  return (
    <div className="flex h-screen bg-gray-100">
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

      <div className="flex-grow p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Patients</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/AddPatient")}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              New Patient
            </button>
            <button className="bg-white text-black px-4 py-2 rounded">
              Sort by date
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <button className="bg-white text-black px-4 py-2 rounded border border-gray-300">
              Filter
            </button>
            <input
              type="text"
              placeholder="Search by Name"
              className="px-4 py-2 border rounded w-full max-w-md"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded border border-gray-300">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button
              onClick={() => handleRefresh()}
              className="bg-white text-black px-4 py-2 rounded border border-gray-300"
            >
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

        <div className="grid grid-cols-3 gap-6">
          {patients.map((patient, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow">
              <div className="flex justify-center">
                {patient.image && patient.image.length > 0 ? (
                  <img
                    className="w-16 h-16 rounded-full"
                    src={patient.image[0]} // Assuming patient.image is an array and you want the first image
                    alt={patient.name}
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center"></div>
                )}
              </div>
              <h3 className="text-center mt-4 text-lg font-semibold">
                {patient.firstName} {patient.lastName}
              </h3>
              <p className="text-center text-gray-500">{patient.category}</p>
              <div className="flex flex-row mt-4 text-center gap-2 font-bold justify-evenly">
                <p> <span className="font-normal">Sessions:</span><br></br> {patient.sessions}</p>
                <VerticalLine />
                <p><span className="font-normal">Case Status:</span><br></br> {patient.status}</p>
                <VerticalLine />
                <p><span className="font-normal ">Allotted To:</span><br></br>{patient.appointTo}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => navigate("/activityplans")}
                  className="bg-gray-200 text-black px-4 py-2 rounded-3xl"
                >
                  View Case
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-3xl">
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
