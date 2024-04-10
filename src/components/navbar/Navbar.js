import React, { useEffect, useRef, useState } from "react";
import { NavbarContainer } from "./navbar.styles";
import brandHeaderLogo from "../../assets/images/bs-footer-icon-2.png";
// ICONS
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link, NavLink } from "react-router-dom";
import QuotationModal from "../modals/quotation.modal/QuotationModal";
import constants from "../../utils/constants";
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import jslLogo from "../../assets/images/jsl.png";
import ArticleIcon from '@mui/icons-material/Article';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  // USESTATE FOR SHOW QUOTATION MODAL
  const [showQuotationModal, setShowQuotationModal] = useState(() => (false));

  // USESTATE FOR SHOW HAMBURGER MENU
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(() => (false));

  // USESTATE FOR SHOW HAMBURGER PRODUCTS MENU
  const [showHamburgerProductsMenu, setShowHamburgerProductsMenu] = useState(() => (false));

  // FUNCTION FOR HANDLER SHOW QUOTATION MODAL
  const showQuotationModalHandler = () => {
    setShowQuotationModal((prevData) => (!prevData));
  };

  // FUNCTION FOR HANDLE SHOW HAMBURGER MENU
  const showHamburgerMenuHandler = () => {
    setShowHamburgerMenu((prevData) => (!prevData));
    setShowHamburgerProductsMenu((prevData) => (prevData = false));
  };

  const navbarRef = useRef();

  useEffect(() => { 
    const scrollHandler = () => {
      if (window.scrollY >= 180) {
        navbarRef.current.style.backgroundColor = constants.colors.bsDarkTransparent;
        navbarRef.current.style.boxShadow = "0px 5px 10px -3px rgba(0,0,0,0.4)";
      } else {
        navbarRef.current.style.backgroundColor = constants.colors.bsDarkBold;
        navbarRef.current.style.boxShadow = "none";
      }
    }
    window.addEventListener("scroll", scrollHandler);

    return () => (window.removeEventListener("scroll", scrollHandler));
  }, [])

  return (
    <NavbarContainer ref={navbarRef}>
      {/* QUOTATION MODAL */}
      {
        showQuotationModal &&
        <QuotationModal clickEvent={showQuotationModalHandler} />
      }

      {/* NAVBAR WRAPPER */}
      <div className="navbar-wrapper">
        {/* LEFT CONTAINER */}
        <div className="left-container anime" data-move="move-up">
          {/* BRAND LOGO */}
          <Link to="/"><img className="brand-header-logo" src={brandHeaderLogo} alt="brand-logo" /></Link>
        </div>

        {/* MIDDLE CONTAINER */}
        <div className="middle-container">
          {/* NAVBAR LIST */}
          <ul className="navbar-list">
            <li className="navbar-item anime" data-move="move-up" data-delay={0.1}><NavLink to="/" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>Home</NavLink></li>
            <li className="navbar-item products-li anime" data-move="move-up" data-delay={0.2}>
              Products
              <div className="products-list-container">
                <ul className="products-list">
                  <Link to="products/round"><li className="products-item">Round Stainless Steel</li></Link>
                  <Link to="products/square"><li className="products-item">Square Stainless Steel</li></Link>
                  <Link to="products/rectangle"><li className="products-item">Rectangle Stainless Steel</li></Link>
                  {/* <Link to="quality"><li className="products-item">Product Quality</li></Link> */}
                </ul>
              </div>
            </li>
            <li className="navbar-item anime" data-move="move-up" data-delay={0.3}><NavLink to="quality" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>Quality</NavLink></li>
            <li className="navbar-item anime" data-move="move-up" data-delay={0.4}><NavLink to="end-uses" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>End Uses</NavLink></li>
            <li className="navbar-item anime" data-move="move-up" data-delay={0.5}><NavLink to="news" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>News</NavLink></li>
            <li className="navbar-item anime" data-move="move-up" data-delay={0.6}><NavLink to="about-us" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>About Us</NavLink></li>
            <li className="navbar-item anime" data-move="move-up" data-delay={0.7}><NavLink to="contact-us" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="right-container">
          {/* REQUEST QUOTE BUTTON */}
          <button type="button" className="request-quote-button anime" data-move="move-up" data-delay={0.6} onClick={showQuotationModalHandler}>REQUEST A QUOTE</button>

          {/* JSL LOGO CONTAINER */}
          <div className="jsl-logo-container anime" data-move="move-up" data-delay={0.7}>
            <span className="jsl-tag">In Association With</span>
            <img src={ jslLogo} alt="jsl logo" className="jsl-logo" />
          </div>
        </div>

        {/* HAMBURGER MENU*/}
        <div className="hamberger-menu" onClick={showHamburgerMenuHandler}>
          <MenuTwoToneIcon className="hamberger-icon" />
        </div>
      </div>

      {/* HAMBURGER MENU TRAY */}
      {
        showHamburgerMenu &&
        <div className="hamburger-menu-tray-container">
          {/* HAMBURGER MENU TRAY */}
          <div className="hamburger-menu-tray">
            {/* HAMBURGER TOP CONTAINER */}
            <div className="hamburger-top-container">
              {/* BRAND LOGO CONTAINER*/}
              <div className="brand-logo-container">
                {/* BRAND LOGO */}
                <img src={brandHeaderLogo} alt="brand log" className="mob-brand-logo" />
                
                {/* HAMBURGER CLOSE BUTTON */}
                <button type="button" className="hamburger-close-button" onClick={showHamburgerMenuHandler}><CloseIcon /></button>
              </div>
              
              {/* HAMBURGER MENU LIST */}
              <ul className="hamburger-menu-list">
                <li className="hamburger-menu-item" onClick={showHamburgerMenuHandler}><NavLink to="/" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsWhite}` : "" })}><HomeOutlinedIcon className="mob-icons" />Home</NavLink></li>
                <li className="hamburger-menu-item hamburger-product-items" onClick={() => { setShowHamburgerProductsMenu((prevData) => (!prevData)) }}>
                  <div className="hamburger-menu-products-container">
                    {/* PRODUCT TITLE */}
                      <span className="hamburger-product-title"><CategoryOutlinedIcon className="mob-icons" />Products</span>
                    
                    {/* PRODUCT LIST */}
                    {
                      showHamburgerProductsMenu && 
                        <ul className="hamburger-product-list">
                        <Link to="products/round"><li className="hamburger-product-item" onClick={showHamburgerMenuHandler}><ArrowRightOutlinedIcon className="mob-icon" />Round Stainless Steels</li></Link>
                        <Link to="products/square"><li className="hamburger-product-item" onClick={showHamburgerMenuHandler}><ArrowRightOutlinedIcon className="mob-icon" />Square Stainless Steels</li></Link>
                        <Link to="products/rectangle"><li className="hamburger-product-item" onClick={showHamburgerMenuHandler}><ArrowRightOutlinedIcon className="mob-icon"/>Rectangular Stainless Steels</li></Link>
                        {/* <Link to="quality"><li className="hamburger-product-item" onClick={showHamburgerMenuHandler}><ArrowRightOutlinedIcon className="mob-icon"/>Product Quality</li></Link> */}
                      </ul>
                    }
                  </div>
                </li>
                <li className="hamburger-menu-item" onClick={showHamburgerMenuHandler}><NavLink to="quality" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsWhite}` : "" })}><HighQualityIcon className="mob-icons" />Quality</NavLink></li>
                <li className="hamburger-menu-item" onClick={showHamburgerMenuHandler}><NavLink to="end-uses" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsWhite}` : "" })}><SingleBedOutlinedIcon className="mob-icons" />End Uses</NavLink></li>
                  <li className="hamburger-menu-item" onClick={showHamburgerMenuHandler}><NavLink to="news" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsWhite}` : "" })}><ArticleIcon className="mob-icons" />News</NavLink></li>
                <li className="hamburger-menu-item" onClick={showHamburgerMenuHandler}><NavLink to="about-us" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsWhite}` : "" })}><InfoOutlinedIcon className="mob-icons" />About Us</NavLink></li>
                <li className="hamburger-menu-item" onClick={showHamburgerMenuHandler}><NavLink to="contact-us" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsWhite}` : "" })}><PermContactCalendarOutlinedIcon className="mob-icons" />Contact Us</NavLink></li>
              </ul>
              </div>
              
              {/* HAMBURGER BOTTOM CONTAINER */}
              <div className="hamburger-bottom-container">
                {/* JSL LOGO CONTAINER */}
                <div className="ham-jsl-logo-container">
                  <span className="ham-jsl-tag">In Association With</span>
                  <img src={jslLogo} alt="jsl logo" className="jsl-logo" />
                </div>

                {/* SOCIAL TITLE */}
                <p className="social-title">Follow us on</p>

                {/* SOCIAL CONTAINER */}
                <div className="social-container">
                  <Link to="https://www.facebook.com" target="_blank"><FacebookIcon className="social-icon" /></Link>
                  <Link to="https://www.twitter.com" target="_blank"><FaXTwitter className="social-icon" /></Link>
                  <Link to="https://www.linkedin.com" target="_blank"><LinkedInIcon className="social-icon" /></Link>
                  <Link to="https://www.youtube.com" target="_blank"><YouTubeIcon className="social-icon" /></Link>
                </div>
              </div>
          </div>
        </div>
      }
    </NavbarContainer>
  );
};

export default Navbar;