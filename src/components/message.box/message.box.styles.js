import styled from "styled-components";
import constants from "../../utils/constants";
import connectUs from "../../assets/images/contact-us.jpg";
import messageBoxResponsive from "./message.box.responsive";

export const MessageBoxContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .strap-design {
    width: 100%;
    height: 100px;
    background-color: ${constants.colors.bsPinkTranparent};
    position: absolute;
    left: 0;
    bottom: 20%;
  }

  .message-box-wrapper {
    width: 650px;
    height: 500px;
    background: linear-gradient(${constants.colors.bsDarkTransparent}, ${constants.colors.bsDarkTransparent}), url(${connectUs});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 50px;
    /* background-attachment: fixed; */
  }

  .header-text {
    width: max-content;
    color: ${constants.colors.bsPinkDefault};
    margin-bottom: 10px;
    ${constants.fontSize.header.default};
  }

  .header-tag {
    width: max-content;
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.default};
  }

  .message-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .input {
    width: 300px;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: ${constants.colors.bsGrayTransparent};
    color: ${constants.colors.bsWhite};
    
    &::placeholder {
      color: ${constants.colors.bsWhite};
    }
  }

  .input-message {
    resize: none;
    height: 150px;
    padding: 10px;
  }

  .submit-button {
    background-color: ${constants.colors.bsPinkDefault};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    /* cursor: not-allowed; */
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      ${constants.boxShadow};
    }
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${messageBoxResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${messageBoxResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${messageBoxResponsive.mobile};
  }
`;