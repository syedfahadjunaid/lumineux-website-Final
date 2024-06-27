import React, { useState, useEffect } from "react";
import "./Properties.css";

import Pagination from "@mui/material/Pagination";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import PropertiesBannerBgImg from "../../Assets/Properties/PropertiesBannerBgImg.jpeg";
import PropertiesPageMainBgImg from "../../Assets/Properties/PropertiesPageMainBgImg.png";
import PropertiesPageMainBgImg2 from "../../Assets/Properties/PropertiesPageMainBgImg2.png";

import BannerNew from "../../Components/Banner Component/BannerNew";
import PropertyCard from "../../Components/Property Card/PropertyCard";

import productData from "../../Data/Product Data/ProductData";

function Properties({ isSmallScreen }) {
  const propertiesMainBgStyle = {
    backgroundImage: `url("${PropertiesPageMainBgImg}")`,
  };

  const [page, setPage] = useState(1);
  const [resultsStyle, setResultsStyle] = useState(false);
  const [isCardListView, setIsCardListView] = useState(!isSmallScreen);

  const itemsPerPage = 9;

  const totalItems = productData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = productData.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setResultsStyle(true);
    setTimeout(() => {
      setResultsStyle(false);
      setPage(value);
    }, 500);
  };

  const handleCardListViewToggle = (value) => {
    setIsCardListView(value);
    setResultsStyle(true);
    setPage(null);

    setTimeout(() => {
      setResultsStyle(false);
      setPage(1);
    }, 500);
  };

  // Changing List View state for smaller screens
  function updateListViewState() {
    const isSmallScreen = window.innerWidth < 1200;
    setIsCardListView(!isSmallScreen);

    // console.log("is smaller screen", isSmallScreen);
    // console.log("isCardListView", isCardListView);
  }

  useEffect(() => {
    window.addEventListener("resize", updateListViewState);
    return () => {
      window.removeEventListener("resize", updateListViewState);
    };
  }, []);

  const renderedProductCards = currentItems.map((data, index) => (
    <PropertyCard
      image={data.image}
      name={data.name}
      price={data.price}
      profit={data.profit}
      pYield={data.pYield}
      payOffPeriod={data.payOffPeriod}
      installment={data.installment}
      isCardListView={isCardListView}
    />
  ));

  return (
    <div className="properties-section">
      <div className="properties-main-section">
        <BannerNew image={PropertiesBannerBgImg} heading="Properties" />
        <div className="properties-results-heading property-heading-top-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            onClick={() => handleCardListViewToggle(true)}
          >
            <rect
              width="48"
              height="48"
              rx="2"
              fill={isCardListView ? "url(#paint0_linear_288_3848)" : "white"}
            />
            <rect x="9" y="16" width="31" height="4" rx="1" fill="#3D3D3D" />
            <rect x="9" y="22" width="31" height="4" rx="1" fill="#3D3D3D" />
            <rect x="9" y="28" width="31" height="4" rx="1" fill="#3D3D3D" />

            {isCardListView ? (
              <defs>
                <linearGradient
                  id="paint0_linear_288_3848"
                  x1="-4.80312e-07"
                  y1="-30.7097"
                  x2="120.478"
                  y2="2.63784"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00520833" stop-color="#BE9118" />
                  <stop offset="0.03125" stop-color="#EFD84E" />
                  <stop offset="0.0989583" stop-color="#BE9218" />
                  <stop offset="0.197917" stop-color="#F4DE53" />
                  <stop offset="0.307292" stop-color="#D4B030" />
                  <stop offset="0.375" stop-color="#DFC03C" />
                  <stop offset="0.463542" stop-color="#C0941A" />
                  <stop offset="0.463642" stop-color="#C49A1E" />
                  <stop offset="0.5625" stop-color="#B48F25" />
                  <stop offset="0.671875" stop-color="#C89F23" />
                  <stop offset="0.8125" stop-color="#AE9449" />
                  <stop offset="1" stop-color="#BF9319" />
                </linearGradient>
              </defs>
            ) : null}
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            onClick={() => handleCardListViewToggle(false)}
          >
            <rect
              width="48"
              height="48"
              rx="2"
              fill={!isCardListView ? "url(#paint0_linear_288_3848)" : "white"}
            />
            <rect
              x="13.7046"
              y="14.5537"
              width="9.77273"
              height="9.77273"
              stroke="#3D3D3D"
              stroke-width="0.5"
            />
            <rect
              x="23.9773"
              y="14.5537"
              width="9.77273"
              height="9.77273"
              stroke="#3D3D3D"
              stroke-width="0.5"
            />
            <rect
              x="23.9773"
              y="24.1289"
              width="9.77273"
              height="9.77273"
              stroke="#3D3D3D"
              stroke-width="0.5"
            />
            <rect
              x="13.7046"
              y="24.1289"
              width="9.77273"
              height="9.77273"
              stroke="#3D3D3D"
              stroke-width="0.5"
            />

            {!isCardListView ? (
              <defs>
                <linearGradient
                  id="paint0_linear_288_3848"
                  x1="-4.80312e-07"
                  y1="-30.7097"
                  x2="120.478"
                  y2="2.63784"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00520833" stop-color="#BE9118" />
                  <stop offset="0.03125" stop-color="#EFD84E" />
                  <stop offset="0.0989583" stop-color="#BE9218" />
                  <stop offset="0.197917" stop-color="#F4DE53" />
                  <stop offset="0.307292" stop-color="#D4B030" />
                  <stop offset="0.375" stop-color="#DFC03C" />
                  <stop offset="0.463542" stop-color="#C0941A" />
                  <stop offset="0.463642" stop-color="#C49A1E" />
                  <stop offset="0.5625" stop-color="#B48F25" />
                  <stop offset="0.671875" stop-color="#C89F23" />
                  <stop offset="0.8125" stop-color="#AE9449" />
                  <stop offset="1" stop-color="#BF9319" />
                </linearGradient>
              </defs>
            ) : null}
          </svg>
        </div>
      </div>
      <div className="properties-main-bg-layer" style={propertiesMainBgStyle}>
        <div className="properties-main-section-2">
          <div
            className={`property-results-section ${
              resultsStyle ? "styledResult" : ""
            }`}
          >
            {renderedProductCards}
          </div>
        </div>
        <div className="properties-results-heading">
          {" "}
          <h4>
            Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
            {totalItems} results
          </h4>
          <Pagination
            color={"standard"}
            count={totalPages}
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Properties;
