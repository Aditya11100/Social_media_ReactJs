import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  );
}

export default App;
