import styled from "styled-components";
import constants from "../../utils/constants";
import LoadingScreenResponsive from "./loading.screen.responsive";

export const LoadingScreenComponent = styled.div`
  height: 80vh;
  width: 100%;

  .loading-screen-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:30px;
  }

  .loding-screen-template-wrapper {
    display: flex;
    gap: 20px;
  }

  .big-box {
    width: 100px;
    height: 100px;
    min-width: 100px;
    min-height: 100px;
    background-color: ${constants.colors.bsOffWhite};
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      height: 200px;
      width: 50px;
      background: linear-gradient(to right, ${constants.colors.bsOffWhite}, ${constants.colors.bsWhiteTransparent});
      transform: rotateZ(320deg) translateY(-30%);
      animation: loading 1s forwards ease-in-out infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      height: 200px;
      width: 50px;
      background: linear-gradient(to right, ${constants.colors.bsOffWhite}, ${constants.colors.bsWhiteTransparent});
      transform: rotateZ(320deg) translateY(-30%);
      animation: loading 1s 1.2s forwards ease-in-out infinite;
    }
  }

  .fake-tags {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .small-box {
    width:300px;
    height: 30px;
    background-color: ${constants.colors.bsOffWhite};
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10%;
      height: 200px;
      width: 50px;
      background: linear-gradient(to right, ${constants.colors.bsOffWhite}, ${constants.colors.bsWhiteTransparent});
      transform: rotateZ(320deg) translateY(-30%);
      animation: loading 1.0s forwards ease-in-out infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -10%;
      height: 200px;
      width: 50px;
      background: linear-gradient(to right, ${constants.colors.bsOffWhite}, ${constants.colors.bsWhiteTransparent});
      transform: rotateZ(320deg) translateY(-30%);
      animation: loading 1.0s 1.2s  forwards ease-in-out infinite;
    }
  }

  .small-box-2 {
    width: 150px;
    min-width: 150px;
    height: 10px;
    min-height: 10px;
    background-color: ${constants.colors.bsOffWhite};
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10%;
      height: 200px;
      width: 50px;
      background: linear-gradient(to right, ${constants.colors.bsOffWhite}, ${constants.colors.bsWhiteTransparent});
      transform: rotateZ(320deg) translateY(-30%);
      animation: loading 1.0s forwards ease-in-out infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -10%;
      height: 200px;
      width: 50px;
      background: linear-gradient(to right, ${constants.colors.bsOffWhite}, ${constants.colors.bsWhiteTransparent});
      transform: rotateZ(320deg) translateY(-30%);
      animation: loading 1.0s 1.2s  forwards ease-in-out infinite;
    }
  }

  @keyframes loading {
    0% {
      opacity: 1;
      transform: rotateZ(320deg) translate(0%, -30%);
    }

    100% {
      opacity: 0;
      left: 150%;
      transform: rotateZ(320deg) translate(100%, -30%);
    }
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${LoadingScreenResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${LoadingScreenResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${LoadingScreenResponsive.mobile};
  }
`;