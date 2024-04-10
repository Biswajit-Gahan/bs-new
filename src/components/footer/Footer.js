import React from "react";
import { FooterContainer } from "./footer.styles";
import brandLogo from "../../assets/images/bs-footer-icon-2.png";
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import localdb from "../../utils/localdb";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <div className="footer-wrapper">
        {/* BRAND LOGO */}
        <img src={brandLogo} alt="brand-log" className="brand-logo anime" data-move="move-up" onClick={() => {navigate("/")}} />

        {/* FOOTER CONTENT CONTAINER */}
        <div className="footer-content-container">

          {/* TOP CONTAINER */}
          <div className="top-container">
            {/* OFFICE ADDRESS CONTAINER*/}
            <div className="office-address-container">
              <p className="header-text anime" data-move="move-up" data-delay={0.2}>REGISTERED OFFICE</p>
              <Link to={`https://www.google.com/maps/dir//${localdb.bsLocation.lat},%20${localdb.bsLocation.long}`} target="_blank">
                <p className="content-text anime" data-move="move-up" data-delay={0.3}>
                  Plot No-836/2476, Khta No-238/1577,<br />
                  Khordha Mouza, Maa Barunei Road, Garh khordha,<br />
                  Near Khordha Industrial Area, Khordha,<br />
                  Odisha, 752057
                </p>
              </Link>
            </div>

            {/* CONTACT DETAILS CONTAINER */}
            <div className="contact-details-container">
              {/* EMAIL DETAILS */}
              <div className="email-details">
                <p className="header-text anime" data-move="move-up" data-delay={0.2}>EMAIL</p>
                <Link to="mailto:bishnusteel@gmail.com">
                  <p className="content-text anime" data-move="move-up" data-delay={0.3}>
                    <EmailIcon className="contact-icon" /> bishnusteel@gmail.com
                  </p>
                </Link>
              </div>

              {/* PHONE DETAILS */}
              <div className="phone-details">
                <p className="header-text anime" data-move="move-up" data-delay={0.2}>PHONE</p>
                <Link to="tel:9644002222">
                  <p className="content-text anime" data-move="move-up" data-delay={0.3}>
                    <CallIcon className="contact-icon" /> +91 96 44 00 22 22
                  </p>
                </Link>
              </div>
            </div>

            {/* SOCIAL MEDIA CONTAINER */}
            <div className="social-media-container">
              <p className="header-text anime" data-move="move-up" data-delay={0.2}>FOLLOW US ON</p>

              {/* SOCIAL MEDIA WRAPPER */}
              <div className="social-media-wrapper">
                <Link to="https://www.facebook.com" target="_blank"><FacebookIcon className="mui-icon anime" data-move="zoom-out" data-delay={0.3} /></Link>
                <Link to="https://www.twitter.com" target="_blank"><FaXTwitter className="mui-icon anime" data-move="zoom-out" data-delay={0.5} /></Link>
                <Link to="https://www.linkedin.com" target="_blank"><LinkedInIcon className="mui-icon anime" data-move="zoom-out" data-delay={0.7} /></Link>
                <Link to="https://www.youtube.com" target="_blank"><YouTubeIcon className="mui-icon anime" data-move="zoom-out" data-delay={0.9} /></Link>

              </div>
            </div>
          </div>

          {/* MIDDLE CONTAIENR */}
          {/* <div className="middle-container">
            <p className="header-text">IMPORTANT LINKS</p>
            <ul className="links">
              <li className="link">Home</li>
              <li className="link">Products</li>
              <li className="link">Quality</li>
              <li className="link">About Us</li>
              <li className="link">Contact Us</li>
            </ul>
          </div> */}

          {/* BOTTOM CONTAINER */}
          <div className="bottom-container">
            <div className="divider"></div>
            <div className="credits-container">
              <p className="copyright anime" data-move="move-down" data-delay={0.2}>Copyright © 2023 | Bishnu Steels. All right reserved.</p>
              <p className="credit anime" data-move="move-down" data-delay={0.4}>Designed & Developed by Shaik Mahaboob Subhani.</p>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;