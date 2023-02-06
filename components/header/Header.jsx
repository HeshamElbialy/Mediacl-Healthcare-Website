import React from "react";
import HeaderImage from "../../assets/header.png";
import blueSquare from "../../assets/blueSquare.png";
import PlusImage from "../../assets/plus.png";
import TriangleImage from "../../assets/triangle.png";
import ShapeImage from "../../assets/download (1).png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="square-box">
          <img className="bluesquare" src={blueSquare} alt="" />
          <img className="plus" src={PlusImage} alt="" />
          <img className="triangle" src={TriangleImage} alt="" />
          <img className="shape" src={ShapeImage} alt="" />
        </div>
        <div className="header-left">
          <div className="header-wrapper">
            <p>We Provide All Health Care Solution</p>
            <h1>Protect Your Health And Take Care To Of Your Health</h1>
            <Link to="/aboutus">
            <button>Read More</button>
            </Link>
          </div>
        </div>
        <div className="header-right">
          <div className="header-image">
            <img src={HeaderImage} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
