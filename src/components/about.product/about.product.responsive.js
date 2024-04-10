import { css } from "styled-components";
import constants from "../../utils/constants";

const aboutProductResponsive = {
  mobile: css`
    flex-direction: column;
    height: 450px;
    gap: 40px;

    .product-image-container {
      width: 280px;
      height: 150px;
      min-height: 180px;
      min-width: 250px;
    }

    .product-header-text {
      text-align: center;
      ${constants.fontSize.header.mobile};
    }

    .about-product-text {
      ${constants.fontSize.paragraph.mobile};
      /* text-align: center; */
    }
  `,
  tablet: css`
    height: 300px;
    gap: 20px;

    .product-image-container {
      width: 250px;
      height: 150px;
      min-height: 150px;
      min-width: 200px;
    }

    .product-details-container {
      width: 350px;
      gap: 10px;
    }

    .product-header-text {
      ${constants.fontSize.header.tablet};
    }

    .about-product-text {
      ${constants.fontSize.paragraph.tablet};
    }
  `,
  laptop: css`
    height: 350px;
    gap: 45px;

    .product-image-container {
      width: 300px;
      height: 200px;
    }

    .product-details-container {
      width: 500px;
      gap: 15px;
    }

    .product-header-text {
      ${constants.fontSize.header.laptop};
    }

    .about-product-text {
      ${constants.fontSize.paragraph.laptop};
    }
  `,
}

export default aboutProductResponsive;