import styled from "styled-components";
import constants from "../../utils/constants";
import generateQuotationResponsive from "./generate.quotation.responsive";

export const GenerateQuotationContainer = styled.div`
  width: 800px;
  min-width: 800px;
  /* background-color: green; */
  display: flex;
  min-height: 340px;
  height: 340px;
  padding: 20px;

  .left-container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    flex:1;
    overflow: hidden;
  }

  .lady-image {
    width: 300px;
    height: auto;
    min-width: 300px;
    min-height: auto;
    z-index: 1;
  }

  .circle-div {
    width: 300px;
    height: 300px;
    min-width: 300px;
    min-height: 300px;
    background-color: ${constants.colors.bsPinkTranparent};
    border-radius: 50%;
    position: absolute;
    right: 0;
  }

  .right-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    gap: 20px;
  }

  .generate-quotation-button, .contact-us-button {
    width: 250px;
    min-width: 250px;
    height: 50px;
    min-height: 50px;
    border: none;
    cursor: pointer;
    background-color: ${constants.colors.bsPinkDefault};
    color: ${constants.colors.bsWhite};
    border-radius: 5px;
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.03);
      ${constants.boxShadow};
    }
  }

  .contact-us-button {
    border: 2px solid ${constants.colors.bsPinkDefault};
    background-color: ${constants.colors.bsWhite};
    color: ${constants.colors.bsPinkDefault};
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${generateQuotationResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${generateQuotationResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${generateQuotationResponsive.mobile};
  }
`;