import React from "react";
import "./css/HomePage.css"
import NavBar from "../NavBar";

const HomeNavBar = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="start bg-black" style={{height:"90px"}}>welcome</div>
      <h1>HomePage</h1>
    </>
  );
};

export default HomeNavBar;
