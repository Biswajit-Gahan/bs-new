import styled from "styled-components";
import constants from "../../utils/constants";
import galleryResponsive from "./gallery.responsive";
// import bsLogo from "../../assets/images/bs-footer-icon-2.png";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* gap: 10px; */

  .gallery-title {
    ${constants.fontSize.header.default};
    color: ${constants.colors.bsPinkDefault};
  }

  .gallery-content-container {
    padding: 25px;
    position: relative;
    overflow: hidden;
    width: 875px;
    min-width: 875px;

    /* &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background-color: ${constants.colors.bsWhite};
      z-index: 999;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 100%;
      background-color: ${constants.colors.bsWhite};
      z-index: 999;
    } */
  }

  .gallery-wrapper {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* height: 210px; */
    gap: 25px;
    transition: transform 0.2s ease-in-out;
    /* overflow: hidden; */
  }

  .image-wrapper {
    position: relative;

    &:hover .gallery-image {
      padding: 5px;
      transform: scale(1.1);
      cursor: pointer;
    }

    &:hover .water-mark {
      transform: translate(50%, 50%) scale(1.1);
    }

    /* &::after {
      content: "Bishnu Steel";
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: ${constants.colors.bsWhiteTransparentTwo};
      cursor: pointer;
      font-size: 25px;
      font-weight: 700;
      transform: rotateZ(15deg);
    } */

    /* &:hover .gallery-image {
      padding: 5px;
      transform: scale(1.1);
    } */
  }

  .water-mark {
    position: absolute;
    z-index: 50;
    bottom: 50%;
    right: 50%;
    width: 150px;
    transform: translate(50%, 50%);
    filter: drop-shadow(0 5px 10px ${constants.colors.bsDarkTransparent});
    transition: transform 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }

  .gallery-image {
    width: 220px;
    height: 220px;
    min-width: 220px;
    min-height: 220px;
    object-fit: cover;
    object-position: center;
    ${constants.boxShadow};
    border-radius: 5px;
    transition: transform 0.2s ease-in-out, padding 0.2s ease-in-out;
  }

  .left-button,
  .right-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${constants.colors.bsWhiteTransparent};
    ${constants.boxShadow};
    z-index: 999;
    cursor: pointer;
  }

  .left-button {
    left: 5%;
  }

  .right-button {
    right: 5%;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${galleryResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${galleryResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${galleryResponsive.mobile};
  }
`;
