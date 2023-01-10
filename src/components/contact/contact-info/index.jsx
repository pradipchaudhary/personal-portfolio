import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>Contact Info</h4>
      <p>
        I would be happy to answer any questions you may have about freelance
        writing or content marketing!
      </p>
      <div className="contact-option">
        <FaPhoneAlt />
        <span className="text">+977 9824367788</span>
      </div>
      <div className="contact-option">
        <MdEmail />
        <span className="text">chaudharypradip678@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
