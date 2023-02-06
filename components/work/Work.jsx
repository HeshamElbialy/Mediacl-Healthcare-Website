import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import BlueCircle from "../../assets/blue-circle.png";
import Circle from "../../assets/circle.png";
import Plus from "../../assets/plus.png";
import SectionHead from "../SectionHead";
import "./work.css";

const Work = () => {
  return (
    <section className="work">
      <SectionHead
        title={"Working Process"}
        header={"How we works?"}
        className="work__head"
      />
      <div className="work-container">
        <div className="image-box">
          <img src={BlueCircle} alt="" />
        </div>
        <div className="image-box">
          <img className="plus" src={Plus} alt="" />
        </div>
        <div className="box">
          <h2>01</h2>
          <h4>Make Appointmnet</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <Link to="/booking">
            View More <IoIosArrowForward className="icon" />
          </Link>
        </div>
        <div className="box box2">
          <h2>02</h2>
          <h4>Take Treatment</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <Link to="/booking">
            View More <IoIosArrowForward className="icon" />
          </Link>
        </div>
        <div className="box box3">
          <h2>03</h2>
          <h4>Registration</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <Link to="/booking">
            View More <IoIosArrowForward className="icon" />
          </Link>
        </div>
        <div className="circle">
          <img src={Circle} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Work;
