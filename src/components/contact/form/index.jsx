import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

// Import StyleSheet
import "./style.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit the form
  const onSubmit = (data) => {
    send("service_bmd80zs", "template_4pmtpia", data, "lXY3mBanoJWwMGH1g")
      .then((response) => {
        console.log("Success!", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("Failed!", err.message);
      });
  };

  // success form
  const formSuccess = () => {
    toast("Thanks for submitting your query!");
    document.getElementById("queryForm").reset();
  };
  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryForm" onSubmit={onSubmit}>
        <div className="input-field">
          <input type="text" name="form_name" placeholder="Name" />
        </div>
        <div className="imput-field">
          <input type="text" name="reply_to" placeholder="Email" />
        </div>
        <div className="input-field">
          <input type="text" name="phone_number" placeholder="Phone" />
        </div>
        <div className="imput-field">
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="input-field">
          <textarea
            className="textarea"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default Form;
