import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import "./Blog.css";

import MakeATour from "../../Components/Make A Tour/MakeATour";
import BannerNew from "../../Components/Banner Component/BannerNew";

import PropertyNewsCard from "../../Components/Property News Card/PropertyNewsCard";

import PropertyNewsCardImg1 from "../../Assets/Home/PropertyNewsCardImg1.jpeg";
import PropertyNewsCardImg2 from "../../Assets/Home/PropertyNewsCardImg2.jpeg";
import PropertyNewsCardImg3 from "../../Assets/Home/PropertyNewsCardImg3.jpeg";

import BlogBannerImg from "../../Assets/Blog/BlogBannerImg.jpeg";

function Blog() {
  const { pathname } = useLocation();
  const [blogId, setBlogId] = useState(null);

  const blogs = [
    {
      id: "1",
      heading: "Why Buy Properties in Dubai?",
      paragraphs: [
        {
          heading: "",
          text: [
            "Dubai, the glittering jewel of the United Arab Emirates, has long been a magnet for investors and property buyers from around the world. Known for its iconic skyline, luxury lifestyle, and business-friendly environment, Dubai offers a unique set of advantages that make it a top choice for those considering property investments. In this article, we will explore the reasons why buying properties in Dubai is a smart and lucrative choice.",
          ],
        },
        {
          heading: "Stable Economy: ",
          text: [
            "Dubai's economy is known for its resilience and stability. The city has diversified its economy beyond oil and gas, focusing on sectors such as tourism, finance, real estate, and technology. This diversification has helped Dubai weather economic downturns better than many other regions, making it a safe haven for investors.",
          ],
        },
        {
          heading: "Tax Benefits: ",
          text: [
            "Dubai offers an attractive tax environment for property buyers. There is no income tax, no capital gains tax, and no property tax in Dubai. This means that you can enjoy the returns on your property investments without the burden of heavy taxes.",
          ],
        },
        {
          heading: "Booming Real Estate Market: ",
          text: [
            "Dubai's real estate market has been consistently growing. While there have been occasional fluctuations, the overall trend has been upward, making it an ideal place for capital appreciation. Whether you're looking for residential or commercial properties, Dubai has a wide range of options to suit your investment goals.",
          ],
        },
        {
          heading: "Strategic Location: ",
          text: [
            "Dubai's strategic location at the crossroads of Europe, Asia, and Africa makes it a global business hub. The city's world-class infrastructure, including a modern airport and a busy seaport, facilitates international trade and commerce, attracting multinational companies and expatriates alike.",
          ],
        },
        {
          heading: "Diverse Property Options: ",
          text: [
            "Dubai offers a diverse range of property options to cater to different budgets and preferences. From luxury apartments in iconic skyscrapers to affordable suburban homes, Dubai's real estate market has something for everyone. This diversity ensures that there's always a demand for properties in the city.",
          ],
        },
        {
          heading: "Tourism Hub: ",
          text: [
            "Dubai is one of the world's most popular tourist destinations. Its year-round sunshine, stunning beaches, and numerous attractions draw millions of visitors annually. Investing in properties for short-term rentals through platforms like Airbnb can yield high returns, especially during peak tourist seasons.",
          ],
        },
        {
          heading: "World-Class Infrastructure: ",
          text: [
            "Dubai is known for its state-of-the-art infrastructure, which includes world-class roads, public transportation, healthcare facilities, and educational institutions. These factors not only enhance the quality of life for residents but also increase the attractiveness of the city to investors.",
          ],
        },
        {
          heading: "Political Stability: ",
          text: [
            "The United Arab Emirates, of which Dubai is a part, is known for its political stability and pro-business policies. Investors can have confidence in the legal framework and property rights protection offered by the government.",
          ],
        },
        {
          heading: "Quality of Life: ",
          text: [
            "Dubai is renowned for its high standard of living. The city offers a wide range of entertainment options, fine dining, shopping, and cultural experiences. Its cosmopolitan environment welcomes people from all over the world, fostering a rich and diverse community.",
          ],
        },
        {
          heading: "Residency Benefits: ",
          text: [
            "Investing in certain types of properties in Dubai can also grant you residency privileges under the UAE's Golden Visa program. This program offers long-term residency to investors and their families, making Dubai an even more attractive destination for property buyers.",
          ],
        },
        {
          heading: "In Conclusion",
          text: [
            "In conclusion, buying properties in Dubai is a wise choice for investors looking for stability, tax benefits, and strong capital appreciation potential. With its strategic location, booming real estate market, and world-class infrastructure, Dubai continues to attract investors from all corners of the globe. Whether you're seeking a place to call home, a holiday property, or a lucrative investment opportunity, Dubai offers a wealth of options to meet your needs. It's no wonder that Dubai remains a top destination for property buyers seeking both financial growth and a high-quality lifestyle.",
          ],
        },
      ],
    },
    {
      id: "2",
      heading:
        "Unlocking the Dubai Real Estate Market: A Guide by Your Trusted Real Estate Agent",
      paragraphs: [
        {
          heading: "",

          text: [
            "Dubai, the glittering gem of the United Arab Emirates, has long been a beacon of opportunity and luxury. With its iconic skyline, pristine beaches, and a thriving economy, it's no wonder that people from around the world are drawn to this city. As a real estate agent in Dubai, I'm here to help you navigate this dynamic and ever-evolving market. The Dubai real estate market is unique in many ways. It offers a diverse range of properties, from luxurious waterfront villas to sleek, modern apartments in the heart of the city. Whether you're looking for a place to call home or an investment opportunity, Dubai has something for everyone.",
          ],
        },
        {
          heading: "Understanding the Dubai Real Estate Landscape",
          text: [
            "To succeed in the Dubai real estate market, it's essential to understand its nuances. The market is influenced by various factors, including economic trends, government policies, and global events. As a seasoned real estate agent in Dubai, I keep a close eye on these factors to provide my clients with the most up-to-date information and insights.",
            "One of the key attractions of Dubai's real estate market is its favorable regulatory environment. The government has implemented measures to make it easier for foreigners to invest in property, including long-term residency visas and reduced transaction costs. These initiatives have made Dubai a hotbed for international investors seeking a safe and lucrative market.",
          ],
        },
        {
          heading: "Investment Opportunities Abound",
          text: [
            "Dubai's real estate market is known for its strong rental yields and robust capital appreciation. Whether you're looking to invest in residential or commercial properties, the potential for growth is substantial. Off-plan properties, in particular, offer attractive payment plans and early-bird discounts, making them an appealing option for investors.",
            "Moreover, Dubai's status as a global business hub means there is a constant influx of professionals and entrepreneurs seeking accommodation. This steady demand for rental properties ensures a stable income stream for landlords.",
          ],
        },
        {
          heading: "Finding Your Dream Home",
          text: [
            "For those looking to make Dubai their permanent residence, the city offers an array of stunning neighborhoods to choose from. Whether you prefer the vibrant urban lifestyle of Downtown Dubai, the serenity of the Palm Jumeirah, or the family-friendly communities in Dubai Hills Estate, there's a perfect place for you.",
            "As a real estate agent in Dubai, I understand the importance of finding the right home that aligns with your lifestyle and preferences. I work tirelessly to match my clients with properties that meet their criteria, ensuring that they find their dream home in this dynamic city.",
          ],
        },
        {
          heading: "Navigating the Legalities",
          text: [
            "Navigating the legalities of buying or selling property in Dubai can be a daunting task for newcomers. However, with the right guidance, it can be a smooth process. From understanding the legal requirements and documentation to negotiating the best deal, I'm here to provide expert guidance every step of the way.",
          ],
        },
        {
          heading: "In Conclusion",
          text: [
            "Dubai's real estate market is a world of possibilities waiting to be explored. As a seasoned real estate agent in Dubai, I am committed to helping you unlock these opportunities. Whether you're an investor looking for the next big venture or a family searching for the perfect home, I'm here to make your real estate dreams in Dubai a reality.",
            "Contact me today, and let's embark on this exciting journey together. Dubai's real estate market is ready to welcome you with open arms, and I'm here to ensure you make the most of it.",
          ],
        },
      ],
    },
    {
      id: "3",
      heading: "Why Investing in Dubai Real Estate is Incredibly Profitable",
      paragraphs: [
        {
          heading: "",

          text: [
            "Dubai, with its iconic skyline, stunning beaches, and thriving economy, has long been a magnet for investors from around the world. In recent years, the Dubai real estate market has emerged as one of the most profitable and sought-after destinations for property investment. Let's explore why investing in Dubai's real estate market is not just a smart choice but also incredibly profitable.",
          ],
        },
        {
          heading: "Strong and Stable Market Fundamentals:",

          text: [
            "Dubai's real estate market is built on strong fundamentals that make it resilient to economic fluctuations. The city's strategic location as a global business and tourism hub ensures a steady stream of demand for properties. The government's proactive policies and infrastructure investments further boost market stability, making it a safe haven for investors.",
          ],
        },
        {
          heading: "Tax Benefits and Incentives:",

          text: [
            "Dubai offers a favorable tax environment for investors. There are no property taxes, capital gains taxes, or income taxes on rental income, making it a tax-efficient investment destination. Additionally, the introduction of long-term residency visas for investors and retirees has attracted a wave of foreign buyers, contributing to the growth of the real estate market.",
          ],
        },
        {
          heading: "High Rental Yields:",

          text: [
            "One of the primary reasons investors flock to Dubai is the high rental yields the market offers. The city's growing population, coupled with its status as a global business hub, ensures a strong demand for rental properties. Landlords can benefit from attractive rental returns, making their real estate investments highly profitable.",
          ],
        },
        {
          heading: "Robust Capital Appreciation:",

          text: [
            "Dubai's property market has witnessed consistent capital appreciation over the years. The city's rapid economic growth, ambitious development projects, and increasing international recognition have driven property values higher. Savvy investors can capitalize on this appreciation by buying properties at opportune times and selling them for a substantial profit.",
          ],
        },
        {
          heading: "Variety of Investment Options:",

          text: [
            "Dubai offers a diverse range of investment options to cater to different investor preferences. Whether you're interested in luxury waterfront villas, high-rise apartments in the heart of the city, or commercial properties, you'll find plenty of opportunities to diversify your portfolio. The variety ensures that there's something for every investor in Dubai's real estate market.",
          ],
        },
        {
          heading: "Off-Plan Properties:",

          text: [
            "Investing in off-plan properties in Dubai can be particularly profitable. Developers often offer attractive payment plans, allowing investors to secure properties with minimal upfront costs. Additionally, early-bird discounts and the potential for capital appreciation make off-plan properties a lucrative option for investors looking for long-term gains.",
          ],
        },
        {
          heading: "Thriving Tourism Industry:",

          text: [
            "Dubai's booming tourism industry is a driving force behind the profitability of its real estate market. The city attracts millions of visitors every year, creating a constant demand for short-term rentals, such as holiday homes and serviced apartments. This presents an opportunity for investors to generate substantial rental income, especially during peak tourist seasons.",
          ],
        },
        {
          heading: "Resilience to Economic Shocks:",

          text: [
            "Dubai has demonstrated remarkable resilience to economic shocks and global crises. The city's diversified economy, strong financial institutions, and government initiatives to support businesses and investors have helped it weather economic challenges. This resilience provides a sense of security to real estate investors.",
          ],
        },
        {
          heading: "In Conclusion",

          text: [
            "In conclusion, investing in Dubai's real estate market is not just profitable; it's a strategic move for long-term wealth accumulation. The city's strong fundamentals, tax benefits, high rental yields, and opportunities for capital appreciation make it a compelling destination for investors worldwide. If you're considering real estate investment, Dubai should be at the top of your list, offering a world of potential for financial success.",
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const inputString = pathname;
    const regex = /(\d+)$/; // Regular expression to match the last number
    const match = inputString.match(regex);

    if (match) {
      const extractedNumber = parseInt(match[0], 10); // Convert the matched string to an integer
      if (extractedNumber < 0 || extractedNumber >= blogs.length) {
        setBlogId(null);
      } else {
        setBlogId(extractedNumber); // Update the state with the extracted number
      }

      //   console.log("new blog id=", blogId);
    } else if (inputString == "/blog") {
      setBlogId(-1);
    }
  }, [pathname]);

  if (blogId == null) {
    return (
      <div className="blog-section">
        <div className="blog-main-section">
          <BannerNew
            image={BlogBannerImg}
            heading={`${blogId ? `${blogs[blogId].heading}` : "Blog"} `}
            blogId={blogId}
          />
          <div className="blog-blog-section">
            <div className="blog-blog-heading">
              {/* for testing taking blogs[0] */}
              <h2>Blog Not Found!</h2>
            </div>
          </div>
          <MakeATour />
        </div>
      </div>
    );
  }

  return (
    <div className="blog-section">
      {blogId === -1 ? (
        <div className="blog-main-section">
          <BannerNew image={BlogBannerImg} heading={`Blog`} />
          <div className="blog-blog-section">
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
            <MakeATour />
          </div>
        </div>
      ) : (
        <div className="blog-main-section">
          <BannerNew
            image={BlogBannerImg}
            heading={`${blogs[blogId].heading}`}
            blogId={blogId}
          />
          <div className="blog-blog-section">
            <div className="blog-blog-heading">
              {/* for testing taking blogs[0] */}
              <h2>{blogs[blogId].heading}</h2>
            </div>
            <div className="blog-blog-content">
              {blogs[blogId].paragraphs.map((data, index) => (
                <>
                  <h3 key={index}>{data.heading}</h3>
                  {data.text.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </>
              ))}
            </div>
          </div>
          <MakeATour />
        </div>
      )}
    </div>
  );
}

export default Blog;
