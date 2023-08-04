import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "./image/Gahan_Academy 1.png";
import "./Components.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z]{3,}$/.test(name)) {
      newErrors.name = "Name must contain at least three alphabets";
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile must be a 10-digit number";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:5000/signup", {
          email: email,
          password: password,
          name: name,
          mobile: mobile,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            //alert("Signup success.");
            setEmail("");
            setPassword("");
            setName("");
            setMobile("");
            navigate("/signin");
          } else {
            alert("Error.");
            setEmail("");
            setPassword("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="card-home">
        <Link to="/">
          <img src={img} alt="gahan-ai_logo" className="logo"/>
        </Link>
      </div>

      <div className="outcard">
      <h1 className="center">SIGNUP</h1>
        Name <br />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={`inputs ${errors.name ? "is-invalid" : ""}`}
          type="text"
        />
        {errors.name && <div className="error">{errors.name}</div>}
        Mobile <br />
        <input
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          className={`inputs ${errors.mobile ? "is-invalid" : ""}`}
          type="number"
        />
        {errors.mobile && <div className="error">{errors.mobile}</div>}
        Email <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`inputs ${errors.email ? "is-invalid" : ""}`}
          type="email"
        />
        {errors.email && <div className="error">{errors.email}</div>}
        Password <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={`inputs ${errors.password ? "is-invalid" : ""}`}
          type="password"
        /><br></br><br></br>
        {errors.password && <div className="error">{errors.password}</div>}
        <button onClick={handleSubmit} className="btns">
          SUBMIT
        </button>
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

export default Signup;
