import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Work from "../../components/work/Work";
import Booking from "../../components/booking/Booking";
import Services from "../../components/services/Services";
import Testimonials from "../../components/testimonials/Testimonials";
import News from "../../components/News/News";
import "./home.css";


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Booking />
      <Services />
      <Testimonials />
      <News />
    </div>
  );
};

export default Home;
