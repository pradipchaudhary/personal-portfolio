import React from "react";
import "./app.scss";
// Import Component
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Blogs from "./components/blogs";

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Portfolio />
      <Blogs />
    </div>
  );
}

export default App;
