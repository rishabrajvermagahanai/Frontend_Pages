import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import "./Authorization.css";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.code === 500) {
          alert("User Not Found");
        }
        if (res.data.code === 404) {
          alert("Password is wrong");
        }
        if (res.data.code === 200) {
          // move to home
          navigate("/home");
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("EMAIL", res.data.email);
          localStorage.setItem("NAME", res.data.name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavBar />
      <div className="start bg-black" style={{height:"90px"}}>welcome</div>
      <div className="outcard">
        <h1 className="center">SIGNIN</h1>
        Email
        <br />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className="inputs"
          type="email"
        />{" "}
        <br /> <br />
        Enter Your Password
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
