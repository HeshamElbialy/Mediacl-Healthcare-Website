import React from "react";
import PageHead from "../../components/PageHead";
import { AiFillHome } from "react-icons/ai";
import { team } from "../../data";
import Card from "../../Card";
import "./team.css";

const Team = () => {
  return (
    <section className="team">
      <PageHead title="Our Team">
        <h6>
          <a href="/">
            <AiFillHome />
            Home
          </a>{" "}
          / Our Team
        </h6>
      </PageHead>
      <div className="team-container">
        {team.map(
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
              <Card key={id} className="team-card">
                <div className="image-box">
                  <img src={image} alt={name} />
                </div>
                <h2>{name}</h2>
                <h5>{job}</h5>
                <div className="team-socials">
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
    </section>
  );
};

export default Team;
