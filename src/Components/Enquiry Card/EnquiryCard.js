// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import "./EnquiryCard.css";

// function EnquiryCard() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // Perform login logic here
//   };

//   return (
//     <div className="enquiry-card">
//       <div className="enquiry-card-text-section">
//         <h3>Schedule a Tour</h3>
//         <span>
//           Your email address will not be published. Required fields are marked *
//         </span>
//       </div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="text" placeholder="Your Name" />
//         <input type="email" placeholder="Your Email" />
//         <input type="phone" placeholder="Your Mobile Number" />
//         <textarea type="text" placeholder="Message" />
//       </form>
//       <button type="submit">Make Enquiry</button>
//     </div>
//   );
// }

// export default EnquiryCard;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./EnquiryCard.css";

import emailjs from "@emailjs/browser";

function EnquiryCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID_HOME;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  //   console.log(serviceId, templateId, publicKey);

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
    <div className="enquiry-card">
      <div className="enquiry-card-text-section">
        <h3>Schedule a Tour</h3>
        <span>
          Your email address will not be published. Required fields are marked *
        </span>
      </div>
      {!successMessage && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Your Name*"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email*"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            ></input>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Your Mobile Number*"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^(?:\+\d{1,3})?(?:\s|-)?\d{10,}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
          <div>
            <textarea
              placeholder="Message*"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <button type="submit">Make Enquiry</button>
        </form>
      )}
      {successMessage &&
        (successMessage == "sending" ? (
          <div className="home-inquiry-form-response enquiry-card-form-response">
            {" "}
            <div>
              <h2>Sending your response</h2>
              <div className="inquiry-form-loader"></div>
            </div>
          </div>
        ) : formSuccess ? (
          <div className="home-inquiry-form-response enquiry-card-form-response">
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
          <div className="home-inquiry-form-response enquiry-card-form-response">
            <h2>There was an error in sending your request!</h2>
            <br></br>
            <span>{successMessage}</span>
          </div>
        ))}
    </div>
  );
}

export default EnquiryCard;
