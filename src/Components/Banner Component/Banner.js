import React from "react";
import "./Banner.css";

import BreadCrumbs from "../Bread Crumbs/BreadCrumbs";

function Banner({ img, heading }) {
  const bannerStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className="Banner-main-section" style={bannerStyle}>
      <h1>{heading}</h1>
      <BreadCrumbs />
    </div>
  );
}

export default Banner;
