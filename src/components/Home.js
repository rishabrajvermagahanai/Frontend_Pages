import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment/Payment";
import img from "./image/logo_nobackground.png";
import "../App.css";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <div className="card">
        <div>HOME</div>
        <div className="logo center">
          <img src={img} alt="gahan-ai_logo" />
        </div>

        <div>
          <span> {localStorage.getItem("EMAIL")} </span>
          <button className="logout"
            onClick={() => {
              localStorage.clear();
              navigate("/signin");
            }}
          >
            {" "}
            LOGOUT{" "}
          </button>
        </div>
      </div>
      <Payment amount={35000} />
    </>
  );
}

export default Home;
