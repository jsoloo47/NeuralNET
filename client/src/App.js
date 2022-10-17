import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import { Login, Signup } from "./containers";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </div>
);

export default App;
