import styled from "styled-components";
import constants from "../../utils/constants";
import footerBackgroundImg from "../../assets/images/footer-steels.jpg";
import footerResponsive from "./footer.responsive";

export const FooterContainer = styled.div`
  background: linear-gradient(${constants.colors.bsDarkTransparent}, ${constants.colors.bsDarkTransparent}), url(${footerBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .footer-wrapper {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .brand-logo {
    width: 250px;
    cursor: pointer;
  }

  .footer-content-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .header-text {
    margin-bottom: 10px;
    ${constants.fontSize.paragraph.default};
    color: ${constants.colors.bsPinkDark};
    font-weight: 700;
  }

  .content-text {
    color: ${constants.colors.bsOffWhite};
    ${constants.fontSize.paragraph.mobile};
    line-height: 22px;
    letter-spacing: 0.5px;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .contact-icon {
    font-size: 20px;
  }

  .contact-details-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .social-media-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .mui-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 35px;
    height: 35px;
    border: 2px solid ${constants.colors.bsWhite};
    border-radius: 50px;
    color: ${constants.colors.bsWhite};
    transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;

    &:hover {
      background-color: ${constants.colors.bsPinkDark};
      border-color: ${constants.colors.bsPinkDark};
    }
  }

  .middle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .links {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .link {
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.laptop};
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .bottom-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }

  .divider {
    width: 100%;
    height: 1.5px;
    background-color: ${constants.colors.bsGrayTransparent};
  }

  .credits-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .copyright, .credit {
    color: ${constants.colors.bsOffWhite};
    ${constants.fontSize.paragraph.mobile};
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${footerResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${footerResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${footerResponsive.mobile};
  }
`;