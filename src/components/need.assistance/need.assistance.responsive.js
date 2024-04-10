import { css } from "styled-components";
import constants from "../../utils/constants";

const needAssistanceResponsive = {
  mobile: css`
    background-position: top;

    .content-container {
      width: 300px;
      min-width: 300px;
      padding: 30px 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 50px;
    }

    .header-text {
      ${constants.fontSize.header.mobile};
    }

    .header-tag {
      ${constants.fontSize.paragraph.mobile};
    }

    .header-content {
      ${constants.fontSize.paragraph.mobile};
    }

    .material-type, .material-quantity, .generate-quotation-button {
      ${constants.fontSize.paragraph.mobile};
      width: 270px;
      min-width: 270px;
    }
  `,
  tablet: css`
    background-position: top;

    .content-container {
      width: 500px;
      min-width: 400px;
      padding: 80px 0;
      gap:30px;
    }

    .header-text {
      ${constants.fontSize.header.tablet};
    }

    .header-tag {
      ${constants.fontSize.paragraph.tablet};
    }

    .header-content {
      ${constants.fontSize.paragraph.tablet};
    }

    .material-type, .material-quantity, .generate-quotation-button {
      ${constants.fontSize.paragraph.mobile};
    }
  `,
  laptop: css`
    background-position: top;

    .content-container {
      width: 700px;
      min-width: 700px;
      padding: 100px 0;
      gap:40px;
    }

    .header-text {
      ${constants.fontSize.header.laptop};
    }

    .header-tag {
      ${constants.fontSize.paragraph.laptop};
    }

    .header-content {
      ${constants.fontSize.paragraph.laptop};
    }

    .material-type, .material-quantity, .generate-quotation-button {
      width: 230px;
      min-width: 230px;
      height: 40px;
      min-height: 40px;
      padding: 0 8px;
      ${constants.fontSize.paragraph.tablet};
    }
  `,
};

export default needAssistanceResponsive;