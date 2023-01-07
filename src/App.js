import React from "react";
import "./app.scss";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
