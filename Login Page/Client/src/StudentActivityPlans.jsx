import React, { useState, useEffect } from 'react';
import StuLeftbar from './StuLeftBar';
import axios from 'axios';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentActivityPlans = () => {
  const [activity1, setActivity1] = useState('');
  const [activity2, setActivity2] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem('currentStudentId');
    console.log('Retrieved student ID:', id);

    if (id) {
      setStudentId(id);
    } else {
      toast.error("No student ID found.");
    }
  }, []);

  const handleFileChange = (event) => {
    setAttachments(event.target.files);
  };

  const handleSubmit = async () => {
    if (!studentId) {
      toast.error('No student ID available for submission');
      return;
    }

    const formData = new FormData();
    formData.append('studentId', studentId);
    formData.append('activity1', activity1);
    formData.append('activity2', activity2);

    for (let i = 0; i < attachments.length; i++) {
      formData.append('attachments', attachments[i]);
    }

    try {
      console.log('Submitting activity plan...');
      const response = await axios.post('http://localhost:5000/activities', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        toast.success('Activity Plan submitted successfully!');
        setActivity1('');
        setActivity2('');
        setAttachments([]);
      } else {
        toast.error('Failed to submit Activity Plan.');
      }
    } catch (error) {
      console.error('Error submitting Activity Plan:', error);
      toast.error('Error submitting Activity Plan: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex">
      <StuLeftbar />
      <div className="flex flex-col p-2 mt-12 w-[850px] ml-[380px]">
        <span className="font-roboto font-bold text-3xl">Activity Plans</span>

        <div className="flex flex-col ml-4 mt-16">
          <span className="font-roboto font-bold text-xl">Activity 1:</span>
        </div>
        <textarea
          type="text"
          placeholder="Type your suggestions here"
          className="border-2 p-4 mt-4 h-[20vh] w-[70vh] mb-2"
          value={activity1}
          onChange={(e) => setActivity1(e.target.value)}
        ></textarea>

        <div className="flex flex-col ml-4 mt-8">
          <span className="font-roboto font-bold text-xl">Activity 2:</span>
        </div>
        <textarea
          type="text"
          placeholder="Type your suggestions here"
          className="border-2 p-4 mt-4 h-[20vh] w-[70vh] mb-8"
          value={activity2}
          onChange={(e) => setActivity2(e.target.value)}
        ></textarea>

        <div className="flex justify-between gap-20">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="font-montserrat p-2 font-semibold text-lg text-white pr-4"
          />
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

export default StudentActivityPlans;
