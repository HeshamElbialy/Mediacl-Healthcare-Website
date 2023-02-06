import React from "react";
import PageHead from "../../components/PageHead";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaAddressCard, FaMapMarkedAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { GoMailRead } from "react-icons/go";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact contact-page">
      <PageHead title="Contact Us">
        <h6>
          <a href="/">
            <AiFillHome />
            Home
          </a>{" "}
          / Contact Us
        </h6>
      </PageHead>
      <div className="contact-container">
        <div className="section-one">
          <div className="contact-left">
            <form className="form">
              <div className="input">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
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
                <input id="name" type="text" placeholder="Phone Number" />
              </div>
              <div className="input">
                <label for="cars"></label>
                <select name="" id="cars">
                  <option value="Select Doctors">Select Doctors</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </div>
              <textarea placeholder="Type Message"></textarea>
            </form>
            <Link to="/">
              <button type="submit" className="">
                Submit
              </button>
            </Link>
          </div>
          <div className="contact-right">
            <div className="contact-info">
              <h2>Contact Us For Any Informations</h2>
              <div className="location">
                <h3>
                  <FaMapMarkedAlt />
                  Location
                </h3>
                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
              </div>
              <div className="communcations">
                <h3>
                  <FaAddressCard />
                  Email & Phone
                </h3>
                <p>info@yourdomain.com</p>
                <h6>(+68) 120034509</h6>
              </div>
              <div className="social">
                <h3>
                  <TbWorld />
                  Follow Us
                </h3>
                <a href="https://twitter.com/">
                  <BsTwitter />
                </a>
                <a href="https://instagram.com/">
                  <BsInstagram />
                </a>
                <a href="https://linkedin.com/">
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card card1">
            <BiPhoneCall />
            <h3>Contact number</h3>
            <p>+001 123 456 790</p>
            <p>+002 3424 44 00</p>
          </div>
          <div className="card card2">
            <GoMailRead />
            <h3>Email Address</h3>
            <p>info@yourdomain.com</p>
            <p>example@support.com</p>
          </div>
          <div className="card card3">
            <FaAddressCard />
            <h3>Address</h3>
            <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
