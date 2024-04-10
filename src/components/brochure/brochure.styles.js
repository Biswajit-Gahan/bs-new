import styled from "styled-components";
import constants from "../../utils/constants";
import brochureResponsive from "./brochure.responsive";

export const Container = styled.div`
  width: 900px;
  min-width: 900px;
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  .brochure-header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .brochure-header-text {
    min-width: fit-content;
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
  }

  .header-divider {
    width: 100%;
    height: 0.5px;
    background-color: gray;
  }

  .brochure-content {
    font-weight: 500;
    letter-spacing: 0.5px;
    ${constants.fontSize.paragraph.default};
    color: ${constants.colors.bsTextDefault};
  }

  .brochure-button {
    width: 250px;
    height: 50px;
    border: none;
    background-color: ${constants.colors.bsPinkDefault};
    border-radius: 5px;
    color: ${constants.colors.bsWhite};
    cursor: pointer;
    letter-spacing: 0.5px;
    ${constants.fontSize.paragraph.default};
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
      ${constants.boxShadow};
    }
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${brochureResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${brochureResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${brochureResponsive.mobile};
  }
`;