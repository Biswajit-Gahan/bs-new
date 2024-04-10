import styled from "styled-components";
import constants from "../../utils/constants";
import tubeMill from "../../assets/images/tube-mill.jpg";
import QualityResponsive from "./quality.responsive";

export const QualityContainer = styled.div`
  /* about-section */
  .about-section {
    margin-bottom: 50px;
  }

  /* grades-section */
  .grades-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .grades-section-wrapper {
    width: 1000px;
    min-width: 1000px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    gap: 30px;
    flex-direction: column;
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

  /* jsl-section */
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

  /* manufacturing-section */
  .manufacturing-section {
    margin-bottom: 50px;
  }

  .manufacturing-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
  }

  .header-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .yxh-image {
    width: 80%;
    height: auto;
    object-fit: cover;
  }

  .data-container {
    /* width: 1000px; */
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${tubeMill});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .data-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    backdrop-filter: blur(3px);
    /* width: 1000px; */
    padding: 100px;
    background-color: ${constants.colors.bsDarkTransparent};
  }

  .header-text {
    font-weight: 900;
    color: ${constants.colors.bsPinkDark};
    ${constants.fontSize.header.default};
  }

  .header-tag {
    font-weight: 500;
    ${constants.fontSize.paragraph.default};
    letter-spacing: 0.5px;
    color: ${constants.colors.bsTextDefault};
  }

  .data-wrapper .header-tag {
    color: ${constants.colors.bsWhite};
  }

  /* message-box-section */
  .message-box-section {
    margin-bottom: 50px;
  }
  
  @media (max-width: ${constants.device.laptop_small}) {
    ${QualityResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${QualityResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${QualityResponsive.mobile};
  }


`;

export const ProductGradesContainer = styled.div`
  .product-grade-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .content, .content-link {
    ${constants.fontSize.paragraph.default};
    letter-spacing: 0.5px;
    line-height: 22px;
  }

  .underline {
    color: ${constants.colors.bsPinkDark};
    cursor: pointer;
    font-weight: 600;
  }

  .drop-down-container {
    padding: 30px;
    ${constants.boxShadow};
    border-radius: 10px;
  }
  
  .header-text {
    color: ${constants.colors.bsPinkDark};
    ${constants.fontSize.header.laptop};
    margin-bottom: 10px;
  }

  .sub-header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.mobile};
    margin-bottom: 5px;
  }

  .paragraph-text strong {
    color: ${constants.colors.bsBlue};
    ${constants.fontSize.header.mobile};
  }

  .paragraph-text {
    margin-bottom: 5px;
    ${constants.fontSize.paragraph.default};
    letter-spacing: 0.5px;
  }

  .close-button {
    margin-top: 10px;
    padding: 8px 25px;
    cursor: pointer;
    border: none;
    background-color: ${constants.colors.bsPinkDark};
    border-radius: 3px;
    color: ${constants.colors.bsWhite};
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${QualityResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${QualityResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${QualityResponsive.mobile};
  }
`;