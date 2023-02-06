import React from "react";
import { aboutInfo } from "../../data";
import Card from "../../Card";

const AboutInfo = () => {
  return (
    <section className="aboutinfo">
      <div className="info-container">
        {aboutInfo.map(({ number, title, quote }, index) => {
          return (
            <Card className="info-card" key={index}>
              <div className="info-box">
                <h2>{number}</h2>
                <h3>{title}</h3>
                <small>{quote}</small>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default AboutInfo;
