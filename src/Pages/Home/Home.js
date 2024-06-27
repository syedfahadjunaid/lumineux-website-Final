import React, { useEffect, useState } from "react";
import "./Home.css";

import { useForm } from "react-hook-form";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { NavLink } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import AboutUsMain1 from "../../Assets/About Us/AboutUSMain1.jpg";
import AboutUsMain2 from "../../Assets/About Us/AboutUSMain2.jpg";
import AboutUsMain3 from "../../Assets/About Us/AboutUSMain3.jpeg";

import PropertiesShowcase from "../../Components/Properties Showcase/PropertiesShowcase";
import MakeATour from "../../Components/Make A Tour/MakeATour";
import HomeInquiryForm from "../../Components/Home Inquiry Form/HomeInquiryForm";

import HomeIcon from "../../Assets/Home/Home-Home-Icon.png";
import HomeAboutImg1 from "../../Assets/Home/Home-About-Image1-Nobg.png";
import HomeAboutImg2 from "../../Assets/Home/Home-About-Right-IUmage.jpeg";

import WhatWeOfferContImg1 from "../../Assets/Home/WhatWeOfferContImg1.jpeg";
import WhatWeOfferBedRoomCardImg from "../../Assets/Home/WhatWeOfferBedRoomCardImg.jpeg";
import WhatWeOfferBathroomCardImg from "../../Assets/Home/WhatWeOfferBathroomCardImg.jpeg";
import WhatWeOfferViewCardImg from "../../Assets/Home/WhatWeOfferViewCardImg.jpeg";

import TestimonialClientImg from "../../Assets/Home/TestimonialClientImg.jpeg";
import HomeTestimonialSideImg from "../../Assets/Home/HomeTestimonialSideImg.jpeg";

import OurAgentsImg1 from "../../Assets/Home/OurAgentsImg1.jpeg";
import OurAgentsImg2 from "../../Assets/Home/OurAgentsImg2.jpeg";
import OurAgentsImg3 from "../../Assets/Home/OurAgentsImg3.jpeg";

import PropertyNewsCard from "../../Components/Property News Card/PropertyNewsCard";

import PropertyNewsCardImg1 from "../../Assets/Home/PropertyNewsCardImg1.jpeg";
import PropertyNewsCardImg2 from "../../Assets/Home/PropertyNewsCardImg2.jpeg";
import PropertyNewsCardImg3 from "../../Assets/Home/PropertyNewsCardImg3.jpeg";

