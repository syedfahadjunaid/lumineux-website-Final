import React from "react";
import "./BannerNew.css";
// import bannerImage from "../../Assets/Blog/bannerImage.jpg";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

export default function BannerNew({ image, heading, blogId }) {
  return (
    <div
      className="bannerNew-component"
      style={{ position: "relative", height: "100%", width: "100%" }}
    >
      <img
        src={image}
        alt="bannerNewImage"
        className="bannerNew-component-image"
      />
      <div className="" style={{ width: "100%", height: "100%" }}>
        <div
          className="bannerNewHeading"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            top: "0",
            position: "absolute",
          }}
        >
          <h1 className="" style={{ fontSize: "40px" }}>
            {heading}
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "#EFEFEF" }} to="/">
              Home
            </Link>

            <IoIosArrowForward />
            {blogId != null ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Link
                  to="/blog"
                  style={{ textDecoration: "none", color: "#EFEFEF" }}
                >
                  <p>Blog</p>
                </Link>
                <IoIosArrowForward />
                <p>{heading}</p>
              </div>
            ) : (
              <p>{heading}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
