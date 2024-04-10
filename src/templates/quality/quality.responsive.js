import { css } from "styled-components";
import constants from "../../utils/constants";

const QualityResponsive = {
  mobile: css`
    .grades-section-wrapper {
      width: 95%;
      min-width: 95%;
    }

    .drop-down-container {
      padding: 15px;
    }

    .content, .content-link {
      ${constants.fontSize.paragraph.mobile};
    }

    .header-text {
      ${constants.fontSize.header.mobile};
    }

    .sub-header-text {
      ${constants.fontSize.paragraph.mobile};
    }

    .paragraph-text strong {
      ${constants.fontSize.paragraph.mobile};
    }

    .paragraph-text {
      ${constants.fontSize.paragraph.mobile};
    }

    .header-tag {
      ${constants.fontSize.paragraph.mobile};
    }

    .data-wrapper {
      padding: 10px;
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

    .bishnu-quality-certificate-wrapper {
      width: 300px;
    }

    .steel-quality-container {
      gap: 20px;
      align-items: center;
      flex-direction: column;
    }

    .bishnu-quality-wrapper {
      padding: 10px;
    }
  `,
  tablet: css`
    .grades-section-wrapper {
      width: 700px;
      min-width: 700px;
    }

    .drop-down-container {
      padding: 15px;
    }

    .content, .content-link {
      ${constants.fontSize.paragraph.tablet};
    }

    .header-text {
      ${constants.fontSize.header.tablet};
    }

    .sub-header-text {
      ${constants.fontSize.paragraph.tablet};
    }

    .paragraph-text strong {
      ${constants.fontSize.paragraph.tablet};
    }

    .paragraph-text {
      ${constants.fontSize.paragraph.tablet};
    }

    .header-tag {
      ${constants.fontSize.paragraph.tablet};
    }

    .data-wrapper {
      padding: 30px;
    }

    .jsl-certificate-container {
      width: 350px;
    }

    .jsl-wrapper {
      gap: 20px;
    }

    .bishnu-quality-certificate-wrapper {
      width: 350px;
    }

    .steel-quality-container {
      gap: 20px;
    }
  `,
  laptop: css`
    .grades-section-wrapper {
      width: 900px;
      min-width: 900px;
    }

    .drop-down-container {
      padding: 25px;
    }

    .content, .content-link {
      ${constants.fontSize.paragraph.laptop};
    }

    .header-text {
      ${constants.fontSize.header.laptop};
    }

    .sub-header-text {
      ${constants.fontSize.paragraph.laptop};
    }

    .paragraph-text strong {
      ${constants.fontSize.paragraph.laptop};
    }

    .paragraph-text {
      ${constants.fontSize.paragraph.laptop};
    }

    .header-tag {
      ${constants.fontSize.paragraph.laptop};
    }

    .data-wrapper {
      padding: 50px;
    }

    .jsl-certificate-container {
      width: 400px;
    }

    .jsl-wrapper {
      gap: 50px;
    }

    .bishnu-quality-certificate-wrapper {
      width: 400px;
    }

    .steel-quality-container {
      gap: 50px;
    }
  `,
};

export default QualityResponsive;