import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, tost } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

// Import StyleSheet
import "./style.scss";

const Form = () => {
  const onSubmit = () => {};
  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryForm" onSubmit={onSubmit}></form>
    </div>
  );
};

export default Form;
