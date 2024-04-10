import styled from "styled-components";
import constants from "../../../utils/constants";
import quotationModalResponsive from "./quotation.modal.responsive";

export const QuotationModalContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  /* align-items: center; */
  justify-content: center;
  overflow: auto;
  padding: 50px;
  

  .quotation-form-container {
    background-color: white;
    ${constants.boxShadow};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 20px;
    background-color: ${constants.colors.bsWhiteTransparent};
    width: max-content;
    min-width: max-content;
    height: max-content;
    min-height: max-content;
    animation: modal-popup 0.2s forwards;

    @keyframes modal-popup {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .header-text {
    ${constants.fontSize.header.mobile};
    color: ${constants.colors.bsPinkDark};
    margin-bottom: 10px;
  }

  .input-container-stack {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  .input {
    width: 220px;
    height: 35px;
    padding: 0 10px;
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    border: 2px solid ${constants.colors.bsPinkDark};
    font-weight: 500;
    ${constants.fontSize.paragraph.mobile};
  }

  .text-area-input {
    width: 100%;
    height: 150px;
    resize: none;
    padding: 10px;
  }

  .input-label {
    ${constants.fontSize.paragraph.mobile};
    font-weight: 600;
  }

  .bold-text {
    color: ${constants.colors.bsPinkDark};
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .modal-button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: ${constants.colors.bsPinkDark};
    color: ${constants.colors.bsWhite};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${quotationModalResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${quotationModalResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${quotationModalResponsive.mobile};
  }
`;