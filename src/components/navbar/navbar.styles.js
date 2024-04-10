import styled from "styled-components";
import navbarResponsive from "./navbar.responsive";
import constants from "../../utils/constants";

export const NavbarContainer = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 50px;
  background-color: ${constants.colors.bsDarkBold};
  /* background-color: ${constants.colors.bsDarkBold}; */
  /* backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999; */
  position: sticky;
  top: 0;
  z-index: 1000;
  /* ${constants.boxShadow}; */
  backdrop-filter: blur(5px);
  transition: background-color 0.2s ease-in-out;


  .navbar-wrapper {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand-header-logo {
    height: 35px;
  }

  .navbar-list {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  .navbar-item {
    list-style: none;
    color: ${constants.colors.bsWhite};
    font-weight: 500;
    position: relative;
    ${constants.fontSize.paragraph.laptop};
    letter-spacing: 0.5px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -7px;
      width: 0%;
      height: 1.45px;
      background-color: ${constants.colors.bsPinkDefault};;
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .request-quote-button {
    background-color: transparent;
    border: 2px solid ${constants.colors.bsWhite};
    width: 170px;
    height: 50px;
    color: ${constants.colors.bsWhite};
    border-radius: 50px;
    letter-spacing: 0.5px;
    font-weight: 600;
    ${constants.fontSize.paragraph.mobile};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.1s ease-in-out, border-color 0.2s ease-in-out;

    &:hover {
      border-color: ${constants.colors.bsPinkDefault};
      background-color: ${constants.colors.bsPinkDefault};
      color: ${constants.colors.bsWhite};
    }
  }

  .products-li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    z-index: 999;

    &:hover {
      .products-list-container {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .products-list-container {
    position: absolute;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    transform: translateY(100%);
  }

  .products-list {
    margin-top: 20px;
    list-style: none;
    background-color: ${constants.colors.bsDarkTransparent};
    backdrop-filter: blur(5px);
    border-radius: 10px;
    overflow: hidden;
  }

  .products-item {
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${constants.colors.bs};
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${constants.colors.bsPinkDefault};
    }
  }

  .hamberger-menu {
    display: none;
  }

  .hamberger-icon {
    color: ${constants.colors.bsWhite};

    &:hover {
      color: ${constants.colors.bsPinkDefault};
    }
  }

  .hamburger-menu-tray-container {
    position: fixed;
    background-color: ${constants.colors.bsDarkTransparent};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: 100vh;
  }

  .hamburger-menu-tray {
    background-color: ${constants.colors.bsGrayTransparent};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    /* gap: 10px; */
    /* border-radius: 10px; */
    height: 100%;
    min-height: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    /* transition: transform 0.2s ease-in-out; */
    animation: trayTranslate 0.5s forwards ease-in-out;
    width: 90%;
    min-width: 90%;

    @keyframes trayTranslate {
      0% {
        opacity: 0;
        transform: translateX(-20%);
      }

      100% {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }

  .hamburger-top-container {
    min-width: 100%;
    width: 100%;
  }

  .brand-logo-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
  }

  .mob-brand-logo {
    width: 190px;
  }

  .hamburger-close-button {
    background-color: transparent;
    border: none;
    color: ${constants.colors.bsWhite};
  }

  .hamburger-menu-list, .hamburger-product-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .hamburger-menu-item a, .hamburger-product-item a, .hamburger-menu-products-container span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 500;
  }

  .mob-icons {
    font-size: 22px;
  }

  .hamburger-product-items {
    cursor: pointer;
  }

  .hamburger-product-list {
    margin-left: 5px;
    margin-top: 10px;
  }

  .hamburger-product-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 500;
  }

  .social-title {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 500;
    margin-bottom: 10px;
  }

  .social-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .social-icon {
    min-width: 32px;
    min-height: 32px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid ${constants.colors.bsWhite};
    padding: 5px;
    color: ${constants.colors.bsWhite};
  }

  .right-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .jsl-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .jsl-tag, .ham-jsl-tag {
    font-weight: 200;
    color: ${constants.colors.bsWhite};
    font-size: 10px;
    letter-spacing: 0.5px;
  }

  .jsl-logo {
    width: 100px;
  }

  .ham-jsl-logo-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${navbarResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${navbarResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${navbarResponsive.mobile};
  }
`;