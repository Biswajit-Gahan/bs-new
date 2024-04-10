import styled from "styled-components";
import constants from "../../utils/constants";
import productCardResponsive from "./product.card.responsive";

export const Container = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  ${constants.boxShadow};

  &::after {
    content: "${({ $productName }) => $productName}";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${constants.colors.bsBlueTransparent};
    color: ${constants.colors.bsWhite};
    ${constants.fontSize.paragraph.default};
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: height 0.3s ease-in-out;
  }

  .product-image-container {
    width: inherit;
    height: inherit;
    position: relative;
  }

  &:hover {
    &::after {
      content: "Read More";
      height: 50%;
    }

    .card-product-img {
      transform: scale(1.2);
    }
  }

  /* .product-image-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 18, 18,0.3);
  } */

  .card-product-img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${productCardResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${productCardResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${productCardResponsive.mobile};
  }
`;