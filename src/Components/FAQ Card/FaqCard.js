import React from "react";
import "./FaqCard.css";

import { useState } from "react";

function FaqCard({ faqQuestion, faqAnswer }) {
  const [faqCardOpen, setFaqCardOpen] = useState(false);

  function handleFaqCardOpen() {
    setFaqCardOpen(!faqCardOpen);
  }

  return (
    <div className="faq-card-main-section">
      <div className="faq-card-heading-question" onClick={handleFaqCardOpen}>
        <h3>{faqQuestion}</h3>
        <div className="faq-card-button">
          {faqCardOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_281_3623)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.293 8.293C11.4805 8.10548 11.7348 8.00015 12 8.00015C12.2652 8.00015 12.5195 8.10548 12.707 8.293L18.364 13.95C18.4595 14.0422 18.5357 14.1526 18.5881 14.2746C18.6405 14.3966 18.6681 14.5278 18.6692 14.6606C18.6703 14.7934 18.645 14.9251 18.5947 15.048C18.5444 15.1709 18.4701 15.2826 18.3762 15.3765C18.2823 15.4704 18.1706 15.5447 18.0478 15.594C17.9249 15.6432 17.8122 15.6675 17.6794 15.6664C17.5466 15.6653 17.4154 15.6387 17.2934 15.5863C17.1714 15.5339 17.061 15.4577 16.9655 15.3622L12 10.4141L7.03599 15.3622C6.84059 15.5517 6.58795 15.653 6.32581 15.6541C6.06368 15.6552 5.81288 15.5553 5.62746 15.3699C5.44204 15.1845 5.34174 14.9318 5.34062 14.6696C5.3395 14.4074 5.43941 14.1566 5.62484 13.9711L11.293 8.293Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_281_3623">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_281_3623)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7069 15.7073C12.5193 15.8948 12.265 16.0001 11.9999 16.0001C11.7347 16.0001 11.4804 15.8948 11.2929 15.7073L5.63585 10.0503C5.54034 9.9581 5.46416 9.84775 5.41175 9.72575C5.35934 9.60374 5.33176 9.47252 5.3306 9.33974C5.32945 9.20696 5.35475 9.07529 5.40503 8.95239C5.45531 8.82949 5.52957 8.71784 5.62346 8.62395C5.71735 8.53006 5.829 8.4558 5.9519 8.40552C6.0748 8.35524 6.20648 8.32994 6.33926 8.33109C6.47204 8.33225 6.60325 8.35983 6.72526 8.41224C6.84726 8.46465 6.95761 8.54083 7.04985 8.63634L11.9999 13.5863L16.9499 8.63634C17.1385 8.45418 17.3911 8.35339 17.6533 8.35567C17.9155 8.35795 18.1663 8.46312 18.3517 8.64852C18.5371 8.83393 18.6423 9.08474 18.6445 9.34694C18.6468 9.60914 18.546 9.86174 18.3639 10.0503L12.7069 15.7073Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_281_3623">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
      </div>
      <div
        className={`faq-card-answer ${
          faqCardOpen ? "faqCardOpen" : "faqCardClose"
        }`}
      >
        {faqCardOpen && <p>{faqAnswer}</p>}
      </div>
    </div>
  );
}

export default FaqCard;
