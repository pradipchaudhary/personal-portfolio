import React from "react";
import "./style.scss";

const Section = ({ children, id, className, title, background }) => {
  return (
    <div
      id={id || ""}
      className={`section ${className ? className : ""} background: ${
        background === "dark" ? "dark" : "light"
      }`}
    >
      <div className="content">
        {title && (
          <div>
            <div className="section-title">
              <h2>{title}</h2>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Section;
