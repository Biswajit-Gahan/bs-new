import { styled } from "styled-components";
import constants from "../../utils/constants";
import newsResponsive from "./news.responsive";

export const NewsContainer = styled.div`
  position: relative;

  /* about-title-section */
  .about-title-section {
    margin-bottom: 50px;
  }

  /* slider-section */
  .slider-section {
    margin-bottom: 50px;
  }

  .slider-container {
    margin: 0 50px;
    overflow: hidden;
    position: relative;
  }

  .slider-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    transition: transform 0.3s ease-in-out;

    /* transform: translateX(-2730px); */
  }

  .news-container {
    width: 500px;
    height: 500px;
    min-height: 500px;
    min-width: 500px;
    ${constants.boxShadow};
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    &::after {
      content: "Read More...";
      position: absolute;
      background-color: ${constants.colors.bsWhiteTransparent};
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${constants.fontSize.header.laptop};
      font-weight: 800;
      backdrop-filter: blur(2px);
      color: ${constants.colors.bsDark};
      opacity: 0;
      transition: top 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }

    &:hover {
      &::after {
        top: 0;
        opacity: 1;
      }
      
    }
  }

  .news-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .slider-button {
    position: absolute;
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    ${constants.boxShadow};
    background-color: ${constants.colors.bsWhiteTransparent};
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
  }
  
  .slider-button-left {
    left: 100px;
  }

  .slider-button-right {
    right: 100px;
  }

  /* view-modal-section */
  .view-modal-section {
    position: fixed;
    background-color: ${constants.colors.bsDarkTransparent};
    backdrop-filter: blur(10px);
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    padding: 20px;
  }

  .view-modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .modal-news-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    opacity: 0;
    animation: viewModal 0.5s forwards 1 ease-in-out;

    @keyframes viewModal {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  .close-button {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 30px;
    height: 30px;
    min-height: 30px;
    min-width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    ${constants.boxShadow};
    background-color: ${constants.colors.bsWhiteTransparent};
    color: ${constants.colors.bsDark};
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
  }

  /* testimonial-section */
  .testimonial-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }

  /* need-help-section */
  .need-help-section {
    margin-bottom: 50px;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${newsResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${newsResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${newsResponsive.mobile};
  }
`;