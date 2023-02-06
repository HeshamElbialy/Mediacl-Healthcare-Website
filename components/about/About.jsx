import React from "react";
import Image1 from "../../assets/about1.jpg";
import Image2 from "../../assets/about2.jpg";
import Image3 from "../../assets/about3.jpg";
import { TbAmbulance } from "react-icons/tb";
import { VscPerson } from "react-icons/vsc";
import { MdOutlineBloodtype } from "react-icons/md";
import { GiTripleNeedle } from "react-icons/gi";
import Shape from "../../assets/download (1).png";
import Square from "../../assets/blueSquare.png";

import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
          <span className="square"></span>
          <div className="box-image">
            <img className="image1" src={Image1} alt="" />
            <img className="image2" src={Image2} alt="" />
            <img className="image3" src={Image3} alt="" />
            <div className="text-box">
              <h1>20</h1>
              <h3>Year Experience</h3>
            </div>
          </div>
          <div className="shape">
            <img src={Shape} alt="" />
          </div>
        </div>
        <div className="about-right">
          <h4>About Us</h4>
          <h1>The Great Place Of Medical Hospital Center</h1>
          <p>
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital.
          </p>
          <div className="features">
            <h6 className="blue">
              {" "}
              <TbAmbulance /> Emergency Help
            </h6>
            <h6 className="green">
              {" "}
              <VscPerson /> Qualified Doctors
            </h6>
            <h6 className="orange">
              {" "}
              <MdOutlineBloodtype /> Best Professionals
            </h6>
            <h6 className="purple">
              {" "}
              <GiTripleNeedle /> Medical Treatment
            </h6>
          </div>
          <Link to="/aboutus">Read More</Link>
        </div>
        <div className="squares">
          <img src={Square} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
