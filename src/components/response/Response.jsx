import React from "react";
import "./response.css";

const Response = ({ text, isActive }) => {
  return (
    <div
      className="gpt3__header-content__input__response"
      style={{
        transform: isActive ? "scale(1)" : "scale(0)",
      }}
    >
      <div className="gpt3__header-content__input__response__text">{text}</div>
    </div>
  );
};
export default Response;
