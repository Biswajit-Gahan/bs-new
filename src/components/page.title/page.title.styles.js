import styled from "styled-components";
import constants from "../../utils/constants";
import footerBg from "../../assets/images/footer-steels.jpg";
import pageTitleResponsive from "./page.title.responsive";

export const PageTitleContainer = styled.div`
  /* page-name-section */

  .page-name-section {
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

  .page-name {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.header.default};
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${pageTitleResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${pageTitleResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${pageTitleResponsive.mobile};
  }
`;