import productData from "../../Data/Product Data/ProductData";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const [transparenncy, setTransparency] = useState(true);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollY = window.scrollY;

  //       const scrollThreshold = 100;

  //       if (scrollY > scrollThreshold) {
  //         setTransparency(false);
  //       } else {
  //         setTransparency(true);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  const currentItems = productData.slice(0, 6);
  const singleItemForMobile = productData.slice(0, 1);

  const WhatWeOfferCarouselData = [
    <div className="what-we-offer-carousel-container">
      <img src={WhatWeOfferContImg1} alt="What We Offer" />
      <div className="what-we-offer-cards bedroom">
        <img src={WhatWeOfferBedRoomCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
      <div className="what-we-offer-cards bathrooms">
        <img src={WhatWeOfferBathroomCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
      <div className="what-we-offer-cards view">
        <img src={WhatWeOfferViewCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
    </div>,
    <div className="what-we-offer-carousel-container">
      <img src={WhatWeOfferContImg1} alt="What We Offer" />
      <div className="what-we-offer-cards bedroom">
        <img src={WhatWeOfferBedRoomCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
      <div className="what-we-offer-cards bathrooms">
        <img src={WhatWeOfferBathroomCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
      <div className="what-we-offer-cards view">
        <img src={WhatWeOfferViewCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
    </div>,
    <div className="what-we-offer-carousel-container">
      <img src={WhatWeOfferContImg1} alt="What We Offer" />
      <div className="what-we-offer-cards bedroom">
        <img src={WhatWeOfferBedRoomCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
      <div className="what-we-offer-cards bathrooms">
        <img src={WhatWeOfferBathroomCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
      <div className="what-we-offer-cards view">
        <img src={WhatWeOfferViewCardImg} />
        <span>
          2 bedrooms <br />
          27sq.m
        </span>
      </div>
    </div>,
  ];

  const clientTestimonialCarousalData = [
    <span>
      "I am absolutely delighted with the exceptional service Lumineux provided.
      Their unwavering commitment, deep expertise, and personalized approach
      ensured that my real estate journey was seamless and successful. I
      wholeheartedly recommend them!"
    </span>,
    <span>
      "Lumineux transformed my dream of finding the perfect home into a reality.
      Their team's professionalism and in-depth knowledge of the market were
      priceless. I am genuinely thankful for their unwavering support throughout
      the entire process."
    </span>,
    <span>
      "Having collaborated with various real estate agencies previously, I can
      confidently say that Lumineux stands out from the rest. Their dedication
      to client satisfaction and their steadfast commitment to integrity are
      unparalleled. They played a pivotal role in helping me secure an
      outstanding investment property.”
    </span>,
    <span>
      "Lumineux went above and beyond my expectations in every aspect. Their
      proactive communication and meticulous attention to detail truly set them
      apart. Thanks to their expert guidance, I was able to sell my property
      swiftly and at an excellent price. When it comes to my real estate needs,
      there's no one else I would consider.”
    </span>,
  ];

  return (
    <div className="home-page">
      <div className="home-banner-section">
        {/* <Header transparent={transparenncy} />
        <Navbar transparent={transparenncy} /> */}
        <div className="home-banner-mid-content">
          <div className="home-banner-left-heading">
            <h2>FIND YOUR DREAM</h2>
            <h1>
              Home <img src={HomeIcon} alt="Icon" />
            </h1>
            <span>
              We are dedicated to ensuring our clients experience a seamless and
              prosperous journey in the world of Dubai Real Estate.
            </span>
          </div>
          <HomeInquiryForm />
          {/* <div className="home-banner-right-form">
            <div>
              <h3>FOR INQUIRY CONTACT US</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^\+?[0-9]*$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p>{errors.message.message}</p>}
              </div>
              <button type="submit">SEND NOW</button>
            </form>
          </div> */}
        </div>
      </div>
      <div className="home-main-content">
        {/* <div className="home-banner-right-form home-enquiry-form-mobile">
          <div>
            <h3>FOR INQUIRY CONTACT US</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^\+?[0-9]*$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div>
              <textarea
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">SEND NOW</button>
          </form>
        </div> */}
        <div className="home-enquiry-form-mobile">
          <HomeInquiryForm />
        </div>
        <div className="home-about-section">
          <button className="home-about-play-video-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
            >
              <path
                d="M43.0897 28.8655L30.3397 20.3655C30.1796 20.2587 29.9936 20.1974 29.8014 20.1881C29.6092 20.1787 29.4181 20.2218 29.2485 20.3126C29.0789 20.4034 28.9371 20.5386 28.8383 20.7037C28.7395 20.8688 28.6874 21.0576 28.6875 21.25V38.25C28.6873 38.4424 28.7393 38.6312 28.838 38.7964C28.9367 38.9615 29.0784 39.0968 29.248 39.1877C29.4177 39.2785 29.6089 39.3216 29.8012 39.3122C29.9935 39.3029 30.1796 39.2415 30.3397 39.1345L43.0897 30.6345C43.2354 30.5375 43.3549 30.406 43.4376 30.2517C43.5203 30.0974 43.5635 29.9251 43.5635 29.75C43.5635 29.5749 43.5203 29.4026 43.4376 29.2483C43.3549 29.094 43.2354 28.9625 43.0897 28.8655ZM30.8125 36.2658V23.2342L40.5848 29.75L30.8125 36.2658ZM57.375 11.6875H10.625C9.77962 11.6875 8.96887 12.0233 8.3711 12.6211C7.77333 13.2189 7.4375 14.0296 7.4375 14.875V44.625C7.4375 45.4704 7.77333 46.2811 8.3711 46.8789C8.96887 47.4767 9.77962 47.8125 10.625 47.8125H57.375C58.2204 47.8125 59.0311 47.4767 59.6289 46.8789C60.2267 46.2811 60.5625 45.4704 60.5625 44.625V14.875C60.5625 14.0296 60.2267 13.2189 59.6289 12.6211C59.0311 12.0233 58.2204 11.6875 57.375 11.6875ZM58.4375 44.625C58.4375 44.9068 58.3256 45.177 58.1263 45.3763C57.927 45.5756 57.6568 45.6875 57.375 45.6875H10.625C10.3432 45.6875 10.073 45.5756 9.8737 45.3763C9.67444 45.177 9.5625 44.9068 9.5625 44.625V14.875C9.5625 14.5932 9.67444 14.323 9.8737 14.1237C10.073 13.9244 10.3432 13.8125 10.625 13.8125H57.375C57.6568 13.8125 57.927 13.9244 58.1263 14.1237C58.3256 14.323 58.4375 14.5932 58.4375 14.875V44.625ZM60.5625 55.25C60.5625 55.5318 60.4506 55.802 60.2513 56.0013C60.052 56.2006 59.7818 56.3125 59.5 56.3125H8.5C8.21821 56.3125 7.94796 56.2006 7.7487 56.0013C7.54944 55.802 7.4375 55.5318 7.4375 55.25C7.4375 54.9682 7.54944 54.698 7.7487 54.4987C7.94796 54.2994 8.21821 54.1875 8.5 54.1875H59.5C59.7818 54.1875 60.052 54.2994 60.2513 54.4987C60.4506 54.698 60.5625 54.9682 60.5625 55.25Z"
                fill="white"
              />
            </svg>
            <span>Play Video</span>
          </button>
          <div className="home-about-left-info">
            <h3>About Lumineux Properties!</h3>
            <h3>
              Attain Your Real Estate Objectives with <br />
              <span className="home-colored-text">Lumineux</span>
            </h3>
            <div className="home-about-text-section">
              <img src={HomeAboutImg1} alt="Train" />
              <div className="home-about-text">
                <span>
                  Lumineux Properties has garnered a celebrated reputation as an
                  award-winning firm, and it stands among the top brokerage
                  companies in Dubai, thanks to its rich expertise in the UAE
                  Real Estate Market. This stellar reputation has been built on
                  a foundation of diligent effort and consistently delivering
                  favorable results for clients, facilitated by a network of
                  highly skilled, professional, and multilingual real estate
                  agents.
                </span>
                <div>
                  <NavLink to="/about">
                    <button>READ MORE</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="home-about-right-image">
            <img src={AboutUsMain1} alt="Home Right" />
          </div>
        </div>
        <div className="home-propeties-section">
          <div className="home-properties-desktop">
            <PropertiesShowcase
              heading="Featured"
              coloredHeading="Properties"
              productData={currentItems}
            />
          </div>
          <div className="home-properties-mobile">
            <PropertiesShowcase
              heading="Featured"
              coloredHeading="Properties"
              productData={singleItemForMobile}
            />
            <NavLink to="/properties">
              <button>More Properties</button>
            </NavLink>
          </div>
        </div>
        <div className="home-what-we-offer-section">
          <h2 className="home-subheadings">WHAT WE OFFER</h2>
          <h3 className="home-subheadings-2">
            Luxury&nbsp;<span className="home-colored-text">Homes&nbsp; </span>{" "}
            and&nbsp;
            <span className="home-colored-text"> Properties&nbsp;</span> for
            Discerning Buyers
          </h3>
          <div className="home-what-we-offer-carousel">
            <AliceCarousel
              items={WhatWeOfferCarouselData}
              autoPlay
              infinite
              disableButtonsControls
              animationDuration={1000}
              animationEasingFunction={"ease"}
              autoPlayInterval={3000}
            />
          </div>
          <div className="home-what-we-offer-marquee">
            <marquee
              className="home-blink-text"
              scrollamount="6"
              direction="left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Luxury Property &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Apartments &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Residential &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Luxury Property &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Apartments &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Residential &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Luxury Property &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Apartments &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#454545" />
              </svg>{" "}
              &nbsp; Residential &nbsp;
            </marquee>
          </div>
          <div className="home-testimonials">
            <h2 className="home-subheadings">Testimonials</h2>
            <div className="home-testimonials-top">
              <h2 className="home-subheadings">
                What&nbsp;<span className="home-colored-text">Our Clients</span>
                &nbsp; Say About Us!
              </h2>
              <div className="home-testimonials-content">
                <div className="home-testimonials-left">
                  <div className="home-testimonials-text-section">
                    {/* <span>
                      I cannot say enough great things about Quere. Their team
                      is professional, knowledgeable, and truly cares about
                      their clients. They helped me find the perfect home for my
                      family. I cannot say enough great things about Quere.
                      Their team is professional, knowledgeable, and truly cares
                      about their clients. They helped me find the perfect home
                      for my family.I cannot say enough great things about
                      Quere. Their team is professional, knowledgeable, and
                      truly cares about their clients. They helped me find the
                      perfect home for my family.
                    </span> */}
                    <AliceCarousel
                      items={clientTestimonialCarousalData}
                      autoPlay
                      infinite
                      disableButtonsControls
                      animationDuration={1000}
                      animationEasingFunction={"ease"}
                      autoPlayInterval={3000}
                    />
                    {/* <div className="home-testimonials-client-details">
                      <img
                        src={TestimonialClientImg}
                        alt="Testimonial Client"
                      />
                      <div className="home-testimonials-client-name">
                        <h4>Client Name</h4>
                        <span>Agency Name</span>
                      </div>
                    </div> */}
                    {/* <div className="home-testimonials-metrics">
                      <div className="home-testimonial-metric">
                        <h3>67K</h3>
                        <span>Square Meters</span>
                      </div>
                      <div className="home-testimonial-metric">
                        <h3>50+</h3>
                        <span>Green Spaces</span>
                      </div>
                      <div className="home-testimonial-metric">
                        <h3>10</h3>
                        <span>Years of Experience</span>
                      </div>
                      <div className="home-testimonial-metric">
                        <h3>16</h3>
                        <span>Skilled Professionals</span>
                      </div>
                    </div> */}
                    <div>
                      <NavLink to="/contact">
                        <button>Contact Us</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <img src={HomeTestimonialSideImg} alt="Testimonial Home" />
              </div>
            </div>
            {/* <div className="home-our-agents-section">
              <h4>Team Members</h4>
              <div className="home-our-agents-main-section">
                <h2 className="home-subheadings">
                  Our Skilled Lead Real State &nbsp;
                  <span className="home-colored-text">Agents</span>
                </h2>

                <div className="home-agent-cards-section">
                  <div className="home-agent-cards">
                    <img src={OurAgentsImg1} alt="Agent" />
                    <h3>Agent Name</h3>
                    <h4>Commercial Broker</h4>
                    <span>
                      Whether it is working with a first time homebuyer, a
                      luxury home listing or a seasoned..
                    </span>
                    <div className="home-agent-cards-icons">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M16.5036 3.89648H4.30648C3.76262 3.89648 3.24104 4.11253 2.85647 4.4971C2.47191 4.88167 2.25586 5.40325 2.25586 5.94711V14.8632C2.25586 15.4071 2.47191 15.9287 2.85647 16.3132C3.24104 16.6978 3.76262 16.9139 4.30648 16.9139H16.5036C17.0475 16.9139 17.569 16.6978 17.9536 16.3132C18.3382 15.9287 18.5542 15.4071 18.5542 14.8632V5.94711C18.5542 5.40325 18.3382 4.88167 17.9536 4.4971C17.569 4.11253 17.0475 3.89648 16.5036 3.89648ZM4.30648 4.71673H16.5036C16.8141 4.71584 17.1132 4.83322 17.3403 5.04501C17.5673 5.25679 17.7051 5.54709 17.7258 5.85688C15.6998 6.93961 13.6655 8.01414 11.6313 9.09687C11.3561 9.26933 11.0649 9.41492 10.7619 9.5316C10.5239 9.57856 10.2787 9.57432 10.0425 9.51916C9.80631 9.46401 9.58458 9.3592 9.39204 9.2117C8.22728 8.59652 7.06252 7.97313 5.90597 7.35794C4.97089 6.86579 4.0194 6.36544 3.08431 5.86508C3.10334 5.55398 3.24042 5.26187 3.46758 5.04844C3.69473 4.83501 3.9948 4.71636 4.30648 4.71673ZM17.734 14.8632C17.734 15.1895 17.6044 15.5025 17.3736 15.7332C17.1429 15.964 16.8299 16.0936 16.5036 16.0936H4.30648C3.98017 16.0936 3.66722 15.964 3.43648 15.7332C3.20574 15.5025 3.07611 15.1895 3.07611 14.8632V6.79607C5.0119 7.81318 6.93949 8.84669 8.87528 9.87201C9.22114 10.0841 9.59346 10.2495 9.98262 10.3642C10.5522 10.4568 11.1359 10.3371 11.6231 10.0279C12.8125 9.40446 13.9936 8.77287 15.183 8.14948C16.0361 7.69014 16.8809 7.24721 17.734 6.79607V14.8632Z"
                            fill="#B0B0B0"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M15.9451 11.8111L12.6166 10.3217C12.4875 10.2658 12.3466 10.243 12.2065 10.2553C12.0665 10.2677 11.9317 10.3147 11.8144 10.3922C11.805 10.3981 11.7961 10.4047 11.7876 10.4119L10.0394 11.9021C10.0005 11.9258 9.95639 11.9396 9.91089 11.9421C9.8654 11.9447 9.81997 11.936 9.77863 11.9169C8.63387 11.3642 7.44893 10.1885 6.89628 9.05709C6.87673 9.01606 6.86766 8.97083 6.86987 8.92543C6.87209 8.88004 6.88552 8.83591 6.90897 8.79698L8.40337 7.01992C8.41041 7.01146 8.41676 7.0023 8.4231 6.99313C8.50035 6.87598 8.54724 6.74145 8.55955 6.60166C8.57185 6.46187 8.54919 6.32121 8.49359 6.19236L7.00131 2.86945C6.92927 2.70116 6.80457 2.56077 6.64595 2.46938C6.48732 2.378 6.30333 2.34054 6.1216 2.36263C5.23453 2.47959 4.42036 2.91546 3.83118 3.58883C3.24199 4.26221 2.91808 5.12703 2.91993 6.02178C2.91993 11.4636 7.34672 15.8904 12.7886 15.8904C13.6833 15.8923 14.5481 15.5683 15.2215 14.9792C15.8949 14.39 16.3308 13.5758 16.4477 12.6887C16.4696 12.5078 16.4326 12.3247 16.342 12.1666C16.2514 12.0084 16.1122 11.8838 15.9451 11.8111ZM15.8901 12.6183C15.7906 13.3695 15.4208 14.0588 14.85 14.5572C14.2792 15.0556 13.5464 15.3291 12.7886 15.3265C7.65828 15.3265 3.48385 11.1521 3.48385 6.02178C3.48123 5.26397 3.7547 4.53115 4.25313 3.96032C4.75156 3.3895 5.44084 3.01975 6.19209 2.92021C6.20335 2.91951 6.21465 2.91951 6.22592 2.92021C6.28155 2.92068 6.33579 2.9376 6.38182 2.96883C6.42786 3.00006 6.46362 3.04421 6.48462 3.09573L7.97267 6.41864C7.99003 6.45925 7.99761 6.50337 7.99479 6.54745C7.99198 6.59153 7.97885 6.63433 7.95646 6.6724L6.46277 8.44876C6.45572 8.45792 6.44867 8.46638 6.44233 8.47625C6.36275 8.59794 6.31588 8.73809 6.30625 8.88317C6.29662 9.02825 6.32455 9.17336 6.38734 9.30451C6.9999 10.5585 8.26309 11.8125 9.53121 12.4251C9.66325 12.4875 9.80919 12.5146 9.95483 12.5039C10.1005 12.4931 10.2408 12.4449 10.3623 12.3638L10.3884 12.344L12.1386 10.8553C12.1761 10.8324 12.2184 10.8188 12.2622 10.8155C12.3059 10.8121 12.3498 10.8193 12.3903 10.8363L15.7181 12.3278C15.7743 12.3512 15.8214 12.3921 15.8524 12.4445C15.8834 12.4968 15.8966 12.5578 15.8901 12.6183Z"
                            fill="#B0B0B0"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g opacity="0.5">
                          <path
                            d="M15 18.3332C14.3056 18.3332 13.7153 18.0901 13.2292 17.604C12.7431 17.1179 12.5 16.5276 12.5 15.8332C12.5 15.7359 12.5069 15.6351 12.5208 15.5307C12.5347 15.4262 12.5556 15.3326 12.5833 15.2498L6.70833 11.8332C6.47222 12.0415 6.20833 12.2048 5.91667 12.3232C5.625 12.4415 5.31944 12.5004 5 12.4998C4.30556 12.4998 3.71528 12.2568 3.22917 11.7707C2.74306 11.2846 2.5 10.6943 2.5 9.99984C2.5 9.30539 2.74306 8.71512 3.22917 8.229C3.71528 7.74289 4.30556 7.49984 5 7.49984C5.31944 7.49984 5.625 7.559 5.91667 7.67734C6.20833 7.79567 6.47222 7.95873 6.70833 8.1665L12.5833 4.74984C12.5556 4.6665 12.5347 4.57289 12.5208 4.469C12.5069 4.36511 12.5 4.26428 12.5 4.1665C12.5 3.47206 12.7431 2.88178 13.2292 2.39567C13.7153 1.90956 14.3056 1.6665 15 1.6665C15.6944 1.6665 16.2847 1.90956 16.7708 2.39567C17.2569 2.88178 17.5 3.47206 17.5 4.1665C17.5 4.86095 17.2569 5.45123 16.7708 5.93734C16.2847 6.42345 15.6944 6.6665 15 6.6665C14.6806 6.6665 14.375 6.60761 14.0833 6.48984C13.7917 6.37206 13.5278 6.20873 13.2917 5.99984L7.41667 9.4165C7.44444 9.49984 7.46528 9.59373 7.47917 9.69817C7.49306 9.80261 7.5 9.90317 7.5 9.99984C7.5 10.0971 7.49306 10.1979 7.47917 10.3023C7.46528 10.4068 7.44444 10.5004 7.41667 10.5832L13.2917 13.9998C13.5278 13.7915 13.7917 13.6284 14.0833 13.5107C14.375 13.3929 14.6806 13.3337 15 13.3332C15.6944 13.3332 16.2847 13.5762 16.7708 14.0623C17.2569 14.5484 17.5 15.1387 17.5 15.8332C17.5 16.5276 17.2569 17.1179 16.7708 17.604C16.2847 18.0901 15.6944 18.3332 15 18.3332ZM15 4.99984C15.2361 4.99984 15.4342 4.91984 15.5942 4.75984C15.7542 4.59984 15.8339 4.40206 15.8333 4.1665C15.8333 3.93039 15.7533 3.73234 15.5933 3.57234C15.4333 3.41234 15.2356 3.33262 15 3.33317C14.7639 3.33317 14.5658 3.41317 14.4058 3.57317C14.2458 3.73317 14.1661 3.93095 14.1667 4.1665C14.1667 4.40261 14.2467 4.60067 14.4067 4.76067C14.5667 4.92067 14.7644 5.00039 15 4.99984ZM5 10.8332C5.23611 10.8332 5.43417 10.7532 5.59417 10.5932C5.75417 10.4332 5.83389 10.2354 5.83333 9.99984C5.83333 9.76373 5.75333 9.56567 5.59333 9.40567C5.43333 9.24567 5.23556 9.16595 5 9.1665C4.76389 9.1665 4.56583 9.2465 4.40583 9.4065C4.24583 9.5665 4.16611 9.76428 4.16667 9.99984C4.16667 10.2359 4.24667 10.434 4.40667 10.594C4.56667 10.754 4.76444 10.8337 5 10.8332ZM15 16.6665C15.2361 16.6665 15.4342 16.5865 15.5942 16.4265C15.7542 16.2665 15.8339 16.0687 15.8333 15.8332C15.8333 15.5971 15.7533 15.399 15.5933 15.239C15.4333 15.079 15.2356 14.9993 15 14.9998C14.7639 14.9998 14.5658 15.0798 14.4058 15.2398C14.2458 15.3998 14.1661 15.5976 14.1667 15.8332C14.1667 16.0693 14.2467 16.2673 14.4067 16.4273C14.5667 16.5873 14.7644 16.6671 15 16.6665Z"
                            fill="url(#paint0_linear_572_2474)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_572_2474"
                            x1="-0.446428"
                            y1="23.4614"
                            x2="26.4985"
                            y2="5.75036"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.102403" stop-color="#3D3D3D" />
                            <stop offset="0.896322" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="home-agent-cards">
                    <img src={OurAgentsImg2} alt="Agent" />
                    <h3>Agent Name</h3>
                    <h4>Commercial Broker</h4>
                    <span>
                      Whether it is working with a first time homebuyer, a
                      luxury home listing or a seasoned..
                    </span>
                    <div className="home-agent-cards-icons">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M16.5036 3.89648H4.30648C3.76262 3.89648 3.24104 4.11253 2.85647 4.4971C2.47191 4.88167 2.25586 5.40325 2.25586 5.94711V14.8632C2.25586 15.4071 2.47191 15.9287 2.85647 16.3132C3.24104 16.6978 3.76262 16.9139 4.30648 16.9139H16.5036C17.0475 16.9139 17.569 16.6978 17.9536 16.3132C18.3382 15.9287 18.5542 15.4071 18.5542 14.8632V5.94711C18.5542 5.40325 18.3382 4.88167 17.9536 4.4971C17.569 4.11253 17.0475 3.89648 16.5036 3.89648ZM4.30648 4.71673H16.5036C16.8141 4.71584 17.1132 4.83322 17.3403 5.04501C17.5673 5.25679 17.7051 5.54709 17.7258 5.85688C15.6998 6.93961 13.6655 8.01414 11.6313 9.09687C11.3561 9.26933 11.0649 9.41492 10.7619 9.5316C10.5239 9.57856 10.2787 9.57432 10.0425 9.51916C9.80631 9.46401 9.58458 9.3592 9.39204 9.2117C8.22728 8.59652 7.06252 7.97313 5.90597 7.35794C4.97089 6.86579 4.0194 6.36544 3.08431 5.86508C3.10334 5.55398 3.24042 5.26187 3.46758 5.04844C3.69473 4.83501 3.9948 4.71636 4.30648 4.71673ZM17.734 14.8632C17.734 15.1895 17.6044 15.5025 17.3736 15.7332C17.1429 15.964 16.8299 16.0936 16.5036 16.0936H4.30648C3.98017 16.0936 3.66722 15.964 3.43648 15.7332C3.20574 15.5025 3.07611 15.1895 3.07611 14.8632V6.79607C5.0119 7.81318 6.93949 8.84669 8.87528 9.87201C9.22114 10.0841 9.59346 10.2495 9.98262 10.3642C10.5522 10.4568 11.1359 10.3371 11.6231 10.0279C12.8125 9.40446 13.9936 8.77287 15.183 8.14948C16.0361 7.69014 16.8809 7.24721 17.734 6.79607V14.8632Z"
                            fill="#B0B0B0"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M15.9451 11.8111L12.6166 10.3217C12.4875 10.2658 12.3466 10.243 12.2065 10.2553C12.0665 10.2677 11.9317 10.3147 11.8144 10.3922C11.805 10.3981 11.7961 10.4047 11.7876 10.4119L10.0394 11.9021C10.0005 11.9258 9.95639 11.9396 9.91089 11.9421C9.8654 11.9447 9.81997 11.936 9.77863 11.9169C8.63387 11.3642 7.44893 10.1885 6.89628 9.05709C6.87673 9.01606 6.86766 8.97083 6.86987 8.92543C6.87209 8.88004 6.88552 8.83591 6.90897 8.79698L8.40337 7.01992C8.41041 7.01146 8.41676 7.0023 8.4231 6.99313C8.50035 6.87598 8.54724 6.74145 8.55955 6.60166C8.57185 6.46187 8.54919 6.32121 8.49359 6.19236L7.00131 2.86945C6.92927 2.70116 6.80457 2.56077 6.64595 2.46938C6.48732 2.378 6.30333 2.34054 6.1216 2.36263C5.23453 2.47959 4.42036 2.91546 3.83118 3.58883C3.24199 4.26221 2.91808 5.12703 2.91993 6.02178C2.91993 11.4636 7.34672 15.8904 12.7886 15.8904C13.6833 15.8923 14.5481 15.5683 15.2215 14.9792C15.8949 14.39 16.3308 13.5758 16.4477 12.6887C16.4696 12.5078 16.4326 12.3247 16.342 12.1666C16.2514 12.0084 16.1122 11.8838 15.9451 11.8111ZM15.8901 12.6183C15.7906 13.3695 15.4208 14.0588 14.85 14.5572C14.2792 15.0556 13.5464 15.3291 12.7886 15.3265C7.65828 15.3265 3.48385 11.1521 3.48385 6.02178C3.48123 5.26397 3.7547 4.53115 4.25313 3.96032C4.75156 3.3895 5.44084 3.01975 6.19209 2.92021C6.20335 2.91951 6.21465 2.91951 6.22592 2.92021C6.28155 2.92068 6.33579 2.9376 6.38182 2.96883C6.42786 3.00006 6.46362 3.04421 6.48462 3.09573L7.97267 6.41864C7.99003 6.45925 7.99761 6.50337 7.99479 6.54745C7.99198 6.59153 7.97885 6.63433 7.95646 6.6724L6.46277 8.44876C6.45572 8.45792 6.44867 8.46638 6.44233 8.47625C6.36275 8.59794 6.31588 8.73809 6.30625 8.88317C6.29662 9.02825 6.32455 9.17336 6.38734 9.30451C6.9999 10.5585 8.26309 11.8125 9.53121 12.4251C9.66325 12.4875 9.80919 12.5146 9.95483 12.5039C10.1005 12.4931 10.2408 12.4449 10.3623 12.3638L10.3884 12.344L12.1386 10.8553C12.1761 10.8324 12.2184 10.8188 12.2622 10.8155C12.3059 10.8121 12.3498 10.8193 12.3903 10.8363L15.7181 12.3278C15.7743 12.3512 15.8214 12.3921 15.8524 12.4445C15.8834 12.4968 15.8966 12.5578 15.8901 12.6183Z"
                            fill="#B0B0B0"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g opacity="0.5">
                          <path
                            d="M15 18.3332C14.3056 18.3332 13.7153 18.0901 13.2292 17.604C12.7431 17.1179 12.5 16.5276 12.5 15.8332C12.5 15.7359 12.5069 15.6351 12.5208 15.5307C12.5347 15.4262 12.5556 15.3326 12.5833 15.2498L6.70833 11.8332C6.47222 12.0415 6.20833 12.2048 5.91667 12.3232C5.625 12.4415 5.31944 12.5004 5 12.4998C4.30556 12.4998 3.71528 12.2568 3.22917 11.7707C2.74306 11.2846 2.5 10.6943 2.5 9.99984C2.5 9.30539 2.74306 8.71512 3.22917 8.229C3.71528 7.74289 4.30556 7.49984 5 7.49984C5.31944 7.49984 5.625 7.559 5.91667 7.67734C6.20833 7.79567 6.47222 7.95873 6.70833 8.1665L12.5833 4.74984C12.5556 4.6665 12.5347 4.57289 12.5208 4.469C12.5069 4.36511 12.5 4.26428 12.5 4.1665C12.5 3.47206 12.7431 2.88178 13.2292 2.39567C13.7153 1.90956 14.3056 1.6665 15 1.6665C15.6944 1.6665 16.2847 1.90956 16.7708 2.39567C17.2569 2.88178 17.5 3.47206 17.5 4.1665C17.5 4.86095 17.2569 5.45123 16.7708 5.93734C16.2847 6.42345 15.6944 6.6665 15 6.6665C14.6806 6.6665 14.375 6.60761 14.0833 6.48984C13.7917 6.37206 13.5278 6.20873 13.2917 5.99984L7.41667 9.4165C7.44444 9.49984 7.46528 9.59373 7.47917 9.69817C7.49306 9.80261 7.5 9.90317 7.5 9.99984C7.5 10.0971 7.49306 10.1979 7.47917 10.3023C7.46528 10.4068 7.44444 10.5004 7.41667 10.5832L13.2917 13.9998C13.5278 13.7915 13.7917 13.6284 14.0833 13.5107C14.375 13.3929 14.6806 13.3337 15 13.3332C15.6944 13.3332 16.2847 13.5762 16.7708 14.0623C17.2569 14.5484 17.5 15.1387 17.5 15.8332C17.5 16.5276 17.2569 17.1179 16.7708 17.604C16.2847 18.0901 15.6944 18.3332 15 18.3332ZM15 4.99984C15.2361 4.99984 15.4342 4.91984 15.5942 4.75984C15.7542 4.59984 15.8339 4.40206 15.8333 4.1665C15.8333 3.93039 15.7533 3.73234 15.5933 3.57234C15.4333 3.41234 15.2356 3.33262 15 3.33317C14.7639 3.33317 14.5658 3.41317 14.4058 3.57317C14.2458 3.73317 14.1661 3.93095 14.1667 4.1665C14.1667 4.40261 14.2467 4.60067 14.4067 4.76067C14.5667 4.92067 14.7644 5.00039 15 4.99984ZM5 10.8332C5.23611 10.8332 5.43417 10.7532 5.59417 10.5932C5.75417 10.4332 5.83389 10.2354 5.83333 9.99984C5.83333 9.76373 5.75333 9.56567 5.59333 9.40567C5.43333 9.24567 5.23556 9.16595 5 9.1665C4.76389 9.1665 4.56583 9.2465 4.40583 9.4065C4.24583 9.5665 4.16611 9.76428 4.16667 9.99984C4.16667 10.2359 4.24667 10.434 4.40667 10.594C4.56667 10.754 4.76444 10.8337 5 10.8332ZM15 16.6665C15.2361 16.6665 15.4342 16.5865 15.5942 16.4265C15.7542 16.2665 15.8339 16.0687 15.8333 15.8332C15.8333 15.5971 15.7533 15.399 15.5933 15.239C15.4333 15.079 15.2356 14.9993 15 14.9998C14.7639 14.9998 14.5658 15.0798 14.4058 15.2398C14.2458 15.3998 14.1661 15.5976 14.1667 15.8332C14.1667 16.0693 14.2467 16.2673 14.4067 16.4273C14.5667 16.5873 14.7644 16.6671 15 16.6665Z"
                            fill="url(#paint0_linear_572_2474)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_572_2474"
                            x1="-0.446428"
                            y1="23.4614"
                            x2="26.4985"
                            y2="5.75036"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.102403" stop-color="#3D3D3D" />
                            <stop offset="0.896322" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="home-agent-cards">
                    <img src={OurAgentsImg3} alt="Agent" />
                    <h3>Agent Name</h3>
                    <h4>Commercial Broker</h4>
                    <span>
                      Whether it is working with a first time homebuyer, a
                      luxury home listing or a seasoned..
                    </span>
                    <div className="home-agent-cards-icons">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M16.5036 3.89648H4.30648C3.76262 3.89648 3.24104 4.11253 2.85647 4.4971C2.47191 4.88167 2.25586 5.40325 2.25586 5.94711V14.8632C2.25586 15.4071 2.47191 15.9287 2.85647 16.3132C3.24104 16.6978 3.76262 16.9139 4.30648 16.9139H16.5036C17.0475 16.9139 17.569 16.6978 17.9536 16.3132C18.3382 15.9287 18.5542 15.4071 18.5542 14.8632V5.94711C18.5542 5.40325 18.3382 4.88167 17.9536 4.4971C17.569 4.11253 17.0475 3.89648 16.5036 3.89648ZM4.30648 4.71673H16.5036C16.8141 4.71584 17.1132 4.83322 17.3403 5.04501C17.5673 5.25679 17.7051 5.54709 17.7258 5.85688C15.6998 6.93961 13.6655 8.01414 11.6313 9.09687C11.3561 9.26933 11.0649 9.41492 10.7619 9.5316C10.5239 9.57856 10.2787 9.57432 10.0425 9.51916C9.80631 9.46401 9.58458 9.3592 9.39204 9.2117C8.22728 8.59652 7.06252 7.97313 5.90597 7.35794C4.97089 6.86579 4.0194 6.36544 3.08431 5.86508C3.10334 5.55398 3.24042 5.26187 3.46758 5.04844C3.69473 4.83501 3.9948 4.71636 4.30648 4.71673ZM17.734 14.8632C17.734 15.1895 17.6044 15.5025 17.3736 15.7332C17.1429 15.964 16.8299 16.0936 16.5036 16.0936H4.30648C3.98017 16.0936 3.66722 15.964 3.43648 15.7332C3.20574 15.5025 3.07611 15.1895 3.07611 14.8632V6.79607C5.0119 7.81318 6.93949 8.84669 8.87528 9.87201C9.22114 10.0841 9.59346 10.2495 9.98262 10.3642C10.5522 10.4568 11.1359 10.3371 11.6231 10.0279C12.8125 9.40446 13.9936 8.77287 15.183 8.14948C16.0361 7.69014 16.8809 7.24721 17.734 6.79607V14.8632Z"
                            fill="#B0B0B0"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M15.9451 11.8111L12.6166 10.3217C12.4875 10.2658 12.3466 10.243 12.2065 10.2553C12.0665 10.2677 11.9317 10.3147 11.8144 10.3922C11.805 10.3981 11.7961 10.4047 11.7876 10.4119L10.0394 11.9021C10.0005 11.9258 9.95639 11.9396 9.91089 11.9421C9.8654 11.9447 9.81997 11.936 9.77863 11.9169C8.63387 11.3642 7.44893 10.1885 6.89628 9.05709C6.87673 9.01606 6.86766 8.97083 6.86987 8.92543C6.87209 8.88004 6.88552 8.83591 6.90897 8.79698L8.40337 7.01992C8.41041 7.01146 8.41676 7.0023 8.4231 6.99313C8.50035 6.87598 8.54724 6.74145 8.55955 6.60166C8.57185 6.46187 8.54919 6.32121 8.49359 6.19236L7.00131 2.86945C6.92927 2.70116 6.80457 2.56077 6.64595 2.46938C6.48732 2.378 6.30333 2.34054 6.1216 2.36263C5.23453 2.47959 4.42036 2.91546 3.83118 3.58883C3.24199 4.26221 2.91808 5.12703 2.91993 6.02178C2.91993 11.4636 7.34672 15.8904 12.7886 15.8904C13.6833 15.8923 14.5481 15.5683 15.2215 14.9792C15.8949 14.39 16.3308 13.5758 16.4477 12.6887C16.4696 12.5078 16.4326 12.3247 16.342 12.1666C16.2514 12.0084 16.1122 11.8838 15.9451 11.8111ZM15.8901 12.6183C15.7906 13.3695 15.4208 14.0588 14.85 14.5572C14.2792 15.0556 13.5464 15.3291 12.7886 15.3265C7.65828 15.3265 3.48385 11.1521 3.48385 6.02178C3.48123 5.26397 3.7547 4.53115 4.25313 3.96032C4.75156 3.3895 5.44084 3.01975 6.19209 2.92021C6.20335 2.91951 6.21465 2.91951 6.22592 2.92021C6.28155 2.92068 6.33579 2.9376 6.38182 2.96883C6.42786 3.00006 6.46362 3.04421 6.48462 3.09573L7.97267 6.41864C7.99003 6.45925 7.99761 6.50337 7.99479 6.54745C7.99198 6.59153 7.97885 6.63433 7.95646 6.6724L6.46277 8.44876C6.45572 8.45792 6.44867 8.46638 6.44233 8.47625C6.36275 8.59794 6.31588 8.73809 6.30625 8.88317C6.29662 9.02825 6.32455 9.17336 6.38734 9.30451C6.9999 10.5585 8.26309 11.8125 9.53121 12.4251C9.66325 12.4875 9.80919 12.5146 9.95483 12.5039C10.1005 12.4931 10.2408 12.4449 10.3623 12.3638L10.3884 12.344L12.1386 10.8553C12.1761 10.8324 12.2184 10.8188 12.2622 10.8155C12.3059 10.8121 12.3498 10.8193 12.3903 10.8363L15.7181 12.3278C15.7743 12.3512 15.8214 12.3921 15.8524 12.4445C15.8834 12.4968 15.8966 12.5578 15.8901 12.6183Z"
                            fill="#B0B0B0"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g opacity="0.5">
                          <path
                            d="M15 18.3332C14.3056 18.3332 13.7153 18.0901 13.2292 17.604C12.7431 17.1179 12.5 16.5276 12.5 15.8332C12.5 15.7359 12.5069 15.6351 12.5208 15.5307C12.5347 15.4262 12.5556 15.3326 12.5833 15.2498L6.70833 11.8332C6.47222 12.0415 6.20833 12.2048 5.91667 12.3232C5.625 12.4415 5.31944 12.5004 5 12.4998C4.30556 12.4998 3.71528 12.2568 3.22917 11.7707C2.74306 11.2846 2.5 10.6943 2.5 9.99984C2.5 9.30539 2.74306 8.71512 3.22917 8.229C3.71528 7.74289 4.30556 7.49984 5 7.49984C5.31944 7.49984 5.625 7.559 5.91667 7.67734C6.20833 7.79567 6.47222 7.95873 6.70833 8.1665L12.5833 4.74984C12.5556 4.6665 12.5347 4.57289 12.5208 4.469C12.5069 4.36511 12.5 4.26428 12.5 4.1665C12.5 3.47206 12.7431 2.88178 13.2292 2.39567C13.7153 1.90956 14.3056 1.6665 15 1.6665C15.6944 1.6665 16.2847 1.90956 16.7708 2.39567C17.2569 2.88178 17.5 3.47206 17.5 4.1665C17.5 4.86095 17.2569 5.45123 16.7708 5.93734C16.2847 6.42345 15.6944 6.6665 15 6.6665C14.6806 6.6665 14.375 6.60761 14.0833 6.48984C13.7917 6.37206 13.5278 6.20873 13.2917 5.99984L7.41667 9.4165C7.44444 9.49984 7.46528 9.59373 7.47917 9.69817C7.49306 9.80261 7.5 9.90317 7.5 9.99984C7.5 10.0971 7.49306 10.1979 7.47917 10.3023C7.46528 10.4068 7.44444 10.5004 7.41667 10.5832L13.2917 13.9998C13.5278 13.7915 13.7917 13.6284 14.0833 13.5107C14.375 13.3929 14.6806 13.3337 15 13.3332C15.6944 13.3332 16.2847 13.5762 16.7708 14.0623C17.2569 14.5484 17.5 15.1387 17.5 15.8332C17.5 16.5276 17.2569 17.1179 16.7708 17.604C16.2847 18.0901 15.6944 18.3332 15 18.3332ZM15 4.99984C15.2361 4.99984 15.4342 4.91984 15.5942 4.75984C15.7542 4.59984 15.8339 4.40206 15.8333 4.1665C15.8333 3.93039 15.7533 3.73234 15.5933 3.57234C15.4333 3.41234 15.2356 3.33262 15 3.33317C14.7639 3.33317 14.5658 3.41317 14.4058 3.57317C14.2458 3.73317 14.1661 3.93095 14.1667 4.1665C14.1667 4.40261 14.2467 4.60067 14.4067 4.76067C14.5667 4.92067 14.7644 5.00039 15 4.99984ZM5 10.8332C5.23611 10.8332 5.43417 10.7532 5.59417 10.5932C5.75417 10.4332 5.83389 10.2354 5.83333 9.99984C5.83333 9.76373 5.75333 9.56567 5.59333 9.40567C5.43333 9.24567 5.23556 9.16595 5 9.1665C4.76389 9.1665 4.56583 9.2465 4.40583 9.4065C4.24583 9.5665 4.16611 9.76428 4.16667 9.99984C4.16667 10.2359 4.24667 10.434 4.40667 10.594C4.56667 10.754 4.76444 10.8337 5 10.8332ZM15 16.6665C15.2361 16.6665 15.4342 16.5865 15.5942 16.4265C15.7542 16.2665 15.8339 16.0687 15.8333 15.8332C15.8333 15.5971 15.7533 15.399 15.5933 15.239C15.4333 15.079 15.2356 14.9993 15 14.9998C14.7639 14.9998 14.5658 15.0798 14.4058 15.2398C14.2458 15.3998 14.1661 15.5976 14.1667 15.8332C14.1667 16.0693 14.2467 16.2673 14.4067 16.4273C14.5667 16.5873 14.7644 16.6671 15 16.6665Z"
                            fill="url(#paint0_linear_572_2474)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_572_2474"
                            x1="-0.446428"
                            y1="23.4614"
                            x2="26.4985"
                            y2="5.75036"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.102403" stop-color="#3D3D3D" />
                            <stop offset="0.896322" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="home-make-a-tour">
            <MakeATour />
          </div>
          <div className="home-property-news">
            <h2 className="home-subheadings">
              Latest Dubai &nbsp;
              <span className="home-colored-text">Property News</span>
            </h2>
            <div className="home-property-news-section">
              <PropertyNewsCard
                bgImg={PropertyNewsCardImg1}
                heading="Why Buy Properties in Dubai?"
                readMoreLink="/blog/0"
              />
              <PropertyNewsCard
                bgImg={PropertyNewsCardImg2}
                heading="Unlocking the Dubai Real Estate Market: A Guide by Your Trusted Real Estate Agent"
                readMoreLink="/blog/1"
              />
              <PropertyNewsCard
                bgImg={PropertyNewsCardImg3}
                heading="Why Investing in Dubai Real Estate is Incredibly Profitable"
                readMoreLink="/blog/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
