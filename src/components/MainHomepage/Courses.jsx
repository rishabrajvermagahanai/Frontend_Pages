import React from "react";
import img from "../image/Gahan_Academy 1.png";
import { Link } from "react-router-dom";
import './css/Course.css'

const Courses = () => {
  return (
    <>
      <component />
      <div className="nav-all">
        <div className="logo center">
          <Link to="/">
            <img src={img} alt="gahan-ai_logo" />
          </Link>
        </div>
      </div>

      <div>OUR COURSES:--</div>
    </>
  );
};

export default Courses;
