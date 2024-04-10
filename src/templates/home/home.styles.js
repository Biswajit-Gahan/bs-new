import styled from "styled-components";
import constants from "../../utils/constants";
import homeResponsive from "./home.responsive";

export const Container = styled.main`
  width: 100%;

  .video-container {
    width: inherit;
    height: 700px;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${constants.colors.bsDarkTransparent};
      /* backdrop-filter: blur(0px); */
    }
  }
  .brand-video {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: top;
    /* animation: videoAnimation 3s; */
  }

  .hero-container {
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    z-index: 998;
  }

  .hero-text {
    font-size: 30px;
    color: ${constants.colors.bsWhite};
    text-align: center;
    line-height: 50px;
    font-weight: 600;
    /* animation: heroText 2s; */
    /* opacity: 0; */

    .hero-bold {
      font-size: 40px;
      color: ${constants.colors.bsPinkDefault};
      font-weight: 800;
      /* opacity: 0; */
    }
  }

  .hero-tag {
    font-size: 16px;
    color: ${constants.colors.bsWhite};
    text-align: center;
    letter-spacing: 1px;
    line-height:25px;
    /* animation: heroTag 2s; */
    /* opacity: 0; */
  }

  .header-button {
    width: 170px;
    height: 55px;
    border-radius: 50px;
    border: none;
    margin: 10px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.2px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    /* animation: buttons 2s; */
     /* opacity: 0; */
    &:hover {
      transform: scale(0.92);
    }
  }

  .header-our-products-button {
    background-color: ${constants.colors.bsPinkDefault};
    color: ${constants.colors.bsWhite};
  }

  .header-know-more-button {
    background-color: transparent;
    border: 2px solid ${constants.colors.bsWhite};
    color: ${constants.colors.bsWhite};
  }

  .about-steels-container {
    /* margin-top: 50px; */
  }

  .product-range-container {
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-range-container-wrapper {
    width: 900px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .product-range-header {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
  }

  .product-range-header-text {
    color: ${constants.colors.bsPinkDefault};
    min-width: fit-content;
    ${constants.fontSize.header.default};
  }

  .product-range-cards-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 50px; */
  }

  .header-divider {
    width: 100%;
    height: 0.5px;
    background-color: gray;
  }

  .brochure-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
  }

  .about-company-container {
    margin-top: 50px;
  }

  .testimonials-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .need-assistance-container {
    margin-top: 50px;
  }

  .events-slider-container {
    margin-top: 50px;
  }

  .message-box-section {
    margin: 50px 0;
  }

  @keyframes buttons {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(1.2);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes heroTag {
    0% {
      opacity: 0;
      transform: translateX(-20px) scale(1.1);
    }

    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes heroText {
    0% {
      opacity: 0;
      transform: translateY(-20px) scale(1.1);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes videoAnimation {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.3);
    }
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${homeResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${homeResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${homeResponsive.mobile};
  }
`;