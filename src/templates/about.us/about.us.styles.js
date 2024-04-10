import styled from "styled-components";
import constants from "../../utils/constants";
import aboutUsResponsive from "./about.us.responsive";

export const AboutUsContainer = styled.main`
  /* page-name-section */
  .page-name-section {
    margin-bottom: 50px;
  }

  /* our-mission-section */
  .our-mission-section {
    margin-bottom: 50px;
  }

  .our-mission-container {
    width: 1000px;
    margin: 0 auto;
  }

  .our-mission-header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
    position: relative;
    display: inline-block;
    margin-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${constants.colors.bsPinkDefault};
    }
  }

  .our-mission-content {
    color: ${constants.colors.bsTextDefault};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 22px;
  }

  /* our-vision-section */
  .our-vision-section {
    margin-bottom: 50px;
  }

  .our-vision-container {
    width: 1000px;
    margin: 0 auto;
  }

  .our-vision-header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
    position: relative;
    display: inline-block;
    margin-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${constants.colors.bsPinkDefault};
    }
  }

  .our-vision-content {
    color: ${constants.colors.bsTextDefault};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 22px;
  }

  /* about-us-section */
  .about-us-section {
    margin-bottom: 50px;
  }

  /* steel-quality-section */
  .steel-quality-section {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .steel-quality-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 100px;
    width: 1000px;
  }

  .bishnu-quality-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .bishnu-quality-certificate-wrapper {
    width: 450px;
    position: relative;
    overflow: hidden;
    border: 3px solid ${constants.colors.bsOffWhite};
    border-radius: 5px;
  }

  .all-certificates-container {
    width: 100%;
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .certificate-image {
    width: 100%;
    /* height: auto; */
  }

  .header-text {
    color: ${constants.colors.bsPinkDefault};
  }

  .scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${constants.colors.bsWhiteTransparentTwo};
    color: ${constants.colors.bsDark};
    font-weight: 900;
    ${constants.boxShadow};
    cursor: pointer;
  }

  .scroll-button-left {
    left: 30px;
  }

  .scroll-button-right {
    right: 30px;
  }

  .jsl-section {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jsl-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 100px;
    width: 1000px;
  }

  .jsl-certificate-container {
    width: 450px;
    border: 3px solid ${constants.colors.bsOffWhite};
    border-radius: 5px;
    padding: 5px;
  }

  .jsl-certificate-image {
    width: 100%;
  }

  .jsl-content-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* our-products-section */
  .our-products-section {
    margin-bottom: 50px;
  }

  .our-products-container {
    width: 900px;
    margin: 0 auto;
  }

  .our-products-header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
    position: relative;
    display: inline-block;
    margin-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${constants.colors.bsPinkDefault};
    }
  }

  .our-products-content {
    color: ${constants.colors.bsTextDefault};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 22px;
  }

  .products-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .need-help-section {
    margin-bottom: 50px;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${aboutUsResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${aboutUsResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${aboutUsResponsive.mobile};
  }
`;