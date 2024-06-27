import React, { useState } from "react";
import "./PropertyCard.css";

import PropertyImage1 from "../../Assets/Properties Showcase/PropertyCardImg1.jpeg";
import PropertyAgentImg from "../../Assets/Properties Showcase/PropertyAgentImg.jpeg";

import BookInterestModal from "../Book Interest Modal/BookInterestModal";

function PropertyCard({
  image,
  name,
  price,
  profit,
  pYield,
  payOffPeriod,
  installment,
  isCardListView,
}) {
  const [bookInterestModalOpen, setBookInterestModalOpen] = useState(false);

  const handleBookInterestModalOpen = () => {
    setBookInterestModalOpen(true);
  };

  const handleBookInterestModalClose = () => {
    setBookInterestModalOpen(false);
  };

  const handleWhatsAppButtonClick = () => {
    const companyWhatsAppNumber = process.env.REACT_APP_COMPANY_WHATSAPP_NO;

    const message = process.env.REACT_APP_WHATSAPP_MESSAGE;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      companyWhatsAppNumber
    )}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className={`property-card-section ${isCardListView ? "list-view" : ""}`}
    >
      <span>FEATURED</span>
      <div className="property-card-top-section">
        <div className="property-card-top-left-section">
          <div className="card-image-container">
            <img src={image} alt="Property" />
            <div className="card-sales-tag">Sales</div>
          </div>
          <div className="property-card-main-section">
            <div className="card-details-section">
              <h3>{name}</h3>

              <div className="card-details-subgroup">
                <div className="card-property-detail">
                  {/* <span>
                    <b> Profit: </b>
                    {profit}
                  </span> */}
                </div>
                <div className="card-property-detail">
                  <span>
                    <b> Yield:</b> {pYield}
                  </span>
                </div>
                <div className="card-property-detail">
                  <span>
                    <b>Pay-Off-Period:</b> {payOffPeriod}
                  </span>
                </div>
                <div className="card-property-detail">
                  <span>
                    <b>Installment:</b> {installment}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="property-card-contact-section">
          <h3>{price}</h3>
          <div className="property-card-contact-buttons-section">
            <button
              onClick={handleBookInterestModalOpen}
              className="property-card-book-interest-button"
            >
              Booking Interest
            </button>
            <button onClick={handleWhatsAppButtonClick}>
              Learn more via Whatsapp
            </button>
          </div>
        </div>
      </div>
      <BookInterestModal
        open={bookInterestModalOpen}
        onClose={handleBookInterestModalClose}
        setBookInterestModalOpen={setBookInterestModalOpen}
      />
    </div>
  );
}

export default PropertyCard;
