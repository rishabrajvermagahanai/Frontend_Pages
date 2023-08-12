import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Payment from "../Payment/Payment";
import img from "../image/Gahan_Academy 1.png";
import "./Authorization.css";

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
        <div className="logout card-home">
          <Link to="/">
            <img src={img} alt="gahan-ai_logo" className="logo" />
          </Link>
          <span>Welcome :-<h2>{localStorage.getItem("NAME")}</h2> </span>
          <br></br>
          <span>YOUR EMAIL :-{localStorage.getItem("EMAIL")} </span>
          <br />{" "}
          <button
            className="btn-primary"
            onClick={() => {
              localStorage.clear();
              navigate("/signin");
            }}
          >
            {" "}
            LOGOUT{" "}
          </button>
        </div>
      <Payment amount={35000} />
    </>
  );
}

export default Home;
