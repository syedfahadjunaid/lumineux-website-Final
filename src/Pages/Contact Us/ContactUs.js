import React, { useState } from "react";
import "./ContactUs.css";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import BannerNew from "../../Components/Banner Component/BannerNew";

import ContactUsBannerImg from "../../Assets/Contact Us/ContactUsBannerImg.jpeg";
import ContactUsDetailsMapImg from "../../Assets/Contact Us/ContactUsDetailsMapImg.jpeg";
import ContactUsMainBgImg from "../../Assets/Contact Us/ContactUsMainBgImg.png";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const contactUsBackdropStyle = {
    backgroundImage: `url("${ContactUsMainBgImg}")`,
  };

  const companyWhatsAppNumber = process.env.REACT_APP_COMPANY_WHATSAPP_NO;

  const message = process.env.REACT_APP_WHATSAPP_MESSAGE;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    companyWhatsAppNumber
  )}&text=${encodeURIComponent(message)}`;

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
              enquiry_type: data.Enquiry,
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
    <div className="contact-us-section">
      <div className="contact-us-main-section">
        {/* <Banner img={ContactUsBannerImg} heading="Contact Us" /> */}

        <BannerNew image={ContactUsBannerImg} heading="Contact Us" />
        <div
          className="contact-us-main-bg-layer"
          style={contactUsBackdropStyle}
        >
          <div className="contact-us-contact-section">
            <div className="contact-us-form-section">
              <h1>
                Contact <span className="home-colored-text">Us</span>
              </h1>
              <span>All fields are required*</span>
              {/* <form className="contact-us-contact-form">
                <label>First Name</label>
                <input type="text" name="text" />
                <div className="contact-us-contact-form-subgroup">
                  <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="+971 23854 768"
                    />
                  </div>
                </div>
                <h4>Select Subject</h4>
                <div className="contact-us-contact-form-radio-group">
                  <div>
                    <input
                      type="radio"
                      id="subject"
                      value="General Enquiry"
                      name="Enquiry"
                    />
                    <label htmlFor="subject">Dream Home Inquiry</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="subject"
                      value="General Enquiry"
                      name="Enquiry"
                    />
                    <label htmlFor="subject">Investment Inquiry</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="subject"
                      value="General Enquiry"
                      name="Enquiry"
                    />
                    <label htmlFor="subject">General Enquiry</label>
                  </div>
                </div>
                <label htmlFor="message">Message</label>
                <textarea placeholder="Write your message" />
                <button type="submit">Submit</button>
              </form> */}
              {!successMessage && (
                <form
                  className="contact-us-contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <p>This field is required.</p>}
                  </div>

                  <div className="contact-us-contact-form-subgroup">
                    <div>
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && <p>This field is required.</p>}
                    </div>
                    <div className="contact-us-contact-form-phone-div">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        {...register("phone", {
                          required: true,
                          pattern: {
                            value: /^[+]?\d+$/,
                            message: "Invalid phone number",
                          },
                        })}
                      />
                      {errors.phone && <p>{errors.phone.message}</p>}
                    </div>
                  </div>

                  <h4>Select Subject</h4>
                  <div className="contact-us-contact-form-radio-group">
                    <div>
                      <input
                        type="radio"
                        id="subject1"
                        value="Dream Home Inquiry"
                        name="Enquiry"
                        {...register("Enquiry", { required: true })}
                      />
                      <label htmlFor="subject1">Dream Home Enquiry</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="subject2"
                        value="Investment Inquiry"
                        name="Enquiry"
                        {...register("Enquiry", { required: true })}
                      />
                      <label htmlFor="subject2">Investment Enquiry</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="subject3"
                        value="General Enquiry"
                        name="Enquiry"
                        {...register("Enquiry", { required: true })}
                      />
                      <label htmlFor="subject3">General Enquiry</label>
                    </div>
                    {errors.Enquiry && <p>{errors.Enquiry.message}</p>}
                  </div>
                  <div className="contact-us-contact-form-textarea-container">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      {...register("message", { required: true })}
                    />
                    {errors.message && <p>This field is required.</p>}
                  </div>

                  <button type="submit">Submit</button>
                </form>
              )}
              {successMessage &&
                (successMessage == "sending" ? (
                  <div className="home-inquiry-form-response contact-us-form-response">
                    {" "}
                    <div>
                      <h2>Sending your response</h2>
                      <div className="inquiry-form-loader"></div>
                    </div>
                  </div>
                ) : formSuccess ? (
                  <div className="home-inquiry-form-response contact-us-form-response">
                    <div class="checkmark">
                      <div class="checkmark__circle">
                        <div class="checkmark__check">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark__check__circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="black"
                            />
                            <path
                              class="checkmark__check__check"
                              fill="black"
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
                  <div className="home-inquiry-form-response contact-us-form-response">
                    <h2>There was an error in sending your request!</h2>
                    <br></br>
                    <span>{successMessage}</span>
                  </div>
                ))}
            </div>
            <div className="contact-us-other-details-right">
              <span>
                Get in touch with our team for professional insights and
                assistance regarding investments or purchasing a property in
                Dubai.
              </span>
              <img src={ContactUsDetailsMapImg} alt="Contact Us" />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <path
                    d="M10 12C10.6875 12 11.2762 11.7648 11.7663 11.2944C12.2563 10.824 12.5008 10.2592 12.5 9.6C12.5 8.94 12.255 8.3748 11.765 7.9044C11.275 7.434 10.6867 7.1992 10 7.2C9.3125 7.2 8.72375 7.4352 8.23375 7.9056C7.74375 8.376 7.49917 8.9408 7.5 9.6C7.5 10.26 7.745 10.8252 8.235 11.2956C8.725 11.766 9.31333 12.0008 10 12ZM10 24C6.64583 21.26 4.14083 18.7152 2.485 16.3656C0.829167 14.016 0.000833333 11.8408 0 9.84C0 6.84 1.00542 4.45 3.01625 2.67C5.02708 0.89 7.355 0 10 0C12.6458 0 14.9742 0.89 16.985 2.67C18.9958 4.45 20.0008 6.84 20 9.84C20 11.84 19.1717 14.0152 17.515 16.3656C15.8583 18.716 13.3533 21.2608 10 24Z"
                    fill="white"
                  />
                </svg>
                504, Dusseldorf Business Point, Al Barsha 1, Dubai, UAE
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M20.7626 22C17.9029 22 15.2125 21.4592 12.6915 20.3775C10.1706 19.2958 7.97075 17.8152 6.09212 15.9357C4.21349 14.0569 2.72862 11.8569 1.63752 9.3357C0.546415 6.8145 0.00123084 4.11547 0.00196411 1.2386C-0.0163676 0.9086 0.0936225 0.619667 0.331935 0.3718C0.570247 0.123933 0.863554 0 1.21186 0H5.50147C5.83144 0 6.11558 0.123933 6.3539 0.3718C6.59221 0.619667 6.71136 0.9174 6.71136 1.265C6.71136 2.07167 6.76636 2.8325 6.87635 3.5475C6.98634 4.2625 7.16049 4.94083 7.3988 5.5825C7.49046 5.78417 7.50879 5.99023 7.4538 6.2007C7.3988 6.41117 7.28881 6.60843 7.12383 6.7925L4.37407 9.5425C5.16234 11.1558 6.28057 12.6867 7.72877 14.135C9.17698 15.5833 10.7352 16.7383 12.4034 17.6L15.1531 14.85C15.3181 14.685 15.5106 14.575 15.7306 14.52C15.9505 14.465 16.1705 14.4833 16.3905 14.575C17.0688 14.795 17.7701 14.9648 18.4946 15.0843C19.2191 15.2038 19.9659 15.2632 20.7351 15.2625C21.0834 15.2625 21.3815 15.3908 21.6293 15.6475C21.8772 15.9042 22.0007 16.2158 22 16.5825V20.79C22 21.12 21.8808 21.4042 21.6425 21.6425C21.4042 21.8808 21.1109 22 20.7626 22ZM14.4382 18.7C15.2631 19.0117 16.1247 19.2592 17.0229 19.4425C17.9212 19.6258 18.8469 19.745 19.8002 19.8V17.435C19.2319 17.3983 18.6497 17.3342 18.0535 17.2425C17.4574 17.1508 16.8664 17.0133 16.2805 16.83L14.4382 18.7ZM19.8002 11C19.8002 8.54333 18.9478 6.4625 17.2429 4.7575C15.5381 3.0525 13.4574 2.2 11.001 2.2V0C12.5225 0 13.9524 0.288933 15.2906 0.8668C16.6288 1.44467 17.7929 2.22823 18.7828 3.2175C19.7727 4.2075 20.5566 5.37167 21.1344 6.71C21.7122 8.04833 22.0007 9.47833 22 11H19.8002ZM15.4006 11C15.4006 9.79 14.9698 8.75417 14.1082 7.8925C13.2466 7.03083 12.2109 6.6 11.001 6.6V4.4C12.8341 4.4 14.3923 5.04167 15.6756 6.325C16.9588 7.60833 17.6004 9.16667 17.6004 11H15.4006ZM3.30167 7.5075L5.11651 5.665C4.96985 5.13333 4.84593 4.57417 4.74474 3.9875C4.64355 3.40083 4.57499 2.805 4.53906 2.2H2.22926C2.26593 3.08 2.37592 3.96 2.55924 4.84C2.74255 5.72 2.99003 6.60917 3.30167 7.5075Z"
                    fill="white"
                  />
                </svg>
                +971 54 5599915
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                >
                  <path
                    d="M22 2.2C22 0.99 21.01 0 19.8 0H2.2C0.99 0 0 0.99 0 2.2V15.4C0 16.61 0.99 17.6 2.2 17.6H19.8C21.01 17.6 22 16.61 22 15.4V2.2ZM19.8 2.2L11 7.7L2.2 2.2H19.8ZM19.8 15.4H2.2V4.4L11 9.9L19.8 4.4V15.4Z"
                    fill="white"
                  />
                </svg>
                info@lumineux.ae
              </span>
              <div className="contact-us-contact-section-social-media-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  onClick={() => {
                    window.open(whatsappUrl);
                  }}
                >
                  <path
                    d="M13.2521 3.41599C12.6143 2.77177 11.8547 2.26098 11.0174 1.91342C10.1802 1.56586 9.28211 1.38848 8.37559 1.39164C4.57733 1.39164 1.48168 4.48729 1.48168 8.28556C1.48168 9.50295 1.80168 10.6856 2.39994 11.729L1.42603 15.3047L5.0782 14.3447C6.08689 14.8943 7.22081 15.1864 8.37559 15.1864C12.1739 15.1864 15.2695 12.0908 15.2695 8.29251C15.2695 6.44903 14.553 4.71686 13.2521 3.41599ZM8.37559 14.0177C7.34603 14.0177 6.33733 13.7395 5.45385 13.2177L5.24516 13.0925L3.07472 13.6629L3.65211 11.5482L3.51298 11.3325C2.94098 10.4191 2.63725 9.36329 2.63646 8.28556C2.63646 5.12729 5.21037 2.55338 8.36863 2.55338C9.89907 2.55338 11.3391 3.15164 12.4173 4.23686C12.9512 4.76831 13.3743 5.40045 13.6621 6.09663C13.9499 6.79282 14.0967 7.5392 14.0939 8.29251C14.1078 11.4508 11.5339 14.0177 8.37559 14.0177ZM11.5199 9.73251C11.346 9.64903 10.4973 9.23164 10.3443 9.16903C10.1843 9.11338 10.073 9.08556 9.95472 9.25251C9.83646 9.42643 9.5095 9.81599 9.41211 9.9273C9.31472 10.0456 9.21037 10.0595 9.03646 9.96903C8.86255 9.88556 8.30603 9.69773 7.65211 9.11338C7.13733 8.65425 6.79646 8.09077 6.69211 7.91686C6.59472 7.74295 6.6782 7.65251 6.76863 7.56208C6.84516 7.48556 6.94255 7.36034 7.02603 7.26295C7.1095 7.16556 7.14429 7.08903 7.19994 6.97773C7.25559 6.85947 7.22776 6.76208 7.18603 6.6786C7.14429 6.59512 6.79646 5.74643 6.65733 5.3986C6.5182 5.06469 6.37211 5.10643 6.26776 5.09947H5.93385C5.81559 5.09947 5.63472 5.14121 5.47472 5.31512C5.32168 5.48903 4.87646 5.90643 4.87646 6.75512C4.87646 7.60382 5.49559 8.42469 5.57907 8.53599C5.66255 8.65425 6.79646 10.3934 8.52168 11.1377C8.93211 11.3186 9.25211 11.4229 9.50255 11.4995C9.91298 11.6316 10.2886 11.6108 10.5878 11.569C10.9217 11.5203 11.6104 11.1516 11.7495 10.7482C11.8956 10.3447 11.8956 10.0038 11.8469 9.9273C11.7982 9.85077 11.6939 9.81599 11.5199 9.73251Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/lumineuxproperties/"
                    );
                  }}
                >
                  <path
                    d="M12.0627 3.79856C11.8976 3.79856 11.7362 3.84752 11.5989 3.93924C11.4616 4.03097 11.3546 4.16135 11.2914 4.31388C11.2282 4.46642 11.2117 4.63427 11.2439 4.7962C11.2761 4.95813 11.3556 5.10687 11.4724 5.22362C11.5891 5.34037 11.7379 5.41987 11.8998 5.45208C12.0617 5.48429 12.2296 5.46776 12.3821 5.40458C12.5347 5.3414 12.665 5.2344 12.7568 5.09712C12.8485 4.95984 12.8974 4.79844 12.8974 4.63334C12.8974 4.41194 12.8095 4.19961 12.6529 4.04306C12.4964 3.88651 12.2841 3.79856 12.0627 3.79856ZM15.2627 5.48204C15.2491 4.90485 15.141 4.33379 14.9427 3.7916C14.7658 3.32769 14.4905 2.90762 14.1357 2.5603C13.7912 2.20372 13.3702 1.93016 12.9044 1.7603C12.3636 1.55589 11.7919 1.44531 11.214 1.43334C10.4766 1.3916 10.2401 1.3916 8.34788 1.3916C6.4557 1.3916 6.21918 1.3916 5.48179 1.43334C4.90381 1.44531 4.33212 1.55589 3.79136 1.7603C3.32644 1.93188 2.90575 2.20521 2.56005 2.5603C2.20348 2.90477 1.92991 3.32582 1.76005 3.7916C1.55564 4.33236 1.44507 4.90406 1.4331 5.48204C1.39136 6.21943 1.39136 6.45595 1.39136 8.34812C1.39136 10.2403 1.39136 10.4768 1.4331 11.2142C1.44507 11.7922 1.55564 12.3639 1.76005 12.9046C1.92991 13.3704 2.20348 13.7915 2.56005 14.1359C2.90575 14.491 3.32644 14.7644 3.79136 14.9359C4.33212 15.1404 4.90381 15.2509 5.48179 15.2629C6.21918 15.3046 6.4557 15.3046 8.34788 15.3046C10.2401 15.3046 10.4766 15.3046 11.214 15.2629C11.7919 15.2509 12.3636 15.1404 12.9044 14.9359C13.3702 14.7661 13.7912 14.4925 14.1357 14.1359C14.492 13.7899 14.7676 13.3695 14.9427 12.9046C15.141 12.3625 15.2491 11.7914 15.2627 11.2142C15.2627 10.4768 15.3044 10.2403 15.3044 8.34812C15.3044 6.45595 15.3044 6.21943 15.2627 5.48204ZM14.0105 11.1307C14.0054 11.5723 13.9254 12.0098 13.774 12.4246C13.6629 12.7274 13.4845 13.0009 13.2522 13.2246C13.0266 13.4546 12.7536 13.6326 12.4522 13.7464C12.0374 13.8979 11.5999 13.9778 11.1583 13.9829C10.4627 14.0177 10.2053 14.0246 8.3757 14.0246C6.54614 14.0246 6.28875 14.0246 5.5931 13.9829C5.13459 13.9915 4.67803 13.9209 4.24353 13.7742C3.95538 13.6546 3.69491 13.477 3.47831 13.2525C3.24742 13.029 3.07125 12.7552 2.96353 12.4525C2.79369 12.0317 2.69949 11.5843 2.68527 11.1307C2.68527 10.4351 2.64353 10.1777 2.64353 8.34812C2.64353 6.51856 2.64353 6.26117 2.68527 5.56551C2.68839 5.11407 2.7708 4.66669 2.92875 4.24378C3.05122 3.95015 3.23919 3.68841 3.47831 3.47856C3.68966 3.23937 3.95086 3.04941 4.24353 2.92204C4.66757 2.76902 5.11449 2.68905 5.56527 2.68551C6.26092 2.68551 6.51831 2.64378 8.34788 2.64378C10.1774 2.64378 10.4348 2.64378 11.1305 2.68551C11.5721 2.69058 12.0096 2.77056 12.4244 2.92204C12.7405 3.03936 13.0243 3.2301 13.2522 3.47856C13.4802 3.69225 13.6583 3.9535 13.774 4.24378C13.9286 4.66738 14.0086 5.11458 14.0105 5.56551C14.0453 6.26117 14.0522 6.51856 14.0522 8.34812C14.0522 10.1777 14.0453 10.4351 14.0105 11.1307ZM8.34788 4.77943C7.64236 4.7808 6.95307 4.99127 6.36712 5.38424C5.78116 5.77721 5.32484 6.33504 5.0558 6.98726C4.78676 7.63947 4.71708 8.3568 4.85556 9.0486C4.99405 9.7404 5.33448 10.3756 5.83384 10.874C6.33321 11.3724 6.9691 11.7116 7.66117 11.8487C8.35324 11.9859 9.07043 11.9148 9.72212 11.6445C10.3738 11.3742 10.9307 10.9168 11.3226 10.3301C11.7144 9.74334 11.9235 9.05365 11.9235 8.34812C11.9245 7.87863 11.8325 7.41359 11.6531 6.97974C11.4736 6.5459 11.2102 6.15182 10.8779 5.82016C10.5456 5.4885 10.151 5.22581 9.71678 5.0472C9.28259 4.8686 8.81737 4.77759 8.34788 4.77943ZM8.34788 10.6646C7.88971 10.6646 7.44184 10.5288 7.06089 10.2742C6.67994 10.0197 6.38302 9.65791 6.20769 9.23462C6.03236 8.81133 5.98649 8.34555 6.07587 7.89619C6.16525 7.44683 6.38588 7.03407 6.70985 6.71009C7.03382 6.38612 7.44659 6.1655 7.89595 6.07611C8.34531 5.98673 8.81108 6.0326 9.23437 6.20794C9.65766 6.38327 10.0195 6.68018 10.274 7.06113C10.5285 7.44208 10.6644 7.88996 10.6644 8.34812C10.6644 8.65233 10.6045 8.95356 10.4881 9.23462C10.3716 9.51567 10.201 9.77104 9.98591 9.98615C9.7708 10.2013 9.51543 10.3719 9.23437 10.4883C8.95332 10.6047 8.65209 10.6646 8.34788 10.6646Z"
                    fill="white"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  onClick={() => {
                    window.open("https://www.facebook.com/lumineuxproperties/");
                  }}
                >
                  <path
                    d="M15.3044 8.34812C15.3044 4.50812 12.1879 1.3916 8.34788 1.3916C4.50788 1.3916 1.39136 4.50812 1.39136 8.34812C1.39136 11.7151 3.7844 14.5186 6.95657 15.1655V10.4351H5.56527V8.34812H6.95657V6.60899C6.95657 5.26638 8.04875 4.17421 9.39136 4.17421H11.1305V6.26117H9.73918C9.35657 6.26117 9.04353 6.57421 9.04353 6.95682V8.34812H11.1305V10.4351H9.04353V15.2699C12.5566 14.922 15.3044 11.9586 15.3044 8.34812Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/lumineux-properties"
                    );
                  }}
                >
                  <path
                    d="M14.7278 0.000111863H1.17598C1.02365 -0.0020038 0.872389 0.0259095 0.730842 0.0822577C0.589296 0.138606 0.460236 0.222285 0.351033 0.328517C0.24183 0.434748 0.154623 0.561451 0.0943922 0.70139C0.0341614 0.841328 0.00208669 0.99176 0 1.1441V14.8559C0.00208669 15.0082 0.0341614 15.1587 0.0943922 15.2986C0.154623 15.4385 0.24183 15.5653 0.351033 15.6715C0.460236 15.7777 0.589296 15.8614 0.730842 15.9177C0.872389 15.9741 1.02365 16.002 1.17598 15.9999H14.7278C14.8801 16.002 15.0314 15.9741 15.1729 15.9177C15.3145 15.8614 15.4435 15.7777 15.5527 15.6715C15.6619 15.5653 15.7492 15.4385 15.8094 15.2986C15.8696 15.1587 15.9017 15.0082 15.9038 14.8559V1.1441C15.9017 0.99176 15.8696 0.841328 15.8094 0.70139C15.7492 0.561451 15.6619 0.434748 15.5527 0.328517C15.4435 0.222285 15.3145 0.138606 15.1729 0.0822577C15.0314 0.0259095 14.8801 -0.0020038 14.7278 0.000111863ZM4.82393 13.3919H2.42397V6.19203H4.82393V13.3919ZM3.62395 5.18404C3.29296 5.18404 2.97553 5.05256 2.74149 4.81851C2.50745 4.58447 2.37597 4.26704 2.37597 3.93606C2.37597 3.60507 2.50745 3.28764 2.74149 3.0536C2.97553 2.81956 3.29296 2.68807 3.62395 2.68807C3.7997 2.66814 3.97769 2.68556 4.14624 2.73918C4.3148 2.7928 4.47013 2.88142 4.60206 2.99924C4.73399 3.11706 4.83955 3.26141 4.91183 3.42285C4.9841 3.58429 5.02146 3.75918 5.02146 3.93606C5.02146 4.11294 4.9841 4.28782 4.91183 4.44926C4.83955 4.6107 4.73399 4.75506 4.60206 4.87287C4.47013 4.99069 4.3148 5.07931 4.14624 5.13293C3.97769 5.18656 3.7997 5.20397 3.62395 5.18404ZM13.4798 13.3919H11.0798V9.52798C11.0798 8.55999 10.7358 7.928 9.86386 7.928C9.594 7.92998 9.33122 8.01462 9.11094 8.17054C8.89066 8.32645 8.72347 8.54613 8.63188 8.79999C8.56928 8.98802 8.54215 9.18604 8.55188 9.38398V13.3839H6.15191V6.18402H8.55188V7.20001C8.7699 6.8217 9.087 6.51004 9.46902 6.29859C9.85104 6.08713 10.2835 5.98391 10.7198 6.00003C12.3198 6.00003 13.4798 7.03201 13.4798 9.24798V13.3919Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
