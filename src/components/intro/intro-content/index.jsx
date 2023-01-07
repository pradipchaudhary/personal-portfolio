import React from "react";
import "./style.scss";
import CallToAction from "../../shared/CallToAction";
import girl from "../../../images/girl.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello ✋, I am </span>
            </span>
            <span className="big-text">Pradip Chaudhary</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            placeat fugit ratione reprehenderit minus cum dicta id vero quos?
            Cumque nemo cupiditate omnis voluptas alias!
          </p>
          <CallToAction text="Contact me" />
        </div>
        <div className="right-col">
          <img src={girl} alt="Girlimage" />
          <div className="hightlight horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Best Design Award</div>
          </div>
          <div className="hightlight horizontal">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4K+</span>
              Happy Customer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;