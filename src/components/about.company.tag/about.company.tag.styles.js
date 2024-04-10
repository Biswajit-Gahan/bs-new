import styled from "@emotion/styled";
import bgImage from "../../assets/images/rectangle-steel.jpg";
import constants from "../../utils/constants";
import aboutCompanyResponsive from "./about.company.responsive";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: fit-content;
  min-width: 100%;
  /* background: linear-gradient(var(--bs-main), var(--bs-main)), url(${bgImage}); */
  background: linear-gradient(${constants.colors.bsDarkTransparent}, ${constants.colors.bsDarkTransparent}), url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .wrapper {
    width: inherit;
    height: fit-content;
    min-width: inherit;
    min-height: inherit;
    position: relative;
    /* backdrop-filter: blur(2px); */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;

    &::before {
      content: "";
      position: absolute;
      width: 15%;
      height: 25px;
      background-color: ${constants.colors.bsPinkTranparent};
      left: 0;
      top: 40px;
      border-top: 20px;
      border-left: 5px;
      border-bottom: 15px;
    }

    &::after {
      content: "";
      position: absolute;
      width: 35%;
      height: 25px;
      background-color: ${constants.colors.bsPinkTranparent};
      right: 0;
      bottom: 40px;
    }
  }
  
  .content-container {
    width: 90%;
  }

  .top-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;
  }

  .heading {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
    margin-bottom: 5px;
  }

  .about-tag {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.default};
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .about-content {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.default};
    letter-spacing: 0.5px;
    line-height: 22px;
  }

  .bottom-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
  }

  .couter-header {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.paragraph.default};
    font-weight: 600;
    margin-bottom: 10px;
  }

  .counter {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.header.default};
    letter-spacing: 1px;
  }

  .mini-text {
    ${constants.fontSize.paragraph.mobile};
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${aboutCompanyResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${aboutCompanyResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${aboutCompanyResponsive.mobile};
  }

`;