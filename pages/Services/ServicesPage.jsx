import React from "react";
import PageHead from "../../components/PageHead";
import { AiFillHome } from "react-icons/ai";
import { servicesPage } from "../../data";
import Card from "../../Card";
import AboutInfo from "../../components/aboutpage/AboutInfo";
import Doctors from "../../components/aboutpage/Doctors";
import News from "../../components/News/News";
import "./servicespage.css";

const ServicesPage = () => {
  return (
    <section className="services-page">
      <PageHead title="Services">
        <h6>
          <a href="/">
            <AiFillHome />
            Home
          </a>{" "}
          / Services
        </h6>
      </PageHead>
      <div className="servicespage-container">
        {servicesPage.map(({ id, icon, name, desc, button }) => {
          return (
            <Card key={id} className="serv-card">
              <span>{icon}</span>
              <h2>{name}</h2>
              <p>{desc}</p>
              <button>{button}</button>
            </Card>
          );
        })}
      </div>
      <AboutInfo />
      <Doctors />
      <News />
    </section>
  );
};

export default ServicesPage;
