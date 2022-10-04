import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Greeting from "../../components/greeting/Greeting";
import Response from "../../components/response/Response";

import possibilityImage from "../../assets/header.svg";
import "./header.css";
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */

const Header = () => {
  const [prompt, setPrompt] = useState({ text: "" });
  const [responses, setResonses] = useState("");

  // useEffect(() => {
  //   requestResponse();
  // }, []);

  async function requestResponse() {
    const configuration = new Configuration({
      // Set up API Key in config for actual project
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `${prompt.text}`,
      max_tokens: 15,
    });
    // This is how you access the response from the API
    setResonses(response.data.choices[0].text);
  }
  return (
    <div className="gpt3__header gpt3__header-padding" id="home">
      <div className="gpt3__header-content">
        <Greeting />
        <div className="gpt3__header-content__input">
          <form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              requestResponse();
            }}
          >
            <input
              type="text"
              name="prompt"
              placeholder="Enter a prompt"
              value={prompt.text}
              onChange={(e) => setPrompt({ ...prompt, text: e.target.value })}
            />
            <button type="submit">Magic Stuff</button>
          </form>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={possibilityImage} />
        <Response text={responses} />
      </div>
    </div>
  );
};

export default Header;
