import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import img from "./image/Gahan_Academy 1.png";
import "./Components.css";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
    axios
      .post("http://localhost:5000/send-otp", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate("/otp");
        } else {
          alert("Email / Server Error.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card-home">
        <Link to="/">
          <img src={img} alt="gahan-ai_logo" className="logo"/>
        </Link>
      </div>
      <div className="outcard">
        <h1 className="center"> Forget Password</h1>
        Email <br />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="inputs"
          type="text"
        />{" "}
        <br /> <br />
        <button onClick={handleSubmit} className="btns">
          SEND OTP{" "}
        </button>
        <Link
          style={{
            textAlign: "center",
            display: "block",
            marginTop: "5px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          to={"/signup"}
        >
          {" "}
          SIGN UP{" "}
        </Link>
        <Link
          style={{
            textAlign: "center",
            display: "block",
            marginTop: "5px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          to={"/signin"}
        >
          {" "}
          SIGN IN{" "}
        </Link>
      </div>
    </>
  );
}

export default ForgetPassword;
