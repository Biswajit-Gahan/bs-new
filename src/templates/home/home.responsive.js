import { css } from "styled-components";
import constants from "../../utils/constants";

const homeResponsive = {
  mobile: css`
    .video-container {
      height: 500px;
    }

    .hero-container {
      width: 95%;
    }

    .header-button {
      width: 130px;
      height: 45px;
      margin: 5px;
      font-size: 13px;
    }

    .product-range-container {
      height: fit-content;
      min-height: fit-content;
      padding: 50px;
    }

    .product-range-cards-container {
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
    }

    .product-range-header {
      flex-direction: column;
    }

    .product-range-header-text {
      ${constants.fontSize.header.mobile};
    }

    /* .product-range-container-wrapper {
      justify-content: center;
      width: 600px;
    } */

    .brochure-container {
      min-height: fit-content;
      height: fit-content;
      padding: 0 50px 50px;
    }
  `,
  tablet: css`
    .video-container {
      height: 550px;
    }

    .hero-container {
      width: 80%;
      gap: 10px;
    }

    .hero-text {
      font-size: 18px;
      line-height: 35px;

      .hero-bold {
        font-size: 25px;
      }
    }

    .hero-tag {
      font-size: 13px;
      line-height:20px;
    }

    .header-button {
      width: 150px;
      height: 50px;
      margin: 5px;
      font-size: 13px;
    }

    .product-range-header-text {
      ${constants.fontSize.header.tablet};
    }

    .product-range-cards-container {
      gap: 20px;
    }

    .product-range-container-wrapper {
      width: 600px;
    }
  `,
  laptop: css`
    .video-container {
      height: 600px;
    }

    .hero-container {
      gap: 15px;
    }

    .hero-text {
      font-size: 22px;
      line-height: 45px;

      .hero-bold {
        font-size: 32px;
        letter-spacing: 0.5px;
      }
    }

    .hero-tag {
      font-size: 14px;
    }

    .header-button {
      width: 160px;
      height: 50px;
      margin: 7px;
      font-size: 14px;
    }

    .product-range-container {
      /* height: 350px; */
      height: fit-content;
      min-height: fit-content;
      padding: 30px;
    }

    .product-range-header-text {
      ${constants.fontSize.header.laptop};
    }

    .product-range-cards-container {
      gap: 40px
    }

    .product-range-container-wrapper {
      width: 800px;
    }
  `,
};

export default homeResponsive;