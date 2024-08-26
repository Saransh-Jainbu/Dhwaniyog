import React from "react";

function StudentDashboard() {
  const patients = [
    {
      name: "Robert Whitstable",
      problem: "Low Voice Problem",
      sessions: 2,
      status: "Pending",
      assignedTo: "Aditya G.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Robert Whitstable",
      problem: "Stuttering Problem",
      sessions: 7,
      status: "Completed",
      assignedTo: "Dhiraj +1",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Robert Whitstable",
      problem: "Low Voice Problem",
      sessions: 2,
      status: "In-Progress",
      assignedTo: "Aditya G.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Robert Whitstable",
      problem: "Low Voice Problem",
      sessions: 2,
      status: "In-Progress",
      assignedTo: "Aditya G.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-black text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8">DHWANIयोग</h1>
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
          <a href="#" className="block text-gray-300 hover:text-white mb-4">
            Settings
          </a>
          <a href="#" className="block text-gray-300 hover:text-white">
            Help Center
          </a>
        </div>
      </div>

      <div className="flex-grow p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Patients</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
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

        <div className="grid grid-cols-4 gap-6">
          {patients.map((patient, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow">
              <img
                className="w-16 h-16 rounded-full mx-auto"
                src={patient.image}
                alt={patient.name}
              />
              <h3 className="text-center mt-4 text-lg font-semibold">
                {patient.name}
              </h3>
              <p className="text-center text-gray-500">{patient.problem}</p>
              <div className="mt-4 text-center">
                <p>Sessions: {patient.sessions}</p>
                <p>Case Status: {patient.status}</p>
                <p>Allotted To: {patient.assignedTo}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-gray-200 text-black px-4 py-2 rounded-3xl">
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

export default StudentDashboard;
