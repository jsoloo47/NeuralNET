import React from "react";
import Typewriter from "../typewriter/Typewriter";
import "./greeting.css";

const Greeting = () => {
  const text = [
    "Create a tag line for an ice cream shop.",
    "Write a Love Letter written in BASIC.",
    "Generate futuristic ideas for startups, apps, or marketplaces:",
  ];
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
