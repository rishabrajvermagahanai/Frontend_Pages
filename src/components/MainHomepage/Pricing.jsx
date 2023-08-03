import React from "react";
import img from "../image/Gahan_Academy 1.png";
import { Link } from "react-router-dom";
import './css/Pricing.css'

const Pricing = () => {
  return (
    <>
      <div className="nav-all">
        <div className="logo center">
          <Link to="/">
            <img src={img} alt="gahan-ai_logo" />
          </Link>
        </div>
      </div>
      PRICING:---
    </>
  );
};

export default Pricing;
