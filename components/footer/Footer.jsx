import React from "react";
import Logo from "../../assets/download.png";
import { FaPhoneAlt } from "react-icons/fa";
import Facebook from "../../assets/icons8-facebook.svg";
import Instagram from "../../assets/icons8-instagram.svg";
import Twitter from "../../assets/icons8-twitter.svg";
import Linkedin from "../../assets/linkedin-svgrepo-com.svg";
import BlueShape from "../../assets/blue-shape.png";
import BlueCircle from "../../assets/blue-circle.png";
import BlueSquare from "../../assets/blue-square.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <img className="shape" src={BlueShape} alt="BlueShape" />
      <img className="circle" src={BlueCircle} alt="BlueCircle" />
      <div className="footer-container">
        <article>
          <div>
            <img src={Logo} alt="" />
          </div>
          <p>
            Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
            smod tempor incididunt ut labore et.
          </p>
          <div className="phone-box">
            <FaPhoneAlt className="phone" />
            <div className="contact">
              <span>Contact Us</span>
              <h4>+01 123 456 7890</h4>
            </div>
          </div>
        </article>
        <article>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/servicespage">Services</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/faqs">Faq's</Link>
            </li>
            <li>
              <Link to="/blogspage">Blogs</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
        </article>
        <article>
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/servicespage">Dental Care</Link>
            </li>
            <li>
              <Link to="/servicespage">Cardiac Clinic</Link>
            </li>
            <li>
              <Link to="/servicespage">Massege Therapy</Link>
            </li>
            <li>
              <Link to="/servicespage">Cardiology</Link>
            </li>
            <li>
              <Link to="/servicespage">Precise Diagnosis</Link>
            </li>
            <li>
              <Link to="/servicespage">Abmbulance Services</Link>
            </li>
          </ul>
        </article>
        <article>
          <h3>Subscribe</h3>
          <input type="email" placeholder="Email Address" />
          <br />
          <button type="submit">Subscribe Now</button>
          <div className="social-box">
            <a href="/#">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="/#">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="/#">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="/#">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          2022 Created By <small className="name">Hesham Elbialy</small> &copy;
          All Right Reserved{" "}
        </small>
      </div>
      <img className="blue-square" src={BlueSquare} alt="BlueSquare" />
      <img className="shape2" src={BlueShape} alt="BlueShape" />
    </section>
  );
};

export default Footer;
