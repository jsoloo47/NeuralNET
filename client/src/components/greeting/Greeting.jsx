import React from "react";
import Typewriter from "../typewriter/Typewriter";
import "./greeting.css";

const Greeting = () => {
  const text = "Create a tag line for an ice cream shop.";
  return (
    <>
      <h1 className="gradient__text">
        SentenceSmith: Create amazing content with the power of AI!
      </h1>
      <Typewriter text={text} />
    </>
  );
};

export default Greeting;
