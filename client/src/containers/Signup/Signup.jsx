import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:2121/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Signup;
