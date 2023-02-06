import React from "react";
import Bookform from "../../components/booking/Bookform";
import PageHead from "../../components/PageHead";
import { AiFillHome } from "react-icons/ai";
import "../../components/booking/booking.css";
import "./book.css";

const Book = () => {
  return (
    <div className="book book-page">
      <PageHead title="About Us">
        <h6>
          <a href="/">
            <AiFillHome />
            Home
          </a>{" "}
          / About Us
        </h6>
      </PageHead>
      <div className=" container book-page-container book-container">
        <div className="book-left">
          <Bookform />
        </div>
      </div>
    </div>
  );
};

export default Book;
