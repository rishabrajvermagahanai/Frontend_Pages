import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import Payment from "./Payment/Payment";
import img from "./image/Gahan_Academy 1.png";
import "../App.css";

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
      <div className="card-home">
      
        <div className="logo center">
          <Link to='/'><img src={img} alt="gahan-ai_logo" /></Link>
        </div>

        <div className="logout">
          <span>YOUR EMAIL  :-{localStorage.getItem("EMAIL")} </span>
          <button className="btn-primary"
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
