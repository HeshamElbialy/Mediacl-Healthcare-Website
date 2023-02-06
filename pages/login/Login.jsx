import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/download.png";
import "./login.css";

const Login = () => {
  return (
    <section className="login login-page">
      <div className="login-container">
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
              placeholder="Username"
              required
            />
          </div>
          <div className="input">
            <input
              type="password"
              id="name"
              name="name"
              placeholder="Password"
              required
            />
          </div>
        </form>
        <Link to="/">
          <button>Login</button>
        </Link>
        <div className="text-wraper">
          <p className="para1">Forgot Password</p>
          <p className="para">Don't have any account?</p>
        </div>
        <Link to="/register">
          <button className="reg-btn">Register</button>
        </Link>
      </div>
    </section>
  );
};

export default Login;
