import React, { useState } from "react";
import "./HomeInquiryForm.css";

import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

function HomeInquiryForm() {
  //emailjs data
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID_HOME;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formSuccess, setFormSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = (data) => {
    // console.log("handle submit invoked");
    // console.log("form data-", data);

    setSuccessMessage("sending");
    setTimeout(() => {
      try {
        emailjs
          .send(
            serviceId,
            templateId,
            {
              from_name: data.name,
              message: data.message,
              from_contact: data.phone,
              from_email: data.email,
              enquiry_type: "",
            },
            publicKey
          )
          .then(
            function (response) {
              setFormSuccess(true);
              setSuccessMessage("Completed");
            },
            function (error) {
              //   console.log("FAILED...", error);
              setFormSuccess(false);
              setSuccessMessage("Please try again later.");
            }
          );
      } catch (error) {
        // console.log("FAILED...", error);
        setFormSuccess(false);
        setSuccessMessage("Please try again later.");
      }
    }, 1000);
  };

  return (
    <div className="home-banner-right-form">
      {!successMessage && (
        <>
          <div>
            <h3>FOR INQUIRY CONTACT US</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^\+?[0-9]*$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div>
              <textarea
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">SEND NOW</button>
          </form>
        </>
      )}
      {successMessage &&
        (successMessage == "sending" ? (
          <div className="home-inquiry-form-response">
            {" "}
            <div>
              <h2>Sending your response</h2>
              <div className="inquiry-form-loader"></div>
            </div>
          </div>
        ) : formSuccess ? (
          <div className="home-inquiry-form-response">
            <div class="checkmark">
              <div class="checkmark__circle">
                <div class="checkmark__check">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle
                      class="checkmark__check__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      class="checkmark__check__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h2>
              Your request has been successfully received! <br />
              <br /> We will contact you shortly.
            </h2>
          </div>
        ) : (
          <div className="home-inquiry-form-response">
            <h2>There was an error in sending your request!</h2>
            <br></br>
            <span>{successMessage}</span>
          </div>
        ))}
    </div>
  );
}

export default HomeInquiryForm;
