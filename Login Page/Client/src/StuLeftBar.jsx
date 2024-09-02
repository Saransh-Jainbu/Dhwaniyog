import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const StuLeftbar = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState(null);

  // Fetch studentId from sessionStorage when the component mounts
  useEffect(() => {
    const storedStudentId = sessionStorage.getItem('currentStudentId');
    if (storedStudentId) {
      setStudentId(storedStudentId);
    }
  }, []);

  return (
    <div className="bg-gray-100 h-[100vh] fixed top-0 left-0 p-4 w-fit">
      <Link
        to="/studentdashboard"
        className="flex items-center text-gray-700 hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-5 mb-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <h2 className="text-2xl font-bold mb-4 mr-16">Dashboard</h2>
      </Link>

      {/* Check if studentId is available before allowing navigation */}
      <button
        onClick={() => {
          if (studentId) {
            navigate(`/viewpatient/${studentId}`);
          } else {
            console.error('No student ID found in session storage');
          }
        }}
        className="flex mt-6 items-center text-gray-700 hover:text-black"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        View Patient
      </button> 

      {/* Component 2 */}
      <Link
        to="/studentactivityplans"
        className="flex mt-6 items-center text-gray-700 hover:text-black"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Activity Plan
      </Link>

      {/* Component 3 */}
      <Link
        to="/studentgoals"
        className="flex mt-6 items-center text-gray-700 hover:text-black"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Goals
      </Link>
    </div>
  );
};

export default StuLeftbar;
