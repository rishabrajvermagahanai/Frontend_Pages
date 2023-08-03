
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/MainHomepage/NavBar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import NewSubmit from "./components/NewSubmit";

import MainHome from './components/MainHomepage/MainHome'
import Courses from './components/MainHomepage/Courses'
import Pricing from './components/MainHomepage/Pricing'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />


          <Route path="/mainHome" element={<MainHome/>} />
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/signin" element={<Signin/>} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
