import React from "react";
import Mobile from "../../assets/mobile.png";
import Person from "../../assets/women.png";
import Like from "../../assets/like.png";
import Setting from "../../assets/setting.png";
import Location from "../../assets/location.png";
import Right from "../../assets/right.png";
import Shape from "../../assets/download (1).png";
import Bookform from "./Bookform";
import "./booking.css";

const Booking = () => {
  return (
    <section className="book">
      <div className="book-container">
        <img src={Shape} className="shape" alt="Shape" />
        <div className="book-left">
          <Bookform />
        </div>
        <div className="book-right">
          <div className="mobile">
            <img src={Mobile} alt="Mobile" />
          </div>
          <div className="mobile">
            <img className="person" src={Person} alt="Person" />
          </div>
          <img className="like" src={Like} alt="" />
          <img className="setting" src={Setting} alt="" />
          <img className="location" src={Location} alt="" />
          <img className="right" src={Right} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Booking;
