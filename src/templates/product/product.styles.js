import styled from "styled-components";
import footerBg from "../../assets/images/footer-steels.jpg";
import measurementBg from "../../assets/images/measurement-img.jpeg";
import constants from "../../utils/constants";
import productResponsive from "./product.responsive";

export const ProductContainer = styled.div`
  /* product-name-section */

  .product-name-section {
    background: linear-gradient(${constants.colors.bsDarkTransparent}, ${constants.colors.bsDarkTransparent}), url(${footerBg}) fixed no-repeat;
    background-size: cover;
    width: 100%;
    height: 200px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: auto;
  }

  .product-name {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.header.default};
  }

  /* about-product-section */

  .about-product-section {
    margin-bottom: 50px;
  }

  /* product-sizes-info-section */

  .product-sizes-info-section {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .product-sizes-info-wrapper {
    background: linear-gradient(${constants.colors.bsDarkTransparent}, ${constants.colors.bsDarkTransparent}), url(${measurementBg}) no-repeat;
    background-size: cover;
    width: 800px;
    height: 450px;
    min-width: 800px;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    border-radius: 10px;
  }

  .product-sizes-header-text {
    ${constants.fontSize.header.default};
    color: ${constants.colors.bsPinkDefault};
    margin-bottom: 10px;
  }

  .product-sizes-header-tag {
    ${constants.fontSize.paragraph.default};
    color: ${constants.colors.bsWhite};
    letter-spacing: 0.5px;
    line-height: 22px;
  }

  .table {
    border-radius: 10px;
    width: 350px;
    height: 300px;
  }

  .table-header .header-data {
    ${constants.fontSize.paragraph.laptop};
    color: ${constants.colors.bsPinkDefault};
    font-weight: 700;
  }

  .table-header-data {
    outline: 2px solid ${constants.colors.bsWhite};
    padding: 7px;
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.laptop};
  }

  /* product-dimentions-section */

  .product-dimentions-section {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
  }

  .product-dimentions-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    /* background-color: green; */
    width: 800px;
    min-width: 800px;
  }

  .product-dimentions-top-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    /* background-color: yellow; */
  }

  .product-dimentions-header-title {
    color: ${constants.colors.bsDark};
    ${constants.fontSize.header.default};
  }

  .product-dimentions-details-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    
  }

  .dimentions-top-section, .dimentions-bottom-section {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .outer-diameter-container, .thickness-container, .material-grade-container, .usage-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 300px;
    min-width: 300px;
    gap: 10px;
  }

  .length-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }

  .product-dimentions-icon-container {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    border-radius: 5px;
    background-color: ${constants.colors.bsPinkDefault};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-dimentions-icon {
    font-size: 30px;
    color: ${constants.colors.bsWhite};
  }

  .product-dimentions-title {
    margin-bottom: 3px;
    color: ${constants.colors.bsDark};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 700;
  }

  .product-dimentions-text, .product-dimentions-grade-text {
    color: ${constants.colors.bsDark};
    ${constants.fontSize.paragraph.mobile};
    font-weight: 500;
  }

  .grade-text-container {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    flex-wrap: wrap;
  }

  .product-dimentions-grade-text {
    padding: 1px 7px;
    border: 1.5px solid ${constants.colors.bsPinkDefault};
    border-radius: 50px;
    cursor: pointer;


    &:hover {
      background-color: ${constants.colors.bsPinkDefault};
      color: ${constants.colors.bsWhite};
    }
  }

  .product-dimentions-bottom-wrapper {
    width: 800px;
    min-width: 800px;
    ${constants.boxShadow};
    padding: 30px;
    border-radius: 10px;
    overflow: hidden;
    height: max-content;
    min-height: max-content;
  }

  .product-grade-description-header-title {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 700;
    margin-bottom: 10px;
  }

  .product-grade-description-content {
    color: ${constants.colors.bsTextDefault};
    ${constants.fontSize.paragraph.mobile};
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 22px;
  }

  .close-button {
    padding: 5px 15px;
    cursor: pointer;
    background-color: ${constants.colors.bsPinkDefault};
    color: ${constants.colors.bsWhite};
    border: none;
    margin-top: 10px;
    border-radius: 3px;
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
  }

  /* generate-quotation-section */

  .generate-quotation-section {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* brochure-section */

  .brochure-section {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* still-need-help-section */

  .still-need-help-section {
    margin-bottom: 50px;
  }

  /* responsive laptop */
  
  @media (max-width: ${constants.device.laptop_small}) {
    ${productResponsive.laptop};
  }
  
  /* responsive tablet */
  
  @media (max-width: ${constants.device.tablet}) {
    ${productResponsive.tablet};
  }

  /* responsive mobile */

  @media (max-width: ${constants.device.mobile}) {
    ${productResponsive.mobile};
  }
`;