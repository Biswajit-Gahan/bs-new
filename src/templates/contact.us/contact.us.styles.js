import styled from "styled-components";
import constants from "../../utils/constants";
import contactUsResponsive from "./contact.us.responsive";

export const ContactUsContainer = styled.div`
  /* contact-us-section */
  .contact-us-section {
    margin-bottom: 50px;
  }

  /* map-section */
  .map-section {
    margin-bottom: 50px;
  }

  .map-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .locate-us-heading {
    color: ${constants.colors.bsDark};
    ${constants.fontSize.header.default};
  }

  .map-container {
    height: 500px;
    width: 100%;
  }

  /* address-section */
  .address-section {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .address-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    width: 900px;
  }

  .all-address-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
  }

  .address-header-title {
    color: ${constants.colors.bsDark};
    ${constants.fontSize.header.default};
  }

  .top-address-wrapper { 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .type-header-title {
    margin-bottom: 10px;
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.paragraph.laptop};
  }

  .type-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: ${constants.colors.bsDark};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 22px;
  }

  .mui-icon {
    font-size: 23px;

    &:hover {
      color: ${constants.colors.bsPinkDark};
    }
  }

  /* need-help */

  .need-help {
    margin-bottom: 50px;
  }

  .leaflet-top, .leaflet-bottom {
    z-index: 500;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${contactUsResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${contactUsResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${contactUsResponsive.mobile};
  }
`;