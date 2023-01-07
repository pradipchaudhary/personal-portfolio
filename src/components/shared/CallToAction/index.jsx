import React from "react";
import "./style.scss";
import Arrow from "../arrow";

const CallToAction = ({ text, action, icon }) => {
  return (
    <div className="call-to-action">
      <span className="text">{text}</span>
      {icon ? <span className="icon">{icon}</span> : <Arrow />}
    </div>
  );
};

export default CallToAction;
