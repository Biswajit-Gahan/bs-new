import { css } from "styled-components";
import constants from "../../utils/constants";

const generateQuotationResponsive = {
  mobile: css`
    min-height: 370px;
    height: 370px;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    .lady-image {
      width: 230px;
      min-width: 230px;
    }

    .circle-div {
      width: 150px;
      height: 150px;
      min-width: 150px;
      min-height: 150px;
    }

    .generate-quotation-button, .contact-us-button {
      width: 180px;
      min-width: 180px;
      height: 45px;
      min-height: 45px;
      ${constants.fontSize.paragraph.mobile};
    }
  `,
  tablet: css`
    width: 100%;
    min-width: 100%;
    min-height: 290px;
    height: 290px;

    .lady-image {
      width: 250px;
      min-width: 250px;
    }

    .circle-div {
      width: 250px;
      height: 250px;
      min-width: 250px;
      min-height: 250px;
    }

    .generate-quotation-button, .contact-us-button {
      width: 200px;
      min-width: 200px;
      height: 45px;
      min-height: 45px;
      ${constants.fontSize.paragraph.tablet};
    }
  `,
  laptop: css`
    width: 700px;
    min-width: 700px;
    min-height: 320px;
    height: 320px;

    .lady-image {
      width: 270px;
      min-width: 270px;
    }

    .circle-div {
      width: 280px;
      height: 280px;
      min-width: 280px;
      min-height: 280px;
    }

    .generate-quotation-button, .contact-us-button {
      width: 230px;
      min-width: 230px;
      height: 45px;
      min-height: 45px;
      ${constants.fontSize.paragraph.tablet};
    }
  `,
};

export default generateQuotationResponsive;