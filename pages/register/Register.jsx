import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/download.png";
import "./register.css";

const Register = () => {
  return (
    <section className="register">
      <div className="register-container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <form>
          <div className="input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Email"
              required
            />
          </div>
          <div className="input">
            <input id="name" type="text" placeholder="Username" />
          </div>
          <div className="input">
            <input id="name" type="password" placeholder="Password" />
          </div>
        </form>
        <Link to="/">
        <button  className="reg-btn">Register Now</button>
        </Link>
        <p>Already Have an account?</p>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </div>
    </section>
  );
};

export default Register;
