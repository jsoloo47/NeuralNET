import React from "react";
import "./response.css";

const Response = ({ text }) => {
  return (
    <div className="gpt3__header-content__input__response">
      <div className="gpt3__header-content__input__response--text">{text}</div>
    </div>
  );
};
export default Response;
