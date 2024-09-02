import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VerticalLine from "./VerticalLine";
import axios from "axios";

function StudentDashboard() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("all");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/students");
        console.log(response.data);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const viewPatientDetails = (studentId) => {
    console.log("Storing student ID:", studentId);
    sessionStorage.setItem("currentStudentId", studentId);
    navigate(`/viewpatient/${studentId}`);
  };

  const getInitials = (name) => {
    const nameParts = name.split(" ");
    const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
    const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase() || "";
    return `${firstNameInitial}${lastNameInitial}`;
  };

  // Filtered and sorted list based on search query and sort criteria
  const filteredStudents = students
    .filter((student) =>
      student.Name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((student) => {
      if (sortCriteria === "pending") return student.status === "Pending";
      if (sortCriteria === "completed") return student.status === "Completed";
      return true; // Show all if "all" is selected
    });

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
            <button
              onClick={() => setSortCriteria("all")}
              className={`block text-gray-300 hover:text-white ${
                sortCriteria === "all" ? "text-white" : ""
              }`}
            >
              All Patients
            </button>
            <button
              onClick={() => setSortCriteria("pending")}
              className={`block text-gray-300 hover:text-white ${
                sortCriteria === "pending" ? "text-white" : ""
              }`}
            >
              Pending Cases
            </button>
            <button
              onClick={() => setSortCriteria("completed")}
              className={`block text-gray-300 hover:text-white ${
                sortCriteria === "completed" ? "text-white" : ""
              }`}
            >
              Completed Cases
            </button>
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
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-2xl font-bold text-3xl ">Patients</h2>
          <div className="flex items-center space-x-4">
            
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
          
            <button
              onClick={handleRefresh}
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
          {filteredStudents.map((student, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow">
              <div className="flex justify-center">
                {student.image && student.image.length > 0 ? (
                  <img
                    className="w-16 h-16 rounded-full"
                    src={`http://localhost:5000${student.image[0]}`}
                    alt={student.Name}
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {getInitials(student.Name)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-center mt-4 text-lg font-semibold">
                {student.Name}
              </h3>
              <p className="text-center text-gray-500">{student.email}</p>
              <div className="flex flex-row mt-4 text-center gap-2 font-bold justify-evenly">
                <p>
                  <span className="font-normal">Supervisor: </span>
                  <br />
                  {student.supervisior}
                </p>
                <VerticalLine />
                <p>
                  <span className="font-normal">Status: </span>
                  <br />
                  {student.status}
                </p>
                <VerticalLine />
                <p>
                  <span className="font-normal">Sessions: </span>
                  <br />
                  {student.sessions}
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => viewPatientDetails(student._id)}
                  className="bg-gray-200 text-black px-4 py-2 rounded-3xl"
                >
                  View Details
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-3xl">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
