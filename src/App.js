import React from "react";
import "./app.scss";
// Import Component
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Blogs from "./components/blogs";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
