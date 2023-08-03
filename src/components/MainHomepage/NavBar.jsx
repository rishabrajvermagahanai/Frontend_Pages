import React from "react";
import "./css/NavBar.css";
import img from "../image/Gahan_Academy 1.png";
import { Link } from "react-router-dom";
import img_ele_1 from '../image/imageone.jpg'
import img_ele_2 from '../image/imagetwo.jpg'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar fixed-top">
        <Link to="/">
          <img src={img} alt="gahan-ai_logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/mainHome">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                COURSE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                PRICING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                GO TO SIGNIN PAGE
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div className="img_ele">
              <img src={img_ele_1} alt="electric image" />
            </div>
          </div>
          <div class="col-md-6">
            <div className="img_ele">
              <img src={img_ele_2} alt="electric image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
