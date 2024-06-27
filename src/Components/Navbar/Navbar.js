import React from "react";
import "./Navbar.css";

import LogoPrimary from "../../Assets/Navbar/Lumineux-Logo-Primary.png";
import LogoSecondary from "../../Assets/Navbar/Lumineux-Logo-Secondary.png";

import NavbarLogoLum from "../../Assets/Navbar/NavbarLogoLum.png";

import { useState, useEffect } from "react";

import { NavLink, useLocation } from "react-router-dom";

import { ImCross } from "react-icons/im";

function Navbar() {
  const [transparenncy, setTransparency] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [isContactUs, setIsContactUs] = useState(false);

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const handleNavMenuToggle = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (currentPath === "/" || currentPath === "/about") {
      setTransparency(true);
    } else {
      setTransparency(false);
    }

    if (currentPath == "/contact") {
      setIsContactUs(true);
    } else {
      setIsContactUs(false);
    }
    scrollToTop();
  }, [currentPath]);

  useEffect(
    () => {
      const handleScroll = () => {
        const scrollY = window.scrollY;

        const scrollThreshold = 100;

        if (scrollY > scrollThreshold) {
          setNavScrolled(true);
          setIsNavMenuOpen(false);
          if (currentPath === "/" || currentPath === "/about") {
            setTransparency(false);
          }
        } else {
          setNavScrolled(false);
          if (currentPath === "/" || currentPath === "/about") {
            setTransparency(true);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [],
    [currentPath]
  );

  //   const [underlineRight, setUnderlineRight] = useState(0);
  //   const [changedSide, setChangedSide] = useState("");
  //   const [underlineStyles, setUnderlineStyles] = useState({
  //     width: `${underlineWidth}px`,
  //   });

  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);

  //   const updateUnderline = () => {
  //     const activeLink = document.querySelector(".active-link");
  //     if (activeLink) {
  //       const linkWidth = activeLink.offsetWidth;
  //       const linkOffsetLeft = activeLink.offsetLeft;
  //       console.log("Link Offset left", linkOffsetLeft);
  //       console.log("underline left", underlineLeft);
  //       if (linkOffsetLeft > underlineLeft) {
  //         console.log("moved to the right");
  //         // const linkOffsetRight = activeLink.offsetRight;
  //         const linkOffsetRight = linkOffsetLeft + underlineLeft;
  //         setChangedSide("right");
  //         console.log("side=", changedSide);
  //         setUnderlineRight(linkOffsetRight);
  //         setUnderlineWidth(linkOffsetRight + linkWidth * 5);

  //         setTimeout(() => {
  //           setUnderlineWidth(linkWidth);
  //           setUnderlineRight(linkOffsetRight);
  //         }, 500);
  //       } else if (linkOffsetLeft < underlineLeft) {
  //         console.log("moved to the left");
  //         setChangedSide("left");
  //         setUnderlineLeft(linkOffsetLeft);
  //         setUnderlineWidth(linkOffsetLeft - linkWidth * 5);

  //         setTimeout(() => {
  //           setUnderlineWidth(linkWidth);
  //           setUnderlineLeft(linkOffsetLeft);
  //         }, 500);
  //       }
  //     }
  //   };

  const updateUnderline = () => {
    const activeLink = document.querySelector(".active-link");
    if (activeLink) {
      const linkWidth = activeLink.offsetWidth;
      const linkOffsetLeft = activeLink.offsetLeft;
      setUnderlineWidth(linkWidth);
      setUnderlineLeft(linkOffsetLeft);
    }
  };

  useEffect(() => {
    updateUnderline();
  }, [currentPath]);

  //   useEffect(() => {
  //     const activeLink = document.querySelector(".active-link");
  //     const newStyles = {
  //       width: `${underlineWidth}px`,
  //     };
  //     if (activeLink) {
  //       const linkWidth = activeLink.offsetWidth;
  //       const linkOffsetLeft = activeLink.offsetLeft;
  //       setUnderlineWidth(linkWidth);
  //       setUnderlineLeft(linkOffsetLeft);
  //       newStyles.left = `${underlineLeft}px`;
  //       setUnderlineStyles(newStyles);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     // Calculate the new styles based on changedSide
  //     const newStyles = {
  //       width: `${underlineWidth}px`,
  //     };

  //     if (changedSide === "left") {
  //       newStyles.left = `${underlineLeft}px`;
  //     } else if (changedSide === "right") {
  //       newStyles.right = `${underlineRight}px`;
  //     }
  //     console.log(newStyles);

  //     // Update underlineStyles state
  //     setUnderlineStyles(newStyles);
  //   }, [changedSide, underlineWidth, underlineLeft, underlineRight]);

  return (
    <div
      className={`navbar-component ${
        transparenncy ? "transparent" : "notTransparent"
      } ${navScrolled ? "scrolled" : ""}`}
    >
      <NavLink to="/">
        <img src={LogoSecondary} alt="Logo" />
      </NavLink>
      <div className="nav-mobile-logo">
        <img src={LogoPrimary} alt="Logo 2" />
      </div>

      <div className="nav-mobile-menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="37"
          viewBox="0 0 10 37"
          fill="none"
          onClick={handleNavMenuToggle}
        >
          <circle cx="5.39341" cy="4.6063" r="4.6063" fill="white" />
          <circle cx="5.39341" cy="18.4251" r="4.6063" fill="white" />
          <circle cx="5.39341" cy="32.244" r="4.6063" fill="white" />
        </svg>
      </div>

      {isNavMenuOpen && (
        <div
          className={`nav-mobile ${isNavMenuOpen ? "mobile-menu-open" : ""}`}
          onClick={handleNavMenuToggle}
        >
          {" "}
          <div className="nav-mobile-cross-icon">
            <ImCross />
          </div>
          <ul className={`nav-mobile-menu-list `}>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active-link"
                className={
                  currentPath === "/" ? "active-link" : "inactive-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active-link"
                className={
                  currentPath === "/about" ? "active-link" : "inactive-link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/properties"
                activeClassName="active-link"
                className={
                  currentPath === "/properties"
                    ? "active-link"
                    : "inactive-link"
                }
              >
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                activeClassName="active-link"
                className={
                  currentPath === "/blog" ? "active-link" : "inactive-link"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <button className="button-primary">Contact us</button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      <ul className="nav-menu-list">
        {!isContactUs && (
          <div
            className="underline"
            style={{
              width: `${underlineWidth}px`,
              left: `${underlineLeft}px`,
            }}
          ></div>
        )}
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active-link"
            className={currentPath === "/" ? "active-link" : "inactive-link"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="active-link"
            className={
              currentPath === "/about" ? "active-link" : "inactive-link"
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="nav-logo-container">
          <img src={LogoPrimary} alt="Logo 2" />
        </li>
        <NavLink
          to="/properties"
          activeClassName="active-link"
          className={
            currentPath === "/properties" ? "active-link" : "inactive-link"
          }
        >
          Properties
        </NavLink>
        <NavLink
          to="/blog"
          activeClassName="active-link"
          className={currentPath === "/blog" ? "active-link" : "inactive-link"}
        >
          Blog
        </NavLink>
      </ul>
      <NavLink to="/contact">
        <button className="button-primary">Contact us</button>
      </NavLink>
    </div>
  );
}

export default Navbar;
