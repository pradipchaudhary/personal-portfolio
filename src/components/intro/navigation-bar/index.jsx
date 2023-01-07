import React from "react";
import "./style.scss";
import logo from "../../../images/logo.png";

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="Js Dev" />
      </div>
      <div className="navigation">
        <span className="navigation-item">Skills</span>
        <span className="navigation-item">Portfolio</span>
        <span className="navigation-item">Blogs & Articles </span>
      </div>
    </div>
  );
};

export default Navigation;
