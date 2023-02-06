import React from "react";

const SectionHead = ({header, title, className }) => {
  return (
    <div className={`section__head ${className}`}>
      <h5>{title}</h5>
      <h2>{header}</h2>
    </div>
  );
};

export default SectionHead;
