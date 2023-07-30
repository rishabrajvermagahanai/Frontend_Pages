import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "./image/logo_nobackground.png";
import "../App.css";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password);
    axios
      .post("http://localhost:5000/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.code === 500) {
          alert("User Not Found");
          setEmail("");
          setPassword("");
        }
        if (res.data.code === 404) {
          alert("Password is wrong");
          setEmail("");
          setPassword("");
        }
        if (res.data.code === 200) {
          // move to home
          navigate("/");
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("EMAIL", res.data.email);
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="logo center">
        <img src={img} alt="gahan-ai_logo" />
      </div>

      <h1 className="center">SIGNIN</h1>
      <div className="outcard">
        Email
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className="inputs"
          type="email"
        />{" "}
        <br /> <br />
        Password
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          className="inputs"
          type="password"
        />{" "}
        <br /> <br />
        <button onClick={handleSubmit} className="btns">
          {" "}
          SUBMIT{" "}
        </button>
        <Link
          style={{ textAlign: "center", display: "block", marginTop: "5px" }}
          to={"/signup"}
        >
          {" "}
          SIGN UP{" "}
        </Link>
        <Link
          style={{ textAlign: "center", display: "block", marginTop: "5px" }}
          to={"/forget-pass"}
        >
          {" "}
          Forget Password{" "}
        </Link>
      </div>
    </>
  );
}

export default Signin;
