import React from "react";
import PageHead from "../../components/PageHead";
import { AiFillHome } from "react-icons/ai";
import "./faqs.css";
import { faqs } from "../../data";
import Faq from "../../components/Faq";

const Faqs = () => {
  return (
    <section className="faqs">
      <PageHead title="Faq's">
        <h6>
          <a href="/">
            <AiFillHome />
            Home
          </a>{" "}
          / Faq's
        </h6>
      </PageHead>
      <div className="faqs-container">
        {faqs.map(({ id, question, answer }) => {
          return <Faq key={id} question={question} answer={answer} />;
        })}
      </div>
    </section>
  );
};

export default Faqs;
