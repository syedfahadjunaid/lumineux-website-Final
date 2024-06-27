import React from "react";
import "./BreadCrumbs.css";

import { NavLink, useLocation } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation();
  const currentPath = location.pathname;

  const formattedPathname = currentPath
    .split("/")
    .filter((word) => word !== "")
    .map(
      (segment) =>
        segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
    )
    .join(" / ");

  return (
    <div className="breadcrumbs-main-section">
      <h4 className="breadcrumbs-home">
        <NavLink to="/"> Home</NavLink>
      </h4>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M8.0876 5L6.9126 6.175L10.7293 10L6.9126 13.825L8.0876 15L13.0876 10L8.0876 5Z"
          fill="black"
          fill-opacity="0.56"
        />
      </svg>

      <h4 className="breadcrumbs-current-path">{formattedPathname}</h4>
    </div>
  );
}

export default BreadCrumbs;
