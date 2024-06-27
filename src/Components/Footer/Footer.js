import React from "react";
import "./Footer.css";

import { NavLink } from "react-router-dom";

import LumineuxLogoImg3 from "../../Assets/Footer/LumineuxLogoImg3.jpeg";
import FooterBgImg from "../../Assets/Footer/FooterBgImg.png";

import LumineuxLogoSecondary from "../../Assets/Navbar/Lumineux-Logo-Secondary.png";

import FooterLatestPropertyImg1 from "../../Assets/Footer/FooterLatestPropertyImg1.jpeg";
import FooterLatestPropertyImg2 from "../../Assets/Footer/FooterLatestPropertyImg2.jpeg";
import FooterLatestPropertyImg3 from "../../Assets/Footer/FooterLatestPropertyImg3.jpeg";

function Footer() {
  const footerStyle = {
    backgroundImage: `url("${FooterBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const companyWhatsAppNumber = process.env.REACT_APP_COMPANY_WHATSAPP_NO;

  const message = process.env.REACT_APP_WHATSAPP_MESSAGE;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    companyWhatsAppNumber
  )}&text=${encodeURIComponent(message)}`;

  return (
    <div className='footer-main-section' style={footerStyle}>
      <div className='footer-main-layer'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <img src={LumineuxLogoSecondary} alt='Logo' />
            <div className='footer-contact-section'>
              {/* <div className="footer-email-input">
                <input type="email" placeholder="Your Email Address" />
                <button>
                  Send Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_572_787)">
                      <path
                        d="M15.9638 0.685806C16.0001 0.594942 16.009 0.495402 15.9894 0.399526C15.9697 0.303649 15.9223 0.215653 15.8531 0.146447C15.7839 0.0772403 15.6959 0.0298668 15.6001 0.0101994C15.5042 -0.0094681 15.4046 -0.000564594 15.3138 0.0358061L0.766773 5.85481H0.765773L0.313773 6.03481C0.228163 6.06895 0.153659 6.1261 0.0984888 6.19994C0.043319 6.27377 0.0096312 6.36142 0.00114666 6.4532C-0.00733788 6.54497 0.00971105 6.63731 0.0504102 6.72001C0.0911093 6.8027 0.153875 6.87254 0.231773 6.92181L0.641773 7.18181L0.642773 7.18381L5.63777 10.3618L8.81577 15.3568L8.81777 15.3588L9.07777 15.7688C9.1272 15.8464 9.19707 15.9089 9.27971 15.9493C9.36234 15.9897 9.45453 16.0066 9.54613 15.998C9.63773 15.9894 9.72519 15.9558 9.79888 15.9007C9.87256 15.8456 9.92962 15.7712 9.96377 15.6858L15.9638 0.685806ZM14.1308 2.57581L6.63677 10.0698L6.42177 9.73181C6.38238 9.66978 6.3298 9.6172 6.26777 9.57781L5.92977 9.36281L13.4238 1.86881L14.6018 1.39781L14.1318 2.57581H14.1308Z"
                        fill="#3D3D3D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_572_787">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div> */}
              <br />
              <br />
              <br />
              <span>
                We alleviate the stress and enhance the value of your investment
                by offering a diverse array of property services customized to
                cater to your individual property requirements.
              </span>
              <h4>Contact Information</h4>
              <div className='footer-contact-details'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='23'
                    viewBox='0 0 22 23'
                    fill='none'>
                    <path
                      d='M18.9099 14.1751L14.8786 12.3685C14.6959 12.2902 14.4966 12.2588 14.2987 12.2769C14.1008 12.2951 13.9106 12.3624 13.7453 12.4726C13.7285 12.4834 13.7125 12.4954 13.6975 12.5085L11.5905 14.3006C11.5686 14.3125 11.5443 14.3191 11.5194 14.32C11.4945 14.3209 11.4698 14.316 11.4471 14.3057C10.0928 13.652 8.68985 12.2576 8.0336 10.922C8.02267 10.8997 8.01699 10.8752 8.01699 10.8503C8.01699 10.8255 8.02267 10.801 8.0336 10.7787L9.83167 8.64521C9.84457 8.62942 9.85654 8.6129 9.86751 8.59571C9.97622 8.42974 10.0419 8.2393 10.0586 8.04159C10.0753 7.84388 10.0424 7.64513 9.96309 7.46328L8.16929 3.43874C8.06742 3.20117 7.89124 3.00305 7.66721 2.8741C7.44317 2.74516 7.18336 2.69235 6.92677 2.72361C5.81159 2.87022 4.78795 3.41787 4.04714 4.26422C3.30633 5.11057 2.89904 6.1977 2.90138 7.32247C2.90138 14.0044 8.3374 19.4405 15.0194 19.4405C16.1441 19.4426 17.2311 19.0353 18.0774 18.2945C18.9237 17.5537 19.4714 16.5302 19.6182 15.4151C19.6494 15.1597 19.5973 14.901 19.4697 14.6776C19.3421 14.4542 19.1458 14.278 18.9099 14.1751ZM15.0194 18.4164C8.90234 18.4164 3.92543 13.4395 3.92543 7.32247C3.92258 6.44685 4.23863 5.60013 4.81452 4.94053C5.39042 4.28093 6.18676 3.85356 7.05477 3.73828H7.0744C7.10879 3.73892 7.14218 3.74994 7.1702 3.76989C7.19822 3.78984 7.21956 3.81779 7.23142 3.85007L9.03205 7.87034C9.04232 7.89269 9.04764 7.917 9.04764 7.9416C9.04764 7.9662 9.04232 7.9905 9.03205 8.01286L7.23057 10.1514C7.21713 10.1667 7.20486 10.183 7.19387 10.2001C7.08115 10.3722 7.01477 10.5704 7.00116 10.7757C6.98756 10.981 7.02719 11.1863 7.11622 11.3718C7.87316 12.9215 9.43485 14.4712 11.0017 15.2282C11.1882 15.3167 11.3945 15.3554 11.6005 15.3404C11.8064 15.3255 12.005 15.2574 12.1768 15.1428C12.193 15.1317 12.2092 15.1198 12.2245 15.107L14.3307 13.3149C14.3515 13.3037 14.3745 13.2972 14.398 13.2957C14.4216 13.2942 14.4452 13.2979 14.4672 13.3064L18.4994 15.113C18.5324 15.127 18.5601 15.151 18.5786 15.1817C18.5971 15.2123 18.6056 15.248 18.6027 15.2836C18.488 16.1521 18.0611 16.949 17.4016 17.5255C16.7421 18.1021 15.8953 18.4188 15.0194 18.4164Z'
                      fill='white'
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
                      d='M4.55161 5.04688H16.3851C17.1094 5.04688 17.804 5.33458 18.3161 5.84671C18.8282 6.35884 19.116 7.05343 19.116 7.77769V15.9701C19.116 16.6944 18.8282 17.389 18.3161 17.9011C17.804 18.4132 17.1094 18.7009 16.3851 18.7009H4.55161C3.82736 18.7009 3.13276 18.4132 2.62064 17.9011C2.10851 17.389 1.8208 16.6944 1.8208 15.9701V7.77769C1.8208 7.05343 2.10851 6.35884 2.62064 5.84671C3.13276 5.33458 3.82736 5.04688 4.55161 5.04688ZM4.55161 5.95715C4.09648 5.95715 3.69596 6.11189 3.38647 6.38497L10.4684 10.9636L17.5503 6.38497C17.2408 6.11189 16.8403 5.95715 16.3851 5.95715H4.55161ZM10.4684 12.0651L2.84941 7.12229C2.77659 7.32255 2.73107 7.55012 2.73107 7.77769V15.9701C2.73107 16.453 2.92288 16.916 3.2643 17.2574C3.60571 17.5989 4.06878 17.7907 4.55161 17.7907H16.3851C16.868 17.7907 17.331 17.5989 17.6725 17.2574C18.0139 16.916 18.2057 16.453 18.2057 15.9701V7.77769C18.2057 7.55012 18.1602 7.32255 18.0873 7.12229L10.4684 12.0651Z'
                      fill='white'
                    />
                  </svg>
                  Email: info@lumineux.ae
                </span>
              </div>
              <span>
                504, Dusseldorf Business Point, <br />
                Al Barsha 1,
                <br />
                Dubai, UAE
              </span>
              <div className='footer-contact-icons'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='none'
                  onClick={() => {
                    window.open(whatsappUrl); // Pass the URL directly
                  }}>
                  <path
                    d='M24.0948 6.21C22.9352 5.03869 21.554 4.10998 20.0317 3.47805C18.5094 2.84613 16.8766 2.52363 15.2283 2.52937C8.32242 2.52937 2.69396 8.15783 2.69396 15.0638C2.69396 17.2772 3.27578 19.4274 4.36352 21.3246L2.59277 27.8258L9.23309 26.0804C11.0671 27.0796 13.1287 27.6108 15.2283 27.6108C22.1343 27.6108 27.7627 21.9823 27.7627 15.0764C27.7627 11.7246 26.46 8.57522 24.0948 6.21ZM15.2283 25.4859C13.3564 25.4859 11.5224 24.98 9.91609 24.0313L9.53665 23.8037L5.5904 24.8408L6.6402 20.9958L6.38724 20.6037C5.34724 18.9429 4.79501 17.0233 4.79356 15.0638C4.79356 9.32147 9.47341 4.64163 15.2157 4.64163C17.9983 4.64163 20.6165 5.72937 22.577 7.7025C23.5477 8.66877 24.317 9.81811 24.8402 11.0839C25.3635 12.3497 25.6303 13.7067 25.6252 15.0764C25.6505 20.8187 20.9706 25.4859 15.2283 25.4859ZM20.9453 17.6946C20.6291 17.5428 19.0861 16.7839 18.8078 16.6701C18.5169 16.5689 18.3145 16.5183 18.0995 16.8219C17.8845 17.1381 17.29 17.8464 17.1129 18.0487C16.9359 18.2638 16.7461 18.2891 16.4299 18.1246C16.1137 17.9728 15.1019 17.6313 13.9129 16.5689C12.977 15.7341 12.3572 14.7096 12.1675 14.3934C11.9904 14.0772 12.1422 13.9128 12.3066 13.7483C12.4457 13.6092 12.6228 13.3815 12.7746 13.2045C12.9264 13.0274 12.9896 12.8883 13.0908 12.6859C13.192 12.4709 13.1414 12.2938 13.0655 12.142C12.9896 11.9902 12.3572 10.4472 12.1042 9.81475C11.8513 9.20763 11.5857 9.28352 11.3959 9.27087H10.7888C10.5738 9.27087 10.2449 9.34676 9.95404 9.66297C9.67578 9.97917 8.86629 10.7381 8.86629 12.2812C8.86629 13.8242 9.99198 15.3167 10.1438 15.5191C10.2955 15.7341 12.3572 18.8962 15.494 20.2495C16.2402 20.5784 16.822 20.7681 17.2774 20.9072C18.0236 21.1476 18.7066 21.1096 19.2505 21.0337C19.8576 20.9452 21.1098 20.2748 21.3627 19.5412C21.6283 18.8076 21.6283 18.1879 21.5398 18.0487C21.4513 17.9096 21.2615 17.8464 20.9453 17.6946Z'
                    fill='white'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='none'
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/lumineuxproperties/"
                    );
                  }}>
                  <path
                    d='M21.9322 6.90558C21.632 6.90558 21.3385 6.9946 21.0889 7.16138C20.8393 7.32815 20.6448 7.5652 20.5299 7.84254C20.415 8.11988 20.385 8.42505 20.4435 8.71947C20.5021 9.0139 20.6467 9.28434 20.8589 9.49661C21.0712 9.70887 21.3416 9.85343 21.6361 9.91199C21.9305 9.97055 22.2357 9.9405 22.513 9.82562C22.7903 9.71074 23.0274 9.5162 23.1941 9.26661C23.3609 9.01701 23.4499 8.72356 23.4499 8.42337C23.4499 8.02083 23.29 7.63477 23.0054 7.35013C22.7208 7.06549 22.3347 6.90558 21.9322 6.90558ZM27.7503 9.96645C27.7257 8.91703 27.5292 7.87874 27.1685 6.89293C26.8469 6.04946 26.3464 5.2857 25.7013 4.6542C25.075 4.00588 24.3095 3.50849 23.4626 3.19965C22.4794 2.828 21.4399 2.62695 20.3891 2.60519C19.0484 2.5293 18.6183 2.5293 15.178 2.5293C11.7377 2.5293 11.3077 2.5293 9.96694 2.60519C8.91606 2.62695 7.87662 2.828 6.89342 3.19965C6.04811 3.51162 5.28322 4.00858 4.65469 4.6542C4.00637 5.28051 3.50898 6.04606 3.20014 6.89293C2.82849 7.87613 2.62744 8.91558 2.60567 9.96645C2.52979 11.3072 2.52979 11.7372 2.52979 15.1775C2.52979 18.6178 2.52979 19.0479 2.60567 20.3886C2.62744 21.4395 2.82849 22.4789 3.20014 23.4621C3.50898 24.309 4.00637 25.0745 4.65469 25.7008C5.28322 26.3465 6.04811 26.8434 6.89342 27.1554C7.87662 27.527 8.91606 27.7281 9.96694 27.7499C11.3077 27.8257 11.7377 27.8257 15.178 27.8257C18.6183 27.8257 19.0484 27.8257 20.3891 27.7499C21.4399 27.7281 22.4794 27.527 23.4626 27.1554C24.3095 26.8465 25.075 26.3492 25.7013 25.7008C26.3492 25.0717 26.8502 24.3072 27.1685 23.4621C27.5292 22.4763 27.7257 21.438 27.7503 20.3886C27.7503 19.0479 27.8262 18.6178 27.8262 15.1775C27.8262 11.7372 27.8262 11.3072 27.7503 9.96645ZM25.4737 20.2368C25.4644 21.0397 25.319 21.8352 25.0436 22.5894C24.8417 23.1398 24.5173 23.6372 24.095 24.0439C23.6848 24.462 23.1884 24.7857 22.6405 24.9925C21.8862 25.268 21.0908 25.4134 20.2879 25.4226C19.0231 25.4858 18.5551 25.4985 15.2286 25.4985C11.9021 25.4985 11.4341 25.4985 10.1693 25.4226C9.33565 25.4382 8.50556 25.3098 7.71556 25.0431C7.19164 24.8257 6.71806 24.5028 6.32425 24.0945C5.90444 23.6882 5.58413 23.1904 5.38828 22.64C5.07948 21.8749 4.90821 21.0614 4.88235 20.2368C4.88235 18.972 4.80646 18.504 4.80646 15.1775C4.80646 11.851 4.80646 11.3831 4.88235 10.1182C4.88802 9.29743 5.03786 8.48401 5.32504 7.71507C5.54771 7.1812 5.88949 6.70531 6.32425 6.32376C6.70852 5.88888 7.18343 5.54349 7.71556 5.31191C8.48653 5.0337 9.29911 4.88829 10.1187 4.88187C11.3835 4.88187 11.8515 4.80598 15.178 4.80598C18.5045 4.80598 18.9725 4.80598 20.2373 4.88187C21.0402 4.89107 21.8357 5.03649 22.5899 5.31191C23.1646 5.52522 23.6805 5.87203 24.095 6.32376C24.5095 6.71229 24.8334 7.1873 25.0436 7.71507C25.3247 8.48526 25.4702 9.29835 25.4737 10.1182C25.5369 11.3831 25.5495 11.851 25.5495 15.1775C25.5495 18.504 25.5369 18.972 25.4737 20.2368ZM15.178 8.68898C13.8952 8.69148 12.642 9.07415 11.5766 9.78864C10.5113 10.5031 9.68157 11.5174 9.19241 12.7032C8.70324 13.8891 8.57655 15.1933 8.82834 16.4511C9.08013 17.7089 9.6991 18.8639 10.607 19.7701C11.515 20.6762 12.6711 21.293 13.9294 21.5423C15.1878 21.7916 16.4917 21.6624 17.6766 21.1709C18.8615 20.6795 19.8741 19.8478 20.5865 18.781C21.299 17.7143 21.6792 16.4603 21.6792 15.1775C21.6809 14.3239 21.5138 13.4784 21.1875 12.6896C20.8612 11.9008 20.3822 11.1842 19.778 10.5812C19.1738 9.9782 18.4564 9.50059 17.6669 9.17585C16.8775 8.85111 16.0316 8.68564 15.178 8.68898ZM15.178 19.3894C14.345 19.3894 13.5307 19.1424 12.838 18.6796C12.1454 18.2167 11.6055 17.5589 11.2868 16.7893C10.968 16.0197 10.8846 15.1728 11.0471 14.3558C11.2096 13.5388 11.6107 12.7883 12.1998 12.1993C12.7888 11.6102 13.5393 11.2091 14.3563 11.0466C15.1733 10.8841 16.0202 10.9675 16.7898 11.2863C17.5594 11.6051 18.2172 12.1449 18.68 12.8375C19.1428 13.5302 19.3899 14.3445 19.3899 15.1775C19.3899 15.7306 19.2809 16.2783 19.0693 16.7893C18.8576 17.3003 18.5473 17.7646 18.1562 18.1558C17.7651 18.5469 17.3008 18.8571 16.7898 19.0688C16.2788 19.2804 15.7311 19.3894 15.178 19.3894Z'
                    fill='white'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='none'
                  onClick={() => {
                    window.open("https://www.facebook.com/lumineuxproperties/");
                  }}>
                  <path
                    d='M27.8262 15.1775C27.8262 8.1957 22.1598 2.5293 15.178 2.5293C8.19619 2.5293 2.52979 8.1957 2.52979 15.1775C2.52979 21.2993 6.88077 26.3965 12.6484 27.5728V18.972H10.1187V15.1775H12.6484V12.0155C12.6484 9.57436 14.6341 7.58859 17.0752 7.58859H20.2373V11.3831H17.7077C17.012 11.3831 16.4428 11.9522 16.4428 12.6479V15.1775H20.2373V18.972H16.4428V27.7625C22.8302 27.1301 27.8262 21.7419 27.8262 15.1775Z'
                    fill='white'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/lumineux-properties"
                    );
                  }}>
                  <path
                    d='M27.6146 0.000209743H2.20497C1.91934 -0.00375713 1.63573 0.0485803 1.37033 0.154233C1.10493 0.259886 0.862943 0.416785 0.658187 0.615969C0.453431 0.815153 0.289918 1.05272 0.176985 1.31511C0.0640527 1.57749 0.00391254 1.85955 0 2.14518V27.8548C0.00391254 28.1405 0.0640527 28.4225 0.176985 28.6849C0.289918 28.9473 0.453431 29.1848 0.658187 29.384C0.862943 29.5832 1.10493 29.7401 1.37033 29.8458C1.63573 29.9514 1.91934 30.0038 2.20497 29.9998H27.6146C27.9002 30.0038 28.1839 29.9514 28.4493 29.8458C28.7147 29.7401 28.9566 29.5832 29.1614 29.384C29.3662 29.1848 29.5297 28.9473 29.6426 28.6849C29.7555 28.4225 29.8157 28.1405 29.8196 27.8548V2.14518C29.8157 1.85955 29.7555 1.57749 29.6426 1.31511C29.5297 1.05272 29.3662 0.815153 29.1614 0.615969C28.9566 0.416785 28.7147 0.259886 28.4493 0.154233C28.1839 0.0485803 27.9002 -0.00375713 27.6146 0.000209743ZM9.04487 25.1099H4.54494V11.61H9.04487V25.1099ZM6.79491 9.72007C6.17431 9.72007 5.57913 9.47354 5.1403 9.03471C4.70147 8.59588 4.45494 8.00071 4.45494 7.38011C4.45494 6.75951 4.70147 6.16433 5.1403 5.7255C5.57913 5.28667 6.17431 5.04014 6.79491 5.04014C7.12444 5.00277 7.45816 5.03542 7.7742 5.13596C8.09025 5.23651 8.38149 5.40267 8.62886 5.62357C8.87624 5.84448 9.07416 6.11514 9.20968 6.41784C9.34519 6.72054 9.41525 7.04846 9.41525 7.38011C9.41525 7.71176 9.34519 8.03967 9.20968 8.34237C9.07416 8.64507 8.87624 8.91574 8.62886 9.13664C8.38149 9.35755 8.09025 9.52371 7.7742 9.62425C7.45816 9.72479 7.12444 9.75745 6.79491 9.72007ZM25.2746 25.1099H20.7747V17.865C20.7747 16.05 20.1297 14.865 18.4947 14.865C17.9887 14.8687 17.496 15.0274 17.083 15.3198C16.67 15.6121 16.3565 16.024 16.1848 16.5C16.0674 16.8525 16.0165 17.2238 16.0348 17.595V25.0949H11.5348V11.595H16.0348V13.5C16.4436 12.7907 17.0381 12.2063 17.7544 11.8098C18.4707 11.4134 19.2816 11.2198 20.0997 11.2501C23.0997 11.2501 25.2746 13.185 25.2746 17.34V25.1099Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='footer-top-right'>
            <div className='footer-latest-properties-section'>
              <h4>Latest Properties</h4>
              <div className='footer-latest-properties-images'>
                <NavLink to='/properties'>
                  <img src={FooterLatestPropertyImg1} alt='Latest Property' />
                </NavLink>
                <NavLink to='/properties'>
                  <img src={FooterLatestPropertyImg2} alt='Latest Property' />
                </NavLink>
                <NavLink to='/properties'>
                  <img src={FooterLatestPropertyImg3} alt='Latest Property' />
                </NavLink>
              </div>
            </div>
            <div className='footer-links-section'>
              <div className='footer-links'>
                <h4>Short Links</h4>
                <ul>
                  {/* <li>Home</li>
                  <li>Properties</li>
                  <li>About us</li>
                  <li>Blog</li> */}
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to='/properties'>Properties</NavLink>
                  </li>
                  <li>
                    <NavLink to='/blog'>Blog</NavLink>
                  </li>
                </ul>
              </div>
              <div className='footer-links'>
                <h4>Help Links</h4>
                <ul>
                  <NavLink to='/privacy-policy'>
                    <li>Privacy policy</li>
                  </NavLink>
                  <NavLink to='/terms-of-services'>
                    <li>Terms of Service</li>
                  </NavLink>
                  <NavLink to='/contact'>
                    <li>Support Center</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='footer-bottom'>
          <span>Copyright . All Rights Reserved</span>
          <span>
            Developed by{" "}
            <b>
              <u>Clever Clicks</u>{" "}
            </b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
