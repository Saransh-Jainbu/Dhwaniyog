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
// import StudentDashboard from "./StudentDashboard";
import TherapistDashboard from "./TherapistDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddPatient" element={<AddPatient/>} />
        <Route path="/studentlogin" element={<Login/>} />
        <Route path="/therapistlogin" element={<StuLogin/>} />
        <Route path="/forgotpassword" element={<Reset/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/recovery" element={<Recovery/>} />
        {/* <Route path="/studentdashboard" element={<StudentDashboard/>} /> */}
        <Route path="/therapistdashboard" element={<TherapistDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
