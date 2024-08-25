import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";  
import Home from "./Home";
import "./index.css";
import Login from "./Login";
import StuLogin from "./StuLogin";
import Reset from "./Reset";
import ResetPassword from "./ResetPassword";
import Recovery from "./Recovery";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentlogin" element={<Login/>} />
        <Route path="/therapistlogin" element={<StuLogin/>} />
        <Route path="/forgotpassword" element={<Reset/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/recovery" element={<Recovery/>} />
      </Routes>
    </Router>
  );
}

export default App;
