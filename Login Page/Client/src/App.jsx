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
import StudentGoals from "./StudentGoals";
import StudentActivityPlans from "./StudentActivityPlans";
import ViewPatient from "./ViewPatient";
import Logout from "./Logout";
import Contact from "./Contact";


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
        <Route path="/studentgoals" element={<StudentGoals/>} />
        <Route path="/studentactivityplans" element={<StudentActivityPlans/>} />
        <Route path="/viewpatient" element={<ViewPatient/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </Router>
  );
}

export default App;
