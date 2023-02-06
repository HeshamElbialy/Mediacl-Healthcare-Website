import React from "react";
import Card from "../../Card";
import { doctors } from "../../data";
import SectionHead from "../SectionHead";

const Doctors = () => {
  return (
    <div className="doctors">
      <SectionHead title="Our Doctors" header="Meet Best Doctors" />
      <div className="doctors-container">
        {doctors.map(
          ({
            id,
            image,
            name,
            job,
            icon1,
            icon2,
            icon3,
            instagram,
            linkedin,
            twitter,
          }) => {
            return (
              <Card key={id} className="doctor-card">
                <div className="image-box">
                  <img src={image} alt={name} />
                </div>
                <h2>{name}</h2>
                <h5>{job}</h5>
                <div className="doctor-socials">
                  <a href={instagram} target="_blank" rel="noreferrer noopener">
                    {" "}
                    {icon1}
                  </a>
                  <a href={linkedin} target="_blank" rel="noreferrer noopener">
                    {" "}
                    {icon2}
                  </a>
                  <a href={twitter} target="_blank" rel="noreferrer noopener">
                    {" "}
                    {icon3}
                  </a>
                </div>
              </Card>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Doctors;
