import React, { useState, useEffect } from 'react';
import StuLeftbar from './StuLeftBar';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentGoals = () => {
  const [progress, setProgress] = useState('');
  const [expectation, setExpectation] = useState('');
  const [studentId, setStudentId] = useState(null);
const apiUrl =
  import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? "http://localhost:5000" : ""); // localhost only in dev mode

  useEffect(() => {
    const id = sessionStorage.getItem('currentStudentId');
    console.log('Retrieved student ID:', id);

    if (id) {
      setStudentId(id);
    } else {
      toast.error("No student ID found.");
    }
  }, []);

  const handleSubmit = async () => {
    if (!studentId) {
      toast.error('No student ID available for submission');
      return;
    }

    const goalData = {
      studentId,
      progress,
      expectation
    };

    try {
      console.log('Submitting goals...');
      const response = await axios.post(`${apiUrl}/goals`, goalData);

      if (response.status === 201) {
        toast.success('Goals submitted successfully!');
        setProgress('');
        setExpectation('');
      } else {
        toast.error('Failed to submit goals.');
      }
    } catch (error) {
      console.error('Error submitting goals:', error);
      toast.error('Error submitting goals: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex">
      <StuLeftbar />
      <div className="flex flex-col p-2 mt-12 w-[850px] ml-[380px]">
        <span className="font-roboto font-bold text-3xl">Goals</span>

        <div className="flex flex-col ml-4 mt-16">
          <span className="font-roboto font-bold text-xl">Progress</span>
        </div>
        <textarea
          placeholder="Type your progress here"
          className="border-2 p-4 mt-4 h-[20vh] w-[70vh] mb-2"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        ></textarea>

        <div className="flex flex-col ml-4 mt-8">
          <span className="font-roboto font-bold text-xl">Expectation</span>
        </div>
        <textarea
          placeholder="Type your expectations here"
          className="border-2 p-4 mt-4 h-[20vh] w-[70vh] mb-8"
          value={expectation}
          onChange={(e) => setExpectation(e.target.value)}
        ></textarea>

        <div className="flex justify-between gap-20">
          <button className="font-montserrat p-2 font-semibold text-lg bg-red-500 w-auto rounded-3xl text-white pr-4 pl-4">
            Add Attachments
          </button>
          <button className="font-montserrat p-2 font-semibold text-lg bg-red-500 w-auto rounded-3xl text-white pr-4 pl-4">
            Add Activity
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-950 p-2 text-white font-montserrat font-semibold rounded-3xl w-[120px]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentGoals;
