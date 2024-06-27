import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About Us/AboutUs";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Properties from "./Pages/Properties/Properties";
import Blog from "./Pages/Blog/Blog";
import PrivacyPolicy from "./Pages/Privacy Policy/PrivacyPolicy";
import TermsOfServices from "./Pages/Terms of Services/TermsOfServices";

function App() {
  const [transparency, setTransparency] = useState(true);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function updateListViewState() {
    const isSmallScreen = window.innerWidth < 1200;
    setIsSmallScreen(isSmallScreen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const scrollThreshold = 100;

      if (scrollY > scrollThreshold) {
        setTransparency(false);
      } else {
        setTransparency(true);
      }
    };
    window.addEventListener("resize", updateListViewState);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateListViewState);
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Header transparent={transparency} />
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={AboutUs} />
          <Route path="/contact" Component={ContactUs} />
          <Route
            path="/properties"
            element={<Properties isSmallScreen={isSmallScreen} />}
          ></Route>
          {/* <Route path="/properties" Component={Properties} /> */}
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-services" element={<TermsOfServices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
