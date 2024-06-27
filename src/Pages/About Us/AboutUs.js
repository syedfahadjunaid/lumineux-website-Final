import React from "react";
import "./AboutUs.css";

import BreadCrumbs from "../../Components/Bread Crumbs/BreadCrumbs";
import FaqCard from "../../Components/FAQ Card/FaqCard";
import EnquiryCard from "../../Components/Enquiry Card/EnquiryCard";

import AboutUsBannerImg from "../../Assets/About Us/AboutUsBannerImg.jpeg";
import AboutUsIntroImg from "../../Assets/About Us/AboutUsIntroImg.jpeg";
import AboutUsGetInTouchImg from "../../Assets/About Us/AboutUsGetInTouchImg.jpeg";

import AboutUsMain1 from "../../Assets/About Us/AboutUSMain1.jpg";
import AboutUsMain2 from "../../Assets/About Us/AboutUSMain2.jpg";
import AboutUsMain3 from "../../Assets/About Us/AboutUSMain3.jpeg";

function AboutUs() {
  const aboutUsBannerStyle = {
    backgroundImage: `url("${AboutUsBannerImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "background-size 0.5s ease-in-out",
  };

  const aboutUsFaqData = [
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
    },
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
    },
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name. ",
    },
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
    },
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
    },
  ];

  const renderedFaqCards = aboutUsFaqData.map((item, index) => (
    <FaqCard key={index} faqQuestion={item.question} faqAnswer={item.answer} />
  ));

  return (
    <div className='about-us-section'>
      <div className='about-us-banner' style={aboutUsBannerStyle}>
        <h1> More About Us</h1>
        <BreadCrumbs />
      </div>
      <div className='about-us-main-section'>
        <div className='about-us-intro'>
          <div className='about-us-intro-head'>
            <h2>Our Story</h2>
            <span>
              We are Lumineux Properties, a renowned real estate agency located
              in Dubai, dedicated to meeting the property requirements of our
              valued clients.
            </span>
          </div>
          <div className='about-us-intro-main-content'>
            <div className='about-us-intro-content-right'>
              <p>
                Since its modest inception, Lumineux Properties has rapidly
                grown to become a leading property services firm, with a strong
                foundation in the UAE property market. With decades of
                collective experience and unwavering dedication, our team has
                cultivated extensive knowledge of the ever-evolving real estate
                landscape in the United Arab Emirates. This deep-rooted
                expertise allows us to provide our clients with invaluable
                insights and guidance, ensuring their real estate endeavors are
                met with seasoned professionalism and success. Our core
                objective was to introduce the esteemed international standards
                to Dubai. Fast forward to today, we've grown into a team of
                professionals, proficient in multiple languages, and experts in
                handling a diverse range of property transactions in Dubai. Our
                top priority remains ensuring that our clients experience a
                seamless and customized process designed to meet their unique
                needs.
              </p>
              <br />

              <p>
                Being a real estate company in Dubai, we established clear
                objectives from the outset whenever we undertake a service for
                our clients. Our foremost priority is to foster an open,
                transparent relationship with our clients. We are dedicated to
                diligently keeping you well-informed throughout the entire
                process, whether it's a sale or purchase.
              </p>
            </div>
          </div>
          <div className='about-us-intro-founders-section'>
            <div className='about-us-founders-card'>
              <div className='about-us-image-left'>
                <img src={AboutUsMain3} alt='About Us' />
              </div>
              <div className='about-us-founders-card-content'>
                <h3>About Director - Waqar Ahmed, CFA</h3>
                <p>
                  Meet our accomplished director, Mr. Waqar Ahmed, a Chartered
                  Financial Analyst (CFA) hailing from the United States. With
                  his strong financial background and CFA accreditation, Waqar
                  Ahmed plays a pivotal role in managing the Lumineux Group,
                  overseeing three dynamic companies: Lumineux Energies,
                  Lumineux Industries, and Lumineux Properties.
                </p>
                <p>
                  As a CFA, Mr. Ahmed showcases his expertise in financial
                  analysis, investment management, and strategic financial
                  planning. Under his visionary leadership, the Lumineux Group
                  has flourished and diversified across various sectors.
                </p>
                <p>
                  Lumineux Energies is at the forefront of sustainable and
                  renewable energy initiatives, driven by Mr. Ahmed's commitment
                  to environmental responsibility. Lumineux Industries excels in
                  manufacturing, maintaining high industry standards, and
                  contributing significantly to economic growth.
                </p>
                <p>
                  Lumineux Properties, our real estate division, embodies Mr.
                  Ahmed's dedication to excellence in property development,
                  delivering high-value, diverse real estate solutions. Waqar
                  Ahmed's leadership, financial acumen, and passion for
                  sustainability position Lumineux Properties as an industry
                  leader, charting a path towards a brighter, more sustainable
                  future.
                </p>
              </div>
            </div>
            <div className='about-us-founders-card-2'>
              <div className='about-us-image-left'>
                <img src={AboutUsMain1} alt='About Us' />
              </div>
              <div className='about-us-founders-card-content'>
                <h3>Meet Waqas Ijaz - Real Estate Visionary Since 2004</h3>
                <p>
                  Waqas Ijaz, our esteemed professional, boasts an impressive
                  career in the real estate industry, spanning over 17 years.
                  Armed with a Bachelor's degree in Business Administration
                  (BBA) with a focus on Business Management, Waqas embarked on
                  his journey in 2004, contributing significantly to the real
                  estate market.
                </p>
                <p>
                  Since 2015, he has been successfully managing Lumineux
                  Energies, driving the company's commitment to sustainable and
                  renewable energy solutions. In 2020, Waqas took the reins at
                  Lumineux Industries, ensuring it continues to maintain high
                  industry standards, fostering economic growth.
                </p>
                <p>
                  With an unbroken dedication to the real estate market since
                  his career's inception, Waqas Ijaz is a seasoned expert in the
                  industry. His extensive experience, paired with his
                  educational background, positions him as a stalwart in the
                  sector. His leadership fosters sustainability, innovation, and
                  economic prosperity. Waqas's passion for excellence shines
                  through in his role at Lumineux Energies and Lumineux
                  Industries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='about-us-our-vision-section'>
          <div className='about-us-our-vision-top'>
            <div className='about-us-our-vision-card'>
              <h2>Our Mission</h2>
              <p>
                Our goal is to provide cutting-edge services leveraging our
                trusted expertise, helping clients discover effective solutions
                for their real estate needs.
              </p>
              <p>
                We understand that clients aren't merely seeking a property to
                purchase; they are seeking a place to create cherished memories,
                whether for residential or commercial purposes. Our
                responsibility is to identify the ideal property and ensure the
                client's journey is as seamless and enjoyable as can be.
              </p>
            </div>
            <div className='about-us-our-vision-card'>
              <h2>Our Vision</h2>
              <p>
                We aspire to establish Lumineux Properties as the leading real
                estate firm in Dubai, renowned for our unwavering integrity,
                professionalism, and esteemed reputation.
              </p>
              <p>
                Our team places paramount importance on building meaningful and
                trusted relationships above all else, prioritizing them over any
                mere transactions. We are committed to further expanding the
                company by creating innovative divisions that cater to our
                clients' evolving demands.
              </p>
            </div>
          </div>
          <div className='about-us-our-vision-bottom'>
            <div className='about-us-our-vision-card vision-core-values-card'>
              <h2>Core Values</h2>
              <p>
                Lumineux Properties firmly believes in the significance of
                adhering to a set of values and principles that serve as our
                compass in both life and business interactions. These values
                directly reflect the core principles that the company stands
                for.
              </p>
              <div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='112'
                    height='112'
                    viewBox='0 0 112 112'
                    fill='none'>
                    <path
                      d='M56 0C25.0724 0 0 25.0724 0 56C0 86.9276 25.0724 112 56 112C86.9276 112 112 86.9276 112 56C111.962 25.0879 86.9121 0.0382811 56 0ZM108.211 54.1333H96.5253C96.3421 54.1306 96.1598 54.1561 95.9839 54.2081C95.5081 54.3503 95.1079 54.6766 94.8737 55.115C94.6385 55.5525 94.5884 56.0656 94.7333 56.5414C94.8673 56.9762 94.974 57.4182 95.0505 57.8667C95.148 58.4837 95.1982 59.1081 95.2 59.7333C95.2 65.9185 90.1852 70.9333 84 70.9333C77.8148 70.9333 72.8 65.9185 72.8 59.7333C72.8018 59.1081 72.852 58.4837 72.9495 57.8667C73.026 57.4182 73.1327 56.9762 73.2667 56.5414C73.4116 56.0656 73.3615 55.5525 73.1263 55.115C72.8921 54.6766 72.4919 54.3503 72.0161 54.2081C71.8402 54.1561 71.6579 54.1306 71.4747 54.1333H57.8667V44.3333C59.0853 44.6505 60.3404 44.8073 61.6 44.8C69.8478 44.8 76.5333 38.1145 76.5333 29.8667C76.5333 21.6189 69.8478 14.9333 61.6 14.9333C60.3395 14.9361 59.0853 15.101 57.8667 15.4228V3.77982C85.2478 4.78516 107.211 26.7522 108.211 54.1333ZM54.1333 3.77982V17.4699H54.2382C54.0768 17.9293 54.1069 18.4342 54.3202 18.8717C54.765 19.7978 55.8751 20.1897 56.803 19.7495C60.9574 17.7762 65.8966 18.5445 69.2562 21.6863C72.6159 24.8272 73.7133 29.7035 72.0234 33.9819C70.3336 38.2594 66.2001 41.0694 61.6 41.0667C60.3267 41.0667 59.0643 40.8461 57.8667 40.4132C57.503 40.2947 57.1475 40.1507 56.803 39.9839C55.8751 39.5436 54.765 39.9355 54.3202 40.8616C54.1944 41.1104 54.1306 41.3857 54.1333 41.6637V54.1333H42.8212C42.896 53.5135 42.9342 52.891 42.9333 52.2667C42.9333 44.0189 36.2478 37.3333 28 37.3333C19.7522 37.3333 13.0667 44.0189 13.0667 52.2667C13.0658 52.891 13.104 53.5135 13.1788 54.1333H3.77982C4.7888 26.7531 26.7531 4.7888 54.1333 3.77982ZM54.1333 108.211C26.7522 107.211 4.78516 85.2478 3.77982 57.8667H15.4747C15.6579 57.8694 15.8402 57.8439 16.0161 57.7919C16.4919 57.6497 16.8921 57.3234 17.1263 56.885C17.3615 56.4475 17.4116 55.9344 17.2667 55.4586C17.1327 55.0238 17.026 54.5818 16.9495 54.1333C16.852 53.5163 16.8018 52.8919 16.8 52.2667C16.8 46.0815 21.8148 41.0667 28 41.0667C34.1852 41.0667 39.2 46.0815 39.2 52.2667C39.1982 52.8919 39.148 53.5163 39.0505 54.1333C38.974 54.5818 38.8673 55.0238 38.7333 55.4586C38.5884 55.9344 38.6385 56.4475 38.8737 56.885C39.1079 57.3234 39.5081 57.6497 39.9839 57.7919C40.1598 57.8439 40.3421 57.8694 40.5253 57.8667H54.1333V67.3121C53.5135 67.2374 52.891 67.1991 52.2667 67.2C44.0189 67.2 37.3333 73.8855 37.3333 82.1333C37.3333 90.3811 44.0189 97.0667 52.2667 97.0667C52.891 97.0676 53.5135 97.0293 54.1333 96.9546V108.211ZM57.8667 108.211V94.6586C57.8694 94.4754 57.8439 94.2931 57.7919 94.1172C57.6497 93.6414 57.3234 93.2413 56.885 93.007C56.4475 92.7719 55.9344 92.7217 55.4586 92.8667C55.0238 93.0006 54.5818 93.1073 54.1333 93.1839C53.5163 93.2814 52.8919 93.3315 52.2667 93.3333C46.0815 93.3333 41.0667 88.3185 41.0667 82.1333C41.0667 75.9482 46.0815 70.9333 52.2667 70.9333C52.8919 70.9352 53.5163 70.9853 54.1333 71.0828C54.5818 71.1594 55.0238 71.266 55.4586 71.4C55.9344 71.5449 56.4475 71.4948 56.885 71.2596C57.3234 71.0254 57.6497 70.6253 57.7919 70.1495C57.8439 69.9736 57.8694 69.7913 57.8667 69.6081V57.8667H69.1788C69.104 58.4865 69.0658 59.109 69.0667 59.7333C69.0667 67.9811 75.7522 74.6667 84 74.6667C92.2478 74.6667 98.9333 67.9811 98.9333 59.7333C98.9342 59.109 98.896 58.4865 98.8212 57.8667H108.211C107.234 85.256 85.256 107.234 57.8667 108.211Z'
                      fill='url(#paint0_linear_828_6515)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_828_6515'
                        x1='-1.12073e-06'
                        y1='-71.6559'
                        x2='281.114'
                        y2='6.15497'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Integrity</span>
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='110'
                    height='110'
                    viewBox='0 0 110 110'
                    fill='none'>
                    <path
                      d='M107.852 53.9301H102.844L92.6677 28.0262H101.38C102.566 28.0262 103.528 27.0641 103.528 25.8777C103.528 24.6913 102.566 23.7293 101.38 23.7293H65.5615C65.0276 21.1002 63.5336 18.816 61.4629 17.259V6.46293C61.4629 2.89223 58.5711 0 55 0C51.4364 0 48.5371 2.89932 48.5371 6.46293V17.2593C46.4662 18.816 44.9724 21.1002 44.4385 23.7295H8.61996C7.43359 23.7295 6.47152 24.6916 6.47152 25.8779C6.47152 27.0643 7.43359 28.0264 8.61996 28.0264H17.3323L7.1558 53.9301H2.14844C0.961856 53.9301 0 54.8921 0 56.0785V57.2316C0 68.4857 9.156 77.6417 20.4102 77.6417H20.5593C31.8134 77.6417 40.9694 68.4857 40.9694 57.2316V56.0785C40.9694 54.8919 40.0073 53.9301 38.821 53.9301H33.8134L23.6369 28.0262H44.4383C44.9722 30.6552 46.4662 32.9394 48.5369 34.4962V85.1189C43.412 87.0697 39.7555 91.6633 38.9819 97.0744H34.5063C29.7533 97.0744 25.8863 100.941 25.8863 105.694V107.852C25.8863 109.038 26.8484 110 28.0347 110H81.9648C83.1512 110 84.1133 109.038 84.1133 107.852V105.694C84.1133 100.941 80.2463 97.0744 75.4933 97.0744H71.0177C70.244 91.6633 66.5876 87.0699 61.4627 85.1189V34.4964C63.5336 32.9396 65.0274 30.6554 65.5613 28.0264H86.3627L76.1864 53.9301H71.1788C69.9924 53.9301 69.0304 54.8921 69.0304 56.0785V57.2316C69.0304 68.4857 78.1864 77.6417 89.4405 77.6417H89.5898C100.844 77.6417 110 68.4857 110 57.2316V56.0785C110 54.8921 109.038 53.9301 107.852 53.9301ZM20.5593 73.3451H20.4102C11.8592 73.3451 4.84279 66.6505 4.32738 58.2272H36.6422C36.1266 66.6505 29.11 73.3451 20.5593 73.3451ZM11.7724 53.9301L20.4847 31.7533L29.1971 53.9301H11.7724ZM52.8339 6.46293C52.8339 5.2684 53.8055 4.29688 55 4.29688C56.1958 4.29688 57.1661 5.26732 57.1661 6.46293V15.3192C55.7423 15.0275 54.2584 15.0275 52.8339 15.3192V6.46293ZM58.7791 88.7679C63.545 89.9944 66.8736 94.2936 66.8736 99.2228C66.8736 100.409 67.8356 101.371 69.022 101.371H75.4935C77.8774 101.371 79.8166 103.31 79.8166 105.694V105.703H30.1834V105.694C30.1834 103.31 32.1226 101.371 34.5065 101.371H40.978C42.1644 101.371 43.1264 100.409 43.1264 99.2228C43.1264 94.2936 46.455 89.9944 51.2209 88.7679C52.1703 88.5234 52.8339 87.6674 52.8339 86.6871V36.4362C54.2577 36.728 55.7416 36.728 57.1661 36.4362V86.6871C57.1661 87.6674 57.8297 88.5234 58.7791 88.7679ZM55 32.358C51.4267 32.358 48.5197 29.451 48.5197 25.8777C48.5197 22.3044 51.4267 19.3974 55 19.3974C58.5733 19.3974 61.4803 22.3044 61.4803 25.8777C61.4803 29.451 58.5733 32.358 55 32.358ZM89.5153 31.7535L98.2276 53.9303H80.803L89.5153 31.7535ZM89.5898 73.3451H89.4407C80.89 73.3451 73.8734 66.6505 73.358 58.2272H105.673C105.157 66.6505 98.1408 73.3451 89.5898 73.3451Z'
                      fill='url(#paint0_linear_828_6519)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_828_6519'
                        x1='-1.10071e-06'
                        y1='-70.3763'
                        x2='276.094'
                        y2='6.04506'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Fairness</span>
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='112'
                    height='112'
                    viewBox='0 0 112 112'
                    fill='none'>
                    <path
                      d='M105.064 95.2446C103.612 94.1579 102.037 93.3008 100.376 92.6826C102.697 90.7854 104.182 87.9016 104.182 84.6773C104.182 78.9771 99.5444 74.3396 93.8442 74.3396C88.144 74.3396 83.5065 78.9771 83.5065 84.6773C83.5065 87.9016 84.9912 90.7854 87.3119 92.6826C85.6509 93.3008 84.0757 94.1579 82.6241 95.2446C79.475 97.6027 77.1026 100.961 75.9443 104.702C75.4075 106.435 75.7138 108.262 76.7848 109.714C77.8556 111.167 79.5104 112 81.3247 112H106.363C108.178 112 109.832 111.167 110.903 109.714C111.974 108.262 112.28 106.435 111.743 104.702C110.585 100.961 108.213 97.6027 105.064 95.2446ZM87.0065 84.6773C87.0065 80.9069 90.0738 77.8396 93.8442 77.8396C97.6146 77.8396 100.682 80.9069 100.682 84.6773C100.682 88.4468 97.6157 91.5136 93.8464 91.5149C93.8455 91.5149 93.8449 91.5149 93.844 91.5149C93.8433 91.5149 93.8425 91.5149 93.8418 91.5149C90.0727 91.5136 87.0065 88.4468 87.0065 84.6773ZM108.086 107.637C107.682 108.186 107.054 108.5 106.363 108.5H81.3249C80.6343 108.5 80.0063 108.186 79.6023 107.637C79.198 107.09 79.0836 106.397 79.2877 105.737C81.2735 99.3243 87.122 95.0158 93.8418 95.0149H93.8442H93.8464C100.566 95.016 106.414 99.3245 108.4 105.737C108.604 106.397 108.49 107.089 108.086 107.637ZM29.3762 95.2446C27.9248 94.1579 26.3496 93.3008 24.6886 92.6826C27.0095 90.7854 28.494 87.9016 28.494 84.6773C28.494 78.9771 23.8567 74.3396 18.1565 74.3396C12.4563 74.3396 7.8188 78.9771 7.8188 84.6773C7.8188 87.9016 9.30346 90.7854 11.6244 92.6826C9.96343 93.3006 8.38821 94.1577 6.9368 95.2446C3.78746 97.603 1.41511 100.961 0.257051 104.701C-0.279762 106.434 0.0262696 108.261 1.09705 109.714C2.16805 111.167 3.82289 112 5.63743 112H30.6756C32.4899 112 34.1447 111.167 35.2155 109.714C36.2865 108.262 36.5927 106.435 36.0559 104.701C34.8976 100.961 32.5255 97.6027 29.3762 95.2446ZM11.319 84.6773C11.319 80.9069 14.3863 77.8396 18.1567 77.8396C21.9271 77.8396 24.9942 80.9069 24.9942 84.6773C24.9942 88.4468 21.9282 91.5136 18.1589 91.5149C18.158 91.5149 18.1574 91.5149 18.1565 91.5149C18.1558 91.5149 18.155 91.5149 18.1543 91.5149C14.3852 91.5136 11.319 88.4468 11.319 84.6773ZM32.3982 107.637C31.9942 108.186 31.3661 108.5 30.6756 108.5H5.63743C4.94683 108.5 4.3188 108.186 3.91477 107.637C3.51074 107.09 3.39633 106.397 3.60043 105.737C5.58602 99.3245 11.4345 95.016 18.1543 95.0149H18.1567H18.1589C24.8785 95.016 30.727 99.3245 32.7128 105.737C32.9171 106.397 32.8025 107.089 32.3982 107.637ZM81.3249 37.6604H106.363C108.178 37.6604 109.832 36.8272 110.903 35.3745C111.974 33.9218 112.28 32.0948 111.743 30.3618C110.585 26.6217 108.213 23.263 105.064 20.9048C103.612 19.8181 102.037 18.961 100.376 18.3428C102.697 16.4456 104.182 13.5618 104.182 10.3375C104.182 4.6375 99.5444 0 93.8442 0C88.144 0 83.5065 4.6375 83.5065 10.3377C83.5065 13.5621 84.9912 16.4458 87.3119 18.3431C85.6509 18.9612 84.0757 19.8183 82.6241 20.9051C79.475 23.2632 77.1026 26.6217 75.9443 30.3618C75.4075 32.095 75.7138 33.922 76.7848 35.3747C77.8558 36.8274 79.5106 37.6604 81.3249 37.6604ZM87.0065 10.3377C87.0065 6.56731 90.0738 3.5 93.8442 3.5C97.6146 3.5 100.682 6.56731 100.682 10.3377C100.682 14.1072 97.6157 17.1741 93.8464 17.1754C93.8455 17.1754 93.8449 17.1754 93.844 17.1754C93.8433 17.1754 93.8425 17.1754 93.8418 17.1754C90.0727 17.1741 87.0065 14.1072 87.0065 10.3377ZM79.2877 31.3974C81.2735 24.985 87.122 20.6763 93.8418 20.6754H93.8442H93.8464C100.566 20.6765 106.414 24.985 108.4 31.3974C108.604 32.0572 108.49 32.7497 108.086 33.2979C107.682 33.8461 107.054 34.1604 106.363 34.1604H81.3249C80.6343 34.1604 80.0063 33.8461 79.6023 33.2979C79.198 32.7497 79.0834 32.0569 79.2877 31.3974ZM5.63743 37.6604H30.6756C32.4899 37.6604 34.1445 36.8272 35.2155 35.3747C36.2865 33.9222 36.5927 32.095 36.0559 30.3618C34.8976 26.6217 32.5253 23.2632 29.3762 20.9051C27.9248 19.8183 26.3496 18.9612 24.6886 18.3431C27.0095 16.4458 28.494 13.5621 28.494 10.3377C28.4942 4.6375 23.8569 0 18.1567 0C12.4565 0 7.81902 4.6375 7.81902 10.3377C7.81902 13.5623 9.30368 16.4458 11.6246 18.3431C9.96364 18.9612 8.38843 19.8183 6.93702 20.9051C3.78746 23.2632 1.41533 26.6219 0.25727 30.3618C-0.279543 32.0948 0.0264884 33.922 1.09727 35.3747C2.16805 36.8272 3.82289 37.6604 5.63743 37.6604ZM11.319 10.3377C11.319 6.56731 14.3866 3.5 18.1567 3.5C21.9269 3.5 24.9942 6.56731 24.9942 10.3377C24.9942 14.1072 21.9282 17.1741 18.1589 17.1754C18.158 17.1754 18.1574 17.1754 18.1565 17.1754C18.1558 17.1754 18.155 17.1754 18.1543 17.1754C14.3852 17.1741 11.319 14.1072 11.319 10.3377ZM3.60043 31.3972C5.58602 24.9848 11.4345 20.6763 18.1543 20.6754H18.1567H18.1589C24.8785 20.6765 30.727 24.985 32.7128 31.3974C32.9171 32.0572 32.8025 32.7499 32.3982 33.2979C31.9942 33.8461 31.3661 34.1604 30.6756 34.1604H5.63743C4.94683 34.1604 4.3188 33.8461 3.91477 33.2979C3.51074 32.7497 3.39611 32.0572 3.60043 31.3972ZM42.8142 17.5917C42.8142 16.6252 43.5978 15.8417 44.5642 15.8417H66.3596L60.8878 11.349C60.1407 10.7356 60.0325 9.63287 60.6458 8.88584C61.259 8.13881 62.3617 8.03053 63.1087 8.64391L72.3595 16.2391C72.7644 16.5716 72.9991 17.068 72.9991 17.5917C72.9991 18.1153 72.7646 18.6119 72.3595 18.9442L63.1087 26.5396C62.7832 26.8069 62.3901 26.9371 61.9995 26.9371C61.4937 26.9371 60.9919 26.719 60.6458 26.2977C60.0325 25.5507 60.1407 24.4479 60.8878 23.8346L66.3596 19.3417H44.5642C43.5978 19.3417 42.8142 18.5581 42.8142 17.5917ZM96.1586 42.3765V64.1721L100.651 58.7C101.264 57.953 102.367 57.8447 103.114 58.4579C103.861 59.0712 103.969 60.174 103.356 60.9208L95.7609 70.1717C95.4284 70.5766 94.9323 70.8113 94.4084 70.8113C93.8845 70.8113 93.3883 70.5766 93.0558 70.1719L85.4604 60.921C84.847 60.174 84.9553 59.0712 85.7023 58.4579C86.4494 57.8449 87.5521 57.9532 88.1652 58.6998L92.6581 64.1721V42.3765C92.6581 41.41 93.4417 40.6265 94.4081 40.6265C95.3746 40.6265 96.1586 41.41 96.1586 42.3765ZM69.1861 94.4083C69.1861 95.3748 68.4025 96.1583 67.4361 96.1583H45.6407L51.1127 100.651C51.8597 101.264 51.968 102.367 51.3546 103.114C51.0088 103.535 50.507 103.754 50.001 103.754C49.6103 103.754 49.2172 103.623 48.8917 103.356L39.6408 95.7609C39.2359 95.4284 39.0012 94.932 39.0012 94.4083C39.0012 93.8847 39.2359 93.3881 39.6408 93.0558L48.8917 85.4604C49.6388 84.8472 50.7417 84.9557 51.3546 85.7023C51.968 86.4493 51.8597 87.5521 51.1127 88.1654L45.6407 92.6583H67.4361C68.4025 92.6583 69.1861 93.4419 69.1861 94.4083ZM15.8419 69.6235V47.8279L11.349 53.3002C10.7361 54.047 9.63311 54.1557 8.88608 53.5421C8.13905 52.9288 8.03077 51.826 8.64414 51.079L16.2396 41.8281C16.5721 41.4232 17.0682 41.1887 17.5921 41.1887C18.116 41.1887 18.6121 41.4234 18.9446 41.8281L26.5401 51.079C27.1535 51.826 27.0452 52.9288 26.2981 53.5421C25.9726 53.8094 25.5796 53.9396 25.1889 53.9396C24.6831 53.9396 24.1813 53.7215 23.8352 53.3002L19.3423 47.8279V69.6235C19.3423 70.59 18.5588 71.3735 17.5923 71.3735C16.6259 71.3735 15.8419 70.59 15.8419 69.6235ZM56 45.5122C50.2171 45.5122 45.5125 50.2171 45.5125 56C45.5125 61.7829 50.2174 66.4877 56 66.4877C61.7833 66.4877 66.488 61.7829 66.488 56C66.488 50.2171 61.7833 45.5122 56 45.5122ZM56 62.988C52.1472 62.988 49.0125 59.8533 49.0125 56.0002C49.0125 52.1472 52.1472 49.0125 56 49.0125C59.8531 49.0125 62.988 52.1472 62.988 56.0002C62.988 59.8533 59.8531 62.988 56 62.988ZM71.8421 64.022C72.2501 63.2179 72.5957 62.3849 72.8759 61.5293L78.152 60.6847C79.0009 60.5489 79.6252 59.8165 79.6252 58.9568V53.0432C79.6252 52.1835 79.0009 51.4511 78.152 51.3153L72.8755 50.4707C72.5953 49.6151 72.2499 48.7823 71.8421 47.9784L74.9764 43.6492C75.4806 42.9529 75.4042 41.9934 74.7965 41.3855L70.6149 37.2039C70.0066 36.5958 69.0469 36.5201 68.3511 37.0239L64.022 40.1583C63.2179 39.7502 62.3849 39.4048 61.5294 39.1245L60.685 33.8485C60.5491 32.9997 59.8165 32.3752 58.9571 32.3752H53.0434C52.1837 32.3752 51.4513 32.9997 51.3155 33.8485L50.4711 39.1245C49.6156 39.4048 48.7824 39.7502 47.9785 40.1581L43.6494 37.0239C42.9527 36.5197 41.9937 36.5962 41.3856 37.2039L37.2039 41.3855C36.5962 41.9934 36.5197 42.9529 37.0241 43.6494L40.1586 47.9784C39.7508 48.7821 39.4054 49.6151 39.125 50.4707L33.8487 51.3153C32.9998 51.4511 32.3755 52.1835 32.3755 53.0432V58.9568C32.3755 59.8165 32.9998 60.5489 33.8487 60.6847L39.125 61.5293C39.4052 62.3849 39.7506 63.2179 40.1586 64.0216L37.0241 68.3506C36.5197 69.0471 36.5962 70.0066 37.2039 70.6145L41.3856 74.7961C41.9939 75.404 42.9533 75.4799 43.6494 74.9761L47.9785 71.8417C48.7828 72.2498 49.6158 72.5952 50.4711 72.8755L51.3155 78.1515C51.4513 79.0003 52.1839 79.6248 53.0434 79.6248H58.9571C59.8168 79.6248 60.5491 79.0005 60.685 78.1515L61.5296 72.875C62.3849 72.5948 63.2181 72.2492 64.0218 71.8414L68.3511 74.9759C69.0469 75.4799 70.0064 75.4038 70.6149 74.7959L74.7965 70.6143C75.4042 70.0063 75.4806 69.0469 74.9764 68.3506L71.8421 64.022ZM69.1948 71.2663L65.1775 68.3576C64.6122 67.9483 63.8582 67.914 63.2586 68.2699C62.0972 68.9585 60.8473 69.4772 59.5429 69.8108C58.8674 69.9836 58.359 70.541 58.2488 71.2294L57.4648 76.125H54.5353L53.7517 71.2296C53.6415 70.541 53.1329 69.9834 52.4571 69.8108C51.1543 69.4778 49.9039 68.9594 48.7412 68.2699C48.1414 67.9142 47.3876 67.9488 46.8226 68.3576L42.8052 71.2663L40.7339 69.1948L43.6426 65.1774C44.0517 64.6124 44.0862 63.8584 43.7303 63.2583C43.0417 62.0972 42.5231 60.8471 42.1892 59.5424C42.0164 58.8672 41.4591 58.3586 40.7706 58.2483L35.8752 57.4648V54.5355L40.7709 53.7517C41.4593 53.6414 42.0169 53.1328 42.1895 52.4573C42.5231 51.1529 43.0417 49.9028 43.7303 48.7417C44.0862 48.1416 44.0517 47.3876 43.6426 46.8226L40.7339 42.8052L42.8055 40.7337L46.8226 43.6422C47.3876 44.0512 48.1416 44.0856 48.7415 43.7297C49.903 43.0408 51.1532 42.5224 52.4571 42.189C53.1329 42.0162 53.6415 41.4588 53.7517 40.7702L54.5355 35.875H57.465L58.2486 40.7702C58.3588 41.4588 58.8674 42.0162 59.5431 42.189C60.8464 42.5222 62.0966 43.0408 63.2588 43.7301C63.8591 44.086 64.6126 44.0512 65.1777 43.6424L69.195 40.7337L71.2664 42.8052L68.3579 46.8226C67.9488 47.3876 67.9142 48.1414 68.2701 48.7412C68.9585 49.9026 69.4772 51.1527 69.811 52.4573C69.9838 53.1328 70.5412 53.6412 71.2296 53.7515L76.1252 54.5353V57.4645L71.2298 58.2483C70.5412 58.3586 69.9838 58.8672 69.811 59.5429C69.4779 60.8464 68.9594 62.0966 68.2701 63.2586C67.9142 63.8586 67.9488 64.6124 68.3579 65.1774L71.2664 69.1948L69.1948 71.2663Z'
                      fill='url(#paint0_linear_828_6596)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_828_6596'
                        x1='-0.00195425'
                        y1='-71.656'
                        x2='281.121'
                        y2='6.16008'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Commitment</span>
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='130'
                    height='130'
                    viewBox='0 0 130 130'
                    fill='none'>
                    <g clip-path='url(#clip0_828_6598)'>
                      <path
                        d='M129.873 93.7445L115.654 56.593C115.477 56.1295 115.125 55.7536 114.675 55.5454C114.224 55.3372 113.71 55.3131 113.242 55.4783L98.2619 60.823C98.0213 60.9093 97.8005 61.043 97.6125 61.2163C97.4245 61.3895 97.2733 61.5987 97.1677 61.8314C97.0621 62.0642 97.0043 62.3158 96.9977 62.5713C96.9911 62.8268 97.0359 63.0811 97.1295 63.3189L98.432 66.6197L88.2097 71.4744L71.4316 68.3234C69.7976 68.0179 68.118 68.0528 66.4981 68.4259C64.8781 68.799 63.3526 69.5023 62.0168 70.4918L59.0181 72.716L57.0326 71.2865C55.5339 70.2134 53.8106 69.4956 51.9932 69.1877C50.1759 68.8797 48.3122 68.9897 46.5437 69.5092L40.1047 71.4262L31.6699 66.3836L32.881 63.3215C32.9745 63.0836 33.0193 62.8294 33.0128 62.5738C33.0062 62.3183 32.9484 62.0667 32.8428 61.834C32.7372 61.6012 32.5859 61.392 32.398 61.2188C32.21 61.0456 31.9892 60.9119 31.7486 60.8256L16.758 55.4783C16.2893 55.3116 15.774 55.3349 15.3223 55.5432C14.8706 55.7515 14.5183 56.1283 14.3408 56.593L0.127117 93.7445C-0.0491191 94.202 -0.041861 94.7099 0.147377 95.1622C0.336615 95.6145 0.693211 95.9762 1.14274 96.1719L15.3615 102.299C15.5957 102.4 15.8479 102.453 16.103 102.455C16.3582 102.457 16.6111 102.407 16.8467 102.309C17.0824 102.211 17.296 102.067 17.4748 101.885C17.6537 101.703 17.7941 101.487 17.8879 101.25L19.3199 97.6268L31.1062 104.269C30.312 105.422 29.9462 106.817 30.0724 108.211C30.1985 109.606 30.8086 110.912 31.7968 111.904C32.3528 112.46 33.0131 112.901 33.7399 113.201C34.4667 113.501 35.2456 113.655 36.032 113.653H36.1818C36.3151 115.143 37.0017 116.529 38.1062 117.537C39.2106 118.546 40.6529 119.104 42.1486 119.102H42.3035C42.4241 120.502 43.0356 121.814 44.03 122.807C44.586 123.363 45.2463 123.804 45.9731 124.104C46.6999 124.404 47.4788 124.558 48.2652 124.556H48.415C48.5157 125.691 48.9382 126.773 49.6327 127.677C50.3272 128.58 51.2651 129.266 52.336 129.655C53.4069 130.043 54.5666 130.118 55.6787 129.871C56.7908 129.624 57.8092 129.064 58.6144 128.258L60.8767 125.998L63.9388 128.283C65.2361 129.25 66.8389 129.716 68.4523 129.595C70.0656 129.473 71.5808 128.773 72.7189 127.623L72.9347 127.405C73.896 126.424 74.534 125.172 74.7629 123.817C75.9085 124.141 77.1196 124.153 78.2717 123.854C79.4239 123.555 80.4755 122.954 81.3187 122.113L81.4761 121.956C82.5446 120.89 83.2195 119.492 83.3906 117.993C84.5451 118.336 85.7712 118.361 86.9385 118.064C88.1058 117.766 89.1708 117.158 90.0201 116.304L90.1267 116.197C91.1684 115.165 91.8366 113.815 92.0259 112.361C93.0538 112.606 94.1251 112.604 95.1522 112.356C96.1793 112.108 97.133 111.62 97.9352 110.932C98.7375 110.244 99.3654 109.376 99.7678 108.399C100.17 107.422 100.335 106.363 100.25 105.31C100.217 104.902 100.146 104.497 100.039 104.101L111.107 98.683L112.123 101.242C112.216 101.48 112.356 101.697 112.535 101.879C112.713 102.061 112.927 102.206 113.163 102.304C113.399 102.402 113.652 102.451 113.907 102.449C114.163 102.447 114.415 102.393 114.649 102.291L128.868 96.1642C129.314 95.9667 129.667 95.6055 129.854 95.1552C130.041 94.7049 130.048 94.1998 129.873 93.7445ZM15.0644 98.0254L4.33688 93.3992L17.2277 59.6932L20.3888 60.818L14.2951 78.1394C14.1267 78.6162 14.1547 79.1403 14.3728 79.5965C14.5908 80.0527 14.9812 80.4035 15.458 80.5719C15.9347 80.7402 16.4589 80.7123 16.915 80.4942C17.3712 80.2761 17.722 79.8857 17.8904 79.409L23.9689 62.1053L28.6027 63.7582L15.0644 98.0254ZM37.5783 109.21C37.1671 109.605 36.6178 109.823 36.0478 109.818C35.4779 109.812 34.9327 109.584 34.5288 109.182C34.1249 108.78 33.8946 108.235 33.887 107.666C33.8794 107.096 34.0952 106.545 34.4883 106.133L38.5508 102.07C38.8563 101.766 39.2451 101.559 39.6681 101.475C40.0912 101.391 40.5296 101.435 40.928 101.6C41.3264 101.765 41.667 102.044 41.9068 102.403C42.1466 102.761 42.2749 103.183 42.2756 103.614C42.2765 103.9 42.2205 104.184 42.1106 104.449C42.0008 104.713 41.8393 104.954 41.6357 105.155L37.5783 109.21ZM44.0326 114.329C43.9183 114.44 43.8168 114.56 43.7152 114.679L43.6949 114.656C43.4942 114.866 43.2536 115.034 42.9871 115.15C42.7206 115.266 42.4337 115.327 42.1431 115.331C41.8526 115.334 41.5643 115.279 41.2952 115.17C41.0261 115.06 40.7816 114.898 40.576 114.693C40.3705 114.487 40.208 114.243 40.0983 113.974C39.9885 113.705 39.9335 113.417 39.9367 113.126C39.9399 112.836 40.001 112.549 40.1166 112.282C40.2323 112.015 40.4 111.775 40.6099 111.574L44.3373 107.849C44.449 107.737 44.5556 107.621 44.6572 107.501L44.675 107.519C45.0868 107.125 45.6365 106.908 46.2064 106.914C46.7763 106.92 47.3211 107.149 47.7243 107.552C48.1274 107.955 48.3569 108.5 48.3636 109.069C48.3702 109.639 48.1536 110.189 47.7599 110.601L44.0326 114.329ZM49.8013 120.097C49.3862 120.47 48.8441 120.67 48.2865 120.655C47.7288 120.64 47.198 120.412 46.8032 120.018C46.4084 119.624 46.1797 119.094 46.164 118.536C46.1483 117.978 46.3469 117.436 46.7189 117.02L50.7814 112.958C50.9785 112.734 51.2192 112.554 51.4886 112.427C51.7581 112.301 52.0506 112.231 52.3482 112.221C52.6458 112.212 52.9422 112.264 53.219 112.373C53.4959 112.483 53.7473 112.648 53.958 112.858C54.1686 113.069 54.3339 113.32 54.4437 113.597C54.5535 113.874 54.6055 114.17 54.5964 114.468C54.5874 114.765 54.5175 115.058 54.391 115.327C54.2646 115.597 54.0843 115.838 53.8613 116.035L49.8013 120.097ZM59.9779 121.484L55.9154 125.546C55.5036 125.94 54.9539 126.157 54.384 126.151C53.8141 126.145 53.2693 125.916 52.8661 125.513C52.4629 125.11 52.2335 124.566 52.2268 123.996C52.2201 123.426 52.4368 122.876 52.8304 122.464L56.5578 118.739C56.6695 118.627 56.7761 118.511 56.8777 118.391L56.8955 118.409C57.3073 118.015 57.857 117.798 58.4269 117.804C58.9968 117.81 59.5416 118.039 59.9448 118.442C60.3479 118.845 60.5774 119.39 60.5841 119.959C60.5907 120.529 60.3741 121.079 59.9804 121.491L59.9779 121.484ZM95.6162 107.874C95.1101 108.386 94.4297 108.688 93.7106 108.721C92.9916 108.753 92.2867 108.514 91.7365 108.05L90.2511 106.813C90.1474 106.662 90.0226 106.527 89.8804 106.412L86.4552 103.66C86.0605 103.363 85.5659 103.231 85.076 103.292C84.586 103.353 84.1388 103.602 83.8289 103.987C83.5189 104.371 83.3704 104.861 83.4147 105.353C83.4589 105.844 83.6924 106.3 84.066 106.623L87.0215 109.007C87.1035 109.12 87.1971 109.225 87.3007 109.319C87.5943 109.579 87.8316 109.896 87.998 110.251C88.1644 110.607 88.2564 110.992 88.2683 111.384C88.2802 111.776 88.2117 112.166 88.0672 112.531C87.9226 112.895 87.705 113.226 87.4277 113.504L87.3211 113.61C86.8395 114.094 86.2013 114.39 85.5211 114.446C84.8409 114.502 84.163 114.313 83.609 113.915L80.6662 111.807L80.6357 111.785L79.5236 110.99C79.1128 110.696 78.6021 110.577 78.1038 110.66C77.6055 110.742 77.1604 111.02 76.8665 111.43C76.5725 111.841 76.4538 112.352 76.5364 112.85C76.619 113.348 76.8962 113.794 77.307 114.087L78.4394 114.897C78.7756 115.142 79.0546 115.457 79.2574 115.82C79.4601 116.183 79.5817 116.586 79.6138 117.001C79.6459 117.415 79.5877 117.832 79.4433 118.222C79.2988 118.612 79.0716 118.966 78.7771 119.26L78.6197 119.417C78.1016 119.935 77.4059 120.235 76.674 120.258C75.9421 120.282 75.2288 120.025 74.6791 119.541L71.5052 116.748C71.3229 116.559 71.1035 116.41 70.8607 116.31C70.618 116.21 70.3571 116.161 70.0945 116.166C69.8319 116.172 69.5733 116.232 69.335 116.342C69.0966 116.452 68.8836 116.61 68.7094 116.807C68.5352 117.003 68.4035 117.234 68.3226 117.484C68.2417 117.734 68.2134 117.998 68.2394 118.259C68.2655 118.52 68.3453 118.773 68.4738 119.002C68.6024 119.231 68.7769 119.431 68.9865 119.59L70.0656 120.544C70.3596 120.803 70.5978 121.119 70.7655 121.472C70.9332 121.826 71.0269 122.21 71.041 122.602C71.055 122.993 70.989 123.383 70.847 123.748C70.7051 124.113 70.4902 124.445 70.2154 124.724L69.9996 124.942C69.5096 125.437 68.8571 125.739 68.1624 125.791C67.4677 125.843 66.7775 125.643 66.2189 125.226L63.4767 123.18C64.0563 122.275 64.3816 121.23 64.4185 120.156C64.4555 119.082 64.2027 118.018 63.6868 117.075C63.1708 116.132 62.4107 115.345 61.486 114.797C60.5614 114.249 59.5064 113.96 58.4316 113.961H58.2818C58.148 112.471 57.4617 111.086 56.358 110.077C55.2542 109.068 53.8129 108.509 52.3175 108.509H52.1627C52.0245 106.998 51.316 105.596 50.1812 104.589C49.0464 103.581 47.5705 103.044 46.0537 103.086C45.9342 101.686 45.3214 100.374 44.3246 99.3838C43.2007 98.2618 41.6775 97.6317 40.0894 97.6317C38.5014 97.6317 36.9782 98.2618 35.8543 99.3838L33.8052 101.43L20.7291 94.067L30.2455 69.9865L38.8631 75.1383C39.0899 75.274 39.3424 75.361 39.6047 75.3938C39.867 75.4266 40.1332 75.4044 40.3865 75.3287L47.6279 73.173C48.8378 72.8166 50.1129 72.7405 51.3566 72.9503C52.6003 73.1602 53.7799 73.6505 54.8058 74.3842L55.8062 75.1053L45.6271 82.659C44.8718 83.2197 44.2575 83.9486 43.8328 84.7879C43.4081 85.6273 43.1847 86.554 43.1803 87.4946C43.1758 88.4353 43.3905 89.364 43.8073 90.2073C44.224 91.0506 44.8315 91.7853 45.5814 92.3531C46.9959 93.4151 48.6983 94.0247 50.4654 94.1022C52.2325 94.1797 53.9817 93.7214 55.4838 92.7873L63.4767 87.7574C64.406 89.6109 66.1427 92.1297 69.1591 93.681C72.6554 95.4787 76.9058 95.5244 81.8062 93.8182L95.2633 103.51C95.6014 103.754 95.8825 104.069 96.0872 104.432C96.2919 104.795 96.4153 105.199 96.4489 105.614C96.4824 106.03 96.4254 106.448 96.2816 106.84C96.1378 107.231 95.9108 107.587 95.6162 107.882V107.874ZM98.0638 100.826L83.2129 90.1365C82.9551 89.9514 82.6553 89.8336 82.3405 89.7937C82.0257 89.7538 81.7059 89.7931 81.4101 89.908C77.1699 91.5533 73.6482 91.6853 70.9365 90.3117C67.3463 88.4861 66.2468 84.4947 66.2367 84.4719C66.1625 84.1813 66.0208 83.9124 65.8231 83.687C65.6253 83.4616 65.3772 83.2861 65.0988 83.1748C64.8204 83.0634 64.5196 83.0194 64.221 83.0462C63.9224 83.0731 63.6343 83.1701 63.3802 83.3293L53.4576 89.5525C52.6098 90.0794 51.6224 90.3371 50.6252 90.2918C49.6281 90.2464 48.6681 89.9002 47.8716 89.2986C47.5931 89.0883 47.3675 88.8158 47.2127 88.503C47.058 88.1902 46.9783 87.8455 46.98 87.4965C46.9817 87.1475 47.0648 86.8037 47.2227 86.4924C47.3806 86.1811 47.6088 85.9109 47.8894 85.7033L64.2765 73.5412C65.1906 72.8645 66.2345 72.3836 67.3428 72.1284C68.4511 71.8733 69.6002 71.8495 70.7181 72.0584L88.1056 75.3236C88.501 75.3994 88.9102 75.3469 89.2736 75.1738L99.8259 70.1617L109.695 95.1359L98.0638 100.826ZM114.936 98.0178L101.39 63.7404L106.026 62.0875L112.102 79.3912C112.271 79.868 112.622 80.2583 113.078 80.4764C113.534 80.6945 114.058 80.7224 114.535 80.5541C115.011 80.3857 115.402 80.0349 115.62 79.5787C115.838 79.1226 115.866 78.5984 115.698 78.1217L109.604 60.8002L112.765 59.6754L125.656 93.3814L114.936 98.0178Z'
                        fill='url(#paint0_linear_828_6598)'
                      />
                      <path
                        d='M65 59.668C70.9006 59.668 76.6687 57.9182 81.5749 54.64C86.481 51.3618 90.3049 46.7024 92.563 41.251C94.8211 35.7995 95.4119 29.8009 94.2607 24.0137C93.1096 18.2264 90.2682 12.9105 86.0958 8.73818C81.9235 4.56583 76.6075 1.72442 70.8203 0.573265C65.0331 -0.577886 59.0345 0.0129266 53.583 2.27099C48.1316 4.52905 43.4721 8.35295 40.1939 13.2591C36.9157 18.1653 35.166 23.9334 35.166 29.834C35.1748 37.7438 38.3208 45.3271 43.9138 50.9202C49.5069 56.5132 57.0902 59.6592 65 59.668ZM65 3.80861C70.1473 3.80861 75.1791 5.33497 79.4589 8.19468C83.7388 11.0544 87.0745 15.119 89.0443 19.8745C91.0141 24.63 91.5295 29.8629 90.5253 34.9113C89.5211 39.9597 87.0424 44.597 83.4027 48.2367C79.763 51.8764 75.1257 54.3551 70.0773 55.3593C65.0289 56.3635 59.796 55.8481 55.0405 53.8783C50.285 51.9085 46.2204 48.5728 43.3607 44.2929C40.501 40.0131 38.9746 34.9813 38.9746 29.834C38.982 22.9339 41.7263 16.3185 46.6054 11.4394C51.4845 6.56033 58.0999 3.816 65 3.80861Z'
                        fill='url(#paint1_linear_828_6598)'
                      />
                      <path
                        d='M65 52.0508C69.3941 52.0508 73.6895 50.7478 77.343 48.3066C80.9965 45.8654 83.8441 42.3956 85.5256 38.336C87.2072 34.2764 87.6472 29.8093 86.7899 25.4997C85.9327 21.1901 83.8167 17.2314 80.7097 14.1243C77.6026 11.0173 73.6439 8.90133 69.3343 8.04409C65.0246 7.18685 60.5576 7.62681 56.498 9.30835C52.4384 10.9899 48.9686 13.8375 46.5274 17.491C44.0862 21.1445 42.7832 25.4399 42.7832 29.834C42.7899 35.7242 45.1328 41.3712 49.2978 45.5362C53.4628 49.7012 59.1098 52.0441 65 52.0508ZM65 11.4258C68.6408 11.4258 72.1998 12.5054 75.2271 14.5281C78.2543 16.5509 80.6137 19.4258 82.007 22.7895C83.4002 26.1531 83.7648 29.8544 83.0545 33.4253C82.3442 36.9961 80.591 40.2761 78.0166 42.8506C75.4421 45.425 72.1621 47.1782 68.5913 47.8885C65.0204 48.5988 61.3191 48.2342 57.9555 46.841C54.5918 45.4477 51.7169 43.0883 49.6941 40.061C47.6714 37.0338 46.5918 33.4748 46.5918 29.834C46.5972 24.9535 48.5383 20.2744 51.9894 16.8234C55.4404 13.3723 60.1195 11.4312 65 11.4258Z'
                        fill='url(#paint2_linear_828_6598)'
                      />
                      <path
                        d='M103.325 29.834C103.325 30.0841 103.374 30.3317 103.47 30.5627C103.565 30.7938 103.706 31.0037 103.882 31.1805C104.059 31.3574 104.269 31.4976 104.5 31.5933C104.731 31.689 104.979 31.7383 105.229 31.7383H115.781C116.286 31.7383 116.771 31.5377 117.128 31.1805C117.485 30.8234 117.686 30.339 117.686 29.834C117.686 29.3289 117.485 28.8446 117.128 28.4874C116.771 28.1303 116.286 27.9297 115.781 27.9297H105.229C104.724 27.9297 104.24 28.1303 103.882 28.4874C103.525 28.8446 103.325 29.3289 103.325 29.834Z'
                        fill='url(#paint3_linear_828_6598)'
                      />
                      <path
                        d='M101.273 21.1529C101.612 21.1555 101.945 21.0679 102.238 20.899L110.15 16.25C110.587 15.9944 110.906 15.5754 111.035 15.0852C111.163 14.595 111.092 14.0737 110.837 13.636C110.581 13.1983 110.162 12.88 109.672 12.7512C109.182 12.6224 108.66 12.6936 108.223 12.9492L100.308 17.6058C99.9438 17.8157 99.6589 18.1404 99.4983 18.5292C99.3376 18.918 99.3103 19.3491 99.4205 19.7551C99.5307 20.1611 99.7722 20.5192 100.107 20.7734C100.443 21.0277 100.853 21.1638 101.273 21.1605V21.1529Z'
                        fill='url(#paint4_linear_828_6598)'
                      />
                      <path
                        d='M100.308 42.0617L108.223 46.7183C108.439 46.8449 108.679 46.9275 108.928 46.9614C109.176 46.9954 109.429 46.9801 109.672 46.9163C109.915 46.8525 110.142 46.7415 110.342 46.5897C110.542 46.4379 110.71 46.2482 110.837 46.0315C110.963 45.8148 111.046 45.5752 111.08 45.3266C111.114 45.0779 111.098 44.825 111.035 44.5823C110.971 44.3396 110.86 44.1118 110.708 43.9119C110.556 43.7121 110.367 43.5441 110.15 43.4175L102.238 38.7711C102.022 38.6397 101.783 38.5525 101.533 38.5147C101.283 38.4768 101.028 38.489 100.783 38.5506C100.538 38.6121 100.308 38.7218 100.106 38.8732C99.9039 39.0246 99.7338 39.2147 99.6059 39.4325C99.4779 39.6503 99.3945 39.8913 99.3605 40.1416C99.3266 40.3919 99.3428 40.6464 99.4082 40.8904C99.4735 41.1344 99.5868 41.3629 99.7414 41.5627C99.8959 41.7625 100.089 41.9295 100.308 42.0541V42.0617Z'
                        fill='url(#paint5_linear_828_6598)'
                      />
                      <path
                        d='M14.2188 31.7383H24.7711C25.2761 31.7383 25.7605 31.5377 26.1176 31.1805C26.4748 30.8234 26.6754 30.339 26.6754 29.834C26.6754 29.3289 26.4748 28.8446 26.1176 28.4874C25.7605 28.1303 25.2761 27.9297 24.7711 27.9297H14.2188C13.7137 27.9297 13.2293 28.1303 12.8722 28.4874C12.5151 28.8446 12.3145 29.3289 12.3145 29.834C12.3145 30.339 12.5151 30.8234 12.8722 31.1805C13.2293 31.5377 13.7137 31.7383 14.2188 31.7383Z'
                        fill='url(#paint6_linear_828_6598)'
                      />
                      <path
                        d='M19.8504 16.25L27.7621 20.8964C27.9778 21.0278 28.2175 21.115 28.4672 21.1528C28.717 21.1907 28.9717 21.1785 29.2167 21.1169C29.4617 21.0554 29.6919 20.9457 29.8941 20.7943C30.0963 20.6429 30.2663 20.4528 30.3943 20.235C30.5223 20.0172 30.6057 19.7762 30.6396 19.5259C30.6736 19.2756 30.6574 19.0211 30.592 18.7771C30.5266 18.5331 30.4134 18.3046 30.2588 18.1048C30.1042 17.905 29.9115 17.738 29.6918 17.6134L21.7775 12.9492C21.5608 12.8226 21.3212 12.74 21.0726 12.7061C20.8239 12.6721 20.571 12.6874 20.3283 12.7512C19.8381 12.88 19.4191 13.1983 19.1635 13.636C18.908 14.0737 18.8368 14.595 18.9656 15.0852C19.0944 15.5754 19.4126 15.9944 19.8504 16.25Z'
                        fill='url(#paint7_linear_828_6598)'
                      />
                      <path
                        d='M27.7621 38.7791L19.8504 43.4179C19.4126 43.6735 19.0944 44.0925 18.9656 44.5827C18.8368 45.0729 18.908 45.5942 19.1635 46.0319C19.4191 46.4696 19.8381 46.7879 20.3283 46.9167C20.8185 47.0455 21.3398 46.9743 21.7775 46.7187L29.6918 42.0697C29.9115 41.9451 30.1042 41.7781 30.2588 41.5783C30.4134 41.3785 30.5266 41.15 30.592 40.906C30.6574 40.6621 30.6736 40.4075 30.6396 40.1572C30.6057 39.9069 30.5223 39.6659 30.3943 39.4481C30.2663 39.2304 30.0963 39.0403 29.8941 38.8888C29.6919 38.7374 29.4617 38.6278 29.2167 38.5662C28.9717 38.5047 28.717 38.4924 28.4672 38.5303C28.2175 38.5681 27.9778 38.6553 27.7621 38.7867V38.7791Z'
                        fill='url(#paint8_linear_828_6598)'
                      />
                      <path
                        d='M60.7267 38.1161C60.9051 38.3081 61.1212 38.4612 61.3615 38.5658C61.6018 38.6705 61.8611 38.7246 62.1232 38.7246C62.3852 38.7246 62.6445 38.6705 62.8848 38.5658C63.1251 38.4612 63.3412 38.3081 63.5196 38.1161L76.5552 24.1513C76.7259 23.9679 76.8588 23.7527 76.9464 23.5179C77.0339 23.2832 77.0744 23.0334 77.0654 22.7831C77.0564 22.5327 76.9983 22.2865 76.8942 22.0586C76.7901 21.8307 76.6421 21.6255 76.4587 21.4548C76.2753 21.2841 76.0601 21.1512 75.8253 21.0636C75.5906 20.9761 75.3409 20.9356 75.0905 20.9446C74.8401 20.9535 74.5939 21.0117 74.366 21.1158C74.1381 21.2199 73.9329 21.3679 73.7622 21.5513L62.1206 34.0232L56.2351 27.7187C55.8903 27.3483 55.4125 27.1301 54.9068 27.112C54.4011 27.0939 53.909 27.2774 53.5386 27.6222C53.1682 27.967 52.95 28.4448 52.9319 28.9504C52.9138 29.4561 53.0973 29.9483 53.4421 30.3187L60.7267 38.1161Z'
                        fill='url(#paint9_linear_828_6598)'
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id='paint0_linear_828_6598'
                        x1='-1.30084e-06'
                        y1='7.61101'
                        x2='285.052'
                        y2='145.021'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint1_linear_828_6598'
                        x1='35.166'
                        y1='-38.1747'
                        x2='184.93'
                        y2='3.27906'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint2_linear_828_6598'
                        x1='42.7832'
                        y1='-20.8108'
                        x2='154.309'
                        y2='10.059'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint3_linear_828_6598'
                        x1='103.325'
                        y1='25.493'
                        x2='121.899'
                        y2='44.8787'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint4_linear_828_6598'
                        x1='99.354'
                        y1='7.26816'
                        x2='127.015'
                        y2='17.881'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint5_linear_828_6598'
                        x1='99.3433'
                        y1='33.064'
                        x2='127.035'
                        y2='43.681'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint6_linear_828_6598'
                        x1='12.3145'
                        y1='25.493'
                        x2='30.8884'
                        y2='44.8787'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint7_linear_828_6598'
                        x1='18.9028'
                        y1='7.25935'
                        x2='46.5947'
                        y2='17.8764'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint8_linear_828_6598'
                        x1='18.9028'
                        y1='33.0894'
                        x2='46.5819'
                        y2='43.7206'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <linearGradient
                        id='paint9_linear_828_6598'
                        x1='52.9307'
                        y1='9.56722'
                        x2='110.084'
                        y2='31.0407'
                        gradientUnits='userSpaceOnUse'>
                        <stop offset='0.00520833' stop-color='#BE9118' />
                        <stop offset='0.03125' stop-color='#EFD84E' />
                        <stop offset='0.0989583' stop-color='#BE9218' />
                        <stop offset='0.197917' stop-color='#F4DE53' />
                        <stop offset='0.307292' stop-color='#D4B030' />
                        <stop offset='0.375' stop-color='#DFC03C' />
                        <stop offset='0.463542' stop-color='#C0941A' />
                        <stop offset='0.463642' stop-color='#C49A1E' />
                        <stop offset='0.5625' stop-color='#B48F25' />
                        <stop offset='0.671875' stop-color='#C89F23' />
                        <stop offset='0.8125' stop-color='#AE9449' />
                        <stop offset='1' stop-color='#BF9319' />
                      </linearGradient>
                      <clipPath id='clip0_828_6598'>
                        <rect width='130' height='130' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Teamwork</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='about-us-faq-section'>
          <div className='about-us-faq-heading-section'>
            <h2 className='home-colored-text'>Why choose Lumineux</h2>
            <span>
              When you reach out to our agents today, you'll encounter a
              dedicated, skilled, and diverse team, fully prepared to address
              all your real estate needs. We won't stop until your satisfaction
              reaches 100%. Our standing as Dubai's premier real estate agency
              didn't come about spontaneously; it was the result of our diligent
              efforts to build trust with our clients. We achieved this by
              handpicking the most qualified individuals for the task, and you
              can expect nothing less when you choose us.
            </span>
          </div>
          {/* <div className="about-us-faq-cards-section">
            <FaqCard
              faqQuestion="Why is it considered necessary to register Agreement for Sale?"
              faqAnswer="The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name."
            />
            {renderedFaqCards}
          </div> */}
        </div>
        <div className='about-us-our-team-section'>
          <div className='about-us-our-team-heading'>
            <h2>Our Team Stats</h2>
            <span>
              Despite well over $1 billion in combined sales, however, the team
              strives to maintain an air of humility and discretion
            </span>
          </div>
          <div className='about-us-our-team-cards-section'>
            <div className='about-us-our-team-cards'>
              <h3>$50k</h3>
              <span>Current Listing Volume</span>
            </div>
            <div className='about-us-our-team-cards'>
              <h3>$10k</h3>
              <span>Total Sold 2020 - 2022</span>
            </div>
            <div className='about-us-our-team-cards'>
              <h3>$50k</h3>
              <span>Lifetime Sales Volume</span>
            </div>
          </div>
        </div>
        <div className='about-us-get-in-touch-section'>
          <div className='about-us-get-in-touch-image-left'>
            <img src={AboutUsGetInTouchImg} alt='Get In Touch' />
          </div>
          <div className='about-us-get-in-touch-content-right'>
            <h2>Get in touch to plan your next transaction</h2>
            <span>
              Our experts and developers would love to contribute their
              expertise and insights and help you today.
            </span>
            <EnquiryCard />
            <div className='about-us-get-in-touch-contact-section'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='23'
                  viewBox='0 0 22 23'
                  fill='none'>
                  <path
                    d='M18.9099 14.1751L14.8786 12.3685C14.6959 12.2902 14.4966 12.2588 14.2987 12.2769C14.1008 12.2951 13.9106 12.3624 13.7453 12.4726C13.7285 12.4834 13.7125 12.4954 13.6975 12.5085L11.5905 14.3006C11.5686 14.3125 11.5443 14.3191 11.5194 14.32C11.4945 14.3209 11.4698 14.316 11.4471 14.3057C10.0928 13.652 8.68985 12.2576 8.0336 10.922C8.02267 10.8997 8.01699 10.8752 8.01699 10.8503C8.01699 10.8255 8.02267 10.801 8.0336 10.7787L9.83167 8.64521C9.84457 8.62942 9.85654 8.6129 9.86751 8.59571C9.97622 8.42974 10.0419 8.2393 10.0586 8.04159C10.0753 7.84388 10.0424 7.64513 9.96309 7.46328L8.16929 3.43874C8.06742 3.20117 7.89124 3.00305 7.66721 2.8741C7.44317 2.74516 7.18336 2.69235 6.92677 2.72361C5.81159 2.87022 4.78795 3.41787 4.04714 4.26422C3.30633 5.11057 2.89904 6.1977 2.90138 7.32247C2.90138 14.0044 8.3374 19.4405 15.0194 19.4405C16.1441 19.4426 17.2311 19.0353 18.0774 18.2945C18.9237 17.5537 19.4714 16.5302 19.6182 15.4151C19.6494 15.1597 19.5973 14.901 19.4697 14.6776C19.3421 14.4542 19.1458 14.278 18.9099 14.1751ZM15.0194 18.4164C8.90234 18.4164 3.92543 13.4395 3.92543 7.32247C3.92258 6.44685 4.23863 5.60013 4.81452 4.94053C5.39042 4.28093 6.18676 3.85356 7.05477 3.73828H7.0744C7.10879 3.73892 7.14218 3.74994 7.1702 3.76989C7.19822 3.78984 7.21956 3.81779 7.23142 3.85007L9.03205 7.87034C9.04232 7.89269 9.04764 7.917 9.04764 7.9416C9.04764 7.9662 9.04232 7.9905 9.03205 8.01286L7.23057 10.1514C7.21713 10.1667 7.20486 10.183 7.19387 10.2001C7.08115 10.3722 7.01477 10.5704 7.00116 10.7757C6.98756 10.981 7.02719 11.1863 7.11622 11.3718C7.87316 12.9215 9.43485 14.4712 11.0017 15.2282C11.1882 15.3167 11.3945 15.3554 11.6005 15.3404C11.8064 15.3255 12.005 15.2574 12.1768 15.1428C12.193 15.1317 12.2092 15.1198 12.2245 15.107L14.3307 13.3149C14.3515 13.3037 14.3745 13.2972 14.398 13.2957C14.4216 13.2942 14.4452 13.2979 14.4672 13.3064L18.4994 15.113C18.5324 15.127 18.5601 15.151 18.5786 15.1817C18.5971 15.2123 18.6056 15.248 18.6027 15.2836C18.488 16.1521 18.0611 16.949 17.4016 17.5255C16.7421 18.1021 15.8953 18.4188 15.0194 18.4164Z'
                    fill='#EFEFEF'
                  />
                </svg>
                Phone: +971 54 5599915
              </span>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='23'
                  viewBox='0 0 22 23'
                  fill='none'>
                  <path
                    d='M4.58335 5.04688H16.4169C17.1411 5.04688 17.8357 5.33458 18.3479 5.84671C18.86 6.35884 19.1477 7.05343 19.1477 7.77769V15.9701C19.1477 16.6944 18.86 17.389 18.3479 17.9011C17.8357 18.4132 17.1411 18.7009 16.4169 18.7009H4.58335C3.8591 18.7009 3.1645 18.4132 2.65238 17.9011C2.14025 17.389 1.85254 16.6944 1.85254 15.9701V7.77769C1.85254 7.05343 2.14025 6.35884 2.65238 5.84671C3.1645 5.33458 3.8591 5.04688 4.58335 5.04688ZM4.58335 5.95715C4.12822 5.95715 3.7277 6.11189 3.41821 6.38497L10.5001 10.9636L17.582 6.38497C17.2725 6.11189 16.872 5.95715 16.4169 5.95715H4.58335ZM10.5001 12.0651L2.88115 7.12229C2.80832 7.32255 2.76281 7.55012 2.76281 7.77769V15.9701C2.76281 16.453 2.95462 16.916 3.29603 17.2574C3.63745 17.5989 4.10051 17.7907 4.58335 17.7907H16.4169C16.8997 17.7907 17.3628 17.5989 17.7042 17.2574C18.0456 16.916 18.2374 16.453 18.2374 15.9701V7.77769C18.2374 7.55012 18.1919 7.32255 18.1191 7.12229L10.5001 12.0651Z'
                    fill='#EFEFEF'
                  />
                </svg>
                Email: info@lumineux.ae
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
