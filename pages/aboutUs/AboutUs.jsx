import React from "react";
import PageHead from "../../components/PageHead";
import About from "../../components/about/About";
import Testimonials from "../../components/testimonials/Testimonials";
import News from "../../components/News/News";
import { AiFillHome } from "react-icons/ai";
import AboutInfo from "../../components/aboutpage/AboutInfo";
import Doctors from "../../components/aboutpage/Doctors";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <PageHead title="About Us">
        <h6>
          <a href="/">
            <AiFillHome />
            Home
          </a>{" "}
          / About Us
        </h6>
      </PageHead>
      <About />
      <AboutInfo />
      <Doctors />
      <Testimonials />
      <News />
    </section>
  );
};

export default AboutUs;
