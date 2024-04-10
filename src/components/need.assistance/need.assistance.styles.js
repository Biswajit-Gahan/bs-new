import styled from "styled-components";
import constants from "../../utils/constants";
import needAssistImg from "../../assets/images/enquiry.jpeg";
import needAssistanceResponsive from "./need.assistance.responsive";

export const NeedAssistanceContainer = styled.div`
  background: linear-gradient(${constants.colors.bsDarkTransparent}, ${constants.colors.bsDarkTransparent}), url(${needAssistImg});
  width: 100%;
  height: fit-content;
  min-height: fit-content;
  min-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* background-position: top center; */

  .wrapper {
    width: inherit;
    height: fit-content;
    min-width: inherit;
    min-height: inherit;
    /* backdrop-filter: blur(5px); */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-container {
    width: 800px;
    min-width: 800px;
    padding: 120px 0;
    display: flex;
    justify-content: center;
    gap: 50px;
  }

  .wrapper-left-container, .wrapper-right-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
  }

  .header-tag {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.default};
    font-weight: 600;
  }

  .header-content {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.default};
    letter-spacing: 0.5px;
    line-height: 22px;
  }

  .material-type, .material-quantity, .generate-quotation-button {
    width: 250px;
    min-width: 250px;
    height: 45px;
    min-height: 45px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.laptop};
    font-weight: 500;
  }

  .material-type, .material-quantity {
    background-color: ${constants.colors.bsGrayTransparent};
    outline: none; 
  }

  .material-quantity {
    &::placeholder {
      color: ${constants.colors.bsWhite};
    }
  }

  .generate-quotation-button {
    background-color: ${constants.colors.bsPinkDefault};
    cursor: pointer;
    transition: box-shadow ease-in-out 0.2s;

    &:hover {
      ${constants.boxShadow};
    }
  }

  .material-option {
    background-color: ${constants.colors.bsWhite};
    color: ${constants.colors.bsDark};
    ${constants.fontSize.paragraph.laptop};
    font-weight: 500;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${needAssistanceResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${needAssistanceResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${needAssistanceResponsive.mobile};
  }
`;