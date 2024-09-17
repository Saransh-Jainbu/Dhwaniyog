import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import dashboard_1 from "./assets/dashboard_1.jpeg";
import StuLeftbar from "./StuLeftBar";
import { Loader } from "rsuite";

const ViewPatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
const apiUrl =
  import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? "http://localhost:5000" : ""); // localhost only in dev mode

  useEffect(() => {
    const fetchPatient = async () => {
      console.log("Fetching patient with ID:", id);
      if (!id) {
        console.error("Patient ID is missing");
        setError("Patient ID is missing");
        setLoading(false);
        return;
      }

      try {  
        const response = await axios.get(`${apiUrl}/students/${id}`);
        
        console.log("API response:", response.data);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient:', error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          setError(`Server error: ${error.response.status} - ${error.response.data.message || "Unknown error"}`);
        } else if (error.request) {
          console.error("Error request:", error.request);
          setError("No response received from server. Check your network connection.");
        } else {
          console.error("Error message:", error.message);
          setError(`Error: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id,apiUrl]);

  if (loading) return <Loader size="lg" content="Loading"/>;
  if (error) return <div>Error: {error}</div>;
  if (!patient) return <div>No patient data found</div>;

  return (
    <div className="flex">
      <StuLeftbar />
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Patient's Info</h1>
            <div className="relative ml-4">
              <img
                src={dashboard_1}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>

          <div className="space-y-4 font-semibold">
              <div className="border p-2 rounded w-full">
              <span className="text-gray-600 font-normal text-sm">Name: </span>{patient.Name || "N/A"}
              </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 rounded">
                <span className="text-gray-600 font-normal text-sm">Age:</span> {patient.age || "N/A"}
              </div>
              <div className="border p-2 rounded">
              <span className="text-gray-600 font-normal text-sm">Sessions:</span> {patient.sessions || "N/A"}
              </div>
            </div>

            <div className="border p-2 rounded w-full">
            <span className="text-gray-600 font-normal text-sm">Email: </span>{patient.email || "N/A"}
            </div>
            <div className="border p-2 rounded w-full">
            <span className="text-gray-600 font-normal text-sm">Address:</span> {patient.address || "N/A"}
            </div>
            <div className="border p-2 rounded w-full ">
            <span className="text-gray-600 font-normal text-sm">Contact Number:</span> {patient.contactNumber || "N/A"}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 rounded">
              <span className="text-gray-600 font-normal text-sm">Status:</span> {patient.status || "N/A"}
              </div>
              <div className="border p-2 rounded">
              <span className="text-gray-600 font-normal text-sm">Appointed by: </span> {patient.supervisior || "N/A"}
              </div>
            </div>

            <div className="border p-2 rounded w-full h-24">
            <span className="text-gray-600 font-normal text-sm">Feedbacks - </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPatient;