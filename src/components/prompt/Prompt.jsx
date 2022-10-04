import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Response from "../response/Response";
import "./prompt.css";

/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
function Prompt() {
  const [prompt, setPrompt] = useState({ text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const configuration = new Configuration({
      // Set up API Key in config for actual project
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    for (let i = 0; i < 3; i++) {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${prompt.text}`,
        max_tokens: 15,
      });
      // This is how you access the response from the API
      console.log(response.data.choices[0].text);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="text"
        name="prompt"
        placeholder="Enter a prompt"
        value={prompt.text}
        onChange={(e) => setPrompt({ ...prompt, text: e.target.value })}
      />
      <button type="submit">Magic Stuff</button>
      <Response resArr="test" />
    </form>
  );
}
export default Prompt;
