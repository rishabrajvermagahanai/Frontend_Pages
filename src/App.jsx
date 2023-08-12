
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/MainHomepage/HomePage";
import OtherHome from './components/MainHomepage/OtherHome'
import Courses from './components/MainHomepage/Courses'
import Pricing from './components/MainHomepage/Pricing'


import Signup from "./components/AuthorizationPage/Signup";
import Signin from "./components/AuthorizationPage/Signin";
import Home from "./components/AuthorizationPage/Home";
import ForgetPassword from "./components/AuthorizationPage/ForgetPassword";
import NewSubmit from "./components/AuthorizationPage/NewSubmit";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/otherhome" element={<OtherHome/>} />
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/signin" element={<Signin/>} />



          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />

      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
