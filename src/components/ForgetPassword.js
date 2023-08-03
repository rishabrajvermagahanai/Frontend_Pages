import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import img from "./image/Gahan_Academy 1.png";
import "../App.css";

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
      <div className="logo center">
        <Link to="/">
          <img src={img} alt="gahan-ai_logo" />
        </Link>
      </div>

      <h1 className="center"> Forget Password</h1>
      <div className="outcard">
        Email{" "}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="inputs"
          type="text"
        />
        <button onClick={handleSubmit} className="btns">
          SEND OTP{" "}
        </button>
      </div>
    </>
  );
}

export default ForgetPassword;
