import React from "react";
import SectionHead from "../SectionHead";
import Card from "../../Card";
import { news } from "../../data";
import "./News.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="news">
      <SectionHead
        title={"Latest News"}
        header={" Our Latest News"}
        className="sectionhead__head"
      />
      <div className="new-container">
        {news.map(
          ({
            id,
            avatar,
            smAvatar,
            name,
            icon,
            date,
            quote,
            button,
            icon2,
          }) => {
            return (
              <Card className="news-card" key={id}>
                <div className="image-box">
                  <img src={avatar} alt="Avatar" />
                </div>
                <div className="details-box">
                  <a href="/#">
                    <img src={smAvatar} alt="smAvatar" />
                  </a>
                  <a className="name" href="/#">
                    {name}
                  </a>
                  <h6>
                    <a href="/#"> {icon} </a>
                    {date}
                  </h6>
                </div>
                <h3>{quote}</h3>
                <Link to="/blogpage">
                <button>
                  {button}
                  <Link to="/blogpage"> {icon2} </Link>
                </button>
                </Link>
              </Card>
            );
          }
        )}
      </div>
    </div>
  );
};

export default News;
