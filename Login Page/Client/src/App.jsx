import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPatient from "./AddPatient";  
import Home from "./Home";
import "./index.css";
import Login from "./StudentLogin";
import StuLogin from "./TherapistLogin";
import Reset from "./Reset";
import ResetPassword from "./ResetPassword";
import Recovery from "./Recovery";

import TherapistDashboard from "./TherapistDashboard";
import ActivityPlans from "./ActivityPlans";
import Goals from "./Goals";
import StudentDashboard from "./StudentDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpatient" element={<AddPatient/>} />
        <Route path="/studentlogin" element={<Login/>} />
        <Route path="/therapistlogin" element={<StuLogin/>} />
        <Route path="/forgotpassword" element={<Reset/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/recovery" element={<Recovery/>} />
        <Route path="/studentdashboard" element={<StudentDashboard/>} /> 
        <Route path="/therapistdashboard" element={<TherapistDashboard/>} />
        <Route path="/activityplans" element={<ActivityPlans/>} />
        <Route path="/goals" element={<Goals/>} />

      </Routes>
    </Router>
  );
}

export default App;
