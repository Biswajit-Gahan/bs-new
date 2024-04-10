import { css } from "styled-components";
import constants from "../../utils/constants";

const aboutUsResponsive = {
  mobile: css`
    .our-vision-container, .our-mission-container, .our-products-container {
      width: 100%;
      padding: 0 20px;
    }

    .our-vision-header-text, .our-mission-header-text, .our-products-header-text {
      ${constants.fontSize.header.mobile};
    }

    .our-vision-content, .our-mission-content, .our-products-content {
      ${constants.fontSize.paragraph.mobile};
    }

    .products-container {
      justify-content: center;
      gap: 20px;
    }

    .steel-quality-container {
      gap: 20px;
      align-items: center;
      flex-direction: column;
    }

    .bishnu-quality-wrapper {
      padding: 10px;
    }

    .header-text {
      ${constants.fontSize.header.mobile};
    }

    .header-tag {
      ${constants.fontSize.paragraph.mobile};
    }

    .bishnu-quality-certificate-wrapper {
      width: 300px;
    }

    .jsl-certificate-container {
      width: 300px;
    }

    .jsl-wrapper {
      gap: 20px;
      flex-direction: column;
      align-items: center;
    }

    .jsl-content-container {
      padding: 10px;
    }
  `,
  tablet: css`
    .our-vision-container, .our-mission-container, .our-products-container {
      width: 600px;
    }

    .our-vision-header-text, .our-mission-header-text, .our-products-header-text {
      ${constants.fontSize.header.mobile};
    }

    .our-vision-content, .our-mission-content, .our-products-content {
      ${constants.fontSize.paragraph.mobile};
    }

    .steel-quality-container {
      gap: 20px;
    }

    .header-text {
      ${constants.fontSize.header.tablet};
    }

    .header-text {
      ${constants.fontSize.header.laptop};
    }

    .header-tag {
      ${constants.fontSize.paragraph.tablet};
    }

    .bishnu-quality-certificate-wrapper {
      width: 350px;
    }

    .jsl-certificate-container {
      width: 350px;
    }

    .jsl-wrapper {
      gap: 20px;
    }
  `,
  laptop: css`
    .our-vision-container, .our-mission-container, .our-products-container {
      width: 800px;
    }

    .our-vision-header-text, .our-mission-header-text, .our-products-header-text {
      ${constants.fontSize.header.tablet};
    }

    .our-vision-content, .our-mission-content, .our-products-content {
      ${constants.fontSize.paragraph.tablet};
    }

    .steel-quality-container {
      gap: 50px;
    }

    .header-tag {
      ${constants.fontSize.paragraph.laptop};
    }

    .bishnu-quality-certificate-wrapper {
      width: 400px;
    }

    .jsl-certificate-container {
      width: 400px;
    }

    .jsl-wrapper {
      gap: 50px;
    }
  `,
};

export default aboutUsResponsive;