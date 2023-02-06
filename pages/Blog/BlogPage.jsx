import React from "react";
import PageHead from "../../components/PageHead";
import { AiFillHome } from "react-icons/ai";
import Card from "../../Card";
import { blogs } from "../../data";
import "./blogpage.css";

const BlogPage = () => {
  return (
    <section className="news blog">
      <PageHead title="Blogs">
        <h6>
          <a href="/">
            <AiFillHome />
            Home
          </a>{" "}
          / Blogs
        </h6>
      </PageHead>
      <div className="new-container">
        {blogs.map(
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
                <button>
                  {button}
                  <a href="/#"> {icon2} </a>
                </button>
              </Card>
            );
          }
        )}
      </div>
    </section>
  );
};

export default BlogPage;
