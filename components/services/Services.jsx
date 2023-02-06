import React from "react";
import Card from "../../Card";
import { services } from "../../data";
import Square from "../../assets/square.png";
import Circle from "../../assets/dotted-circle.png";
import "./services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <div className="background"></div>
      <div className="services-container">
        <img className="circle" src={Circle} alt="" />
        <div className="services-left">
          <h4>Services</h4>
          <h2>We Cover A Big Variety Of Medical Services</h2>
          <p>
            We provide the special tips and advice’s of heath care treatment and
            high level of best.
          </p>
          <div>
            <img className="square" src={Square} alt="" />
          </div>
          <Link to="/servicespage">
            <button className="button">All Services</button>
          </Link>
        </div>
        <div className="services-right">
          {services.map(({ id, icon, name, desc, button }) => {
            return (
              <Card className="card-box" key={id}>
                <span>{icon}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
                <Link to="/servicespage">
                  <button>{button}</button>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
