import { css } from "styled-components";
import constants from "../../utils/constants";

const aboutCompanyResponsive = {
  mobile: css`
    .wrapper {
      padding: 100px 10px;
    }

    .couter-header {
      ${constants.fontSize.paragraph.mobile};
    }

    .counter {
      ${constants.fontSize.header.mobile};
    }

    .about-content {
      ${constants.fontSize.paragraph.mobile};
    }

    .heading {
      ${constants.fontSize.header.mobile};
    }

    .about-tag {
      ${constants.fontSize.paragraph.mobile};
    }

    .bottom-container {
      gap: 50px;
    }
  `,
  tablet: css`
    .wrapper {
      padding: 100px 20px;
    }

    .couter-header {
      ${constants.fontSize.paragraph.tablet};
    }

    .counter {
      ${constants.fontSize.header.tablet};
    }

    .about-content {
      ${constants.fontSize.paragraph.tablet};
    }

    .heading {
      ${constants.fontSize.header.tablet};
    }

    .about-tag {
      ${constants.fontSize.paragraph.tablet};
    }

    .bottom-container {
      gap: 100px;
    }
  `,
  laptop: css`
    .wrapper {
      padding: 100px 30px;
    }

    .couter-header {
      ${constants.fontSize.paragraph.laptop};
    }

    .counter {
      ${constants.fontSize.header.laptop};
    }

    .about-content {
      ${constants.fontSize.paragraph.laptop};
    }

    .heading {
      ${constants.fontSize.header.laptop};
    }

    .about-tag {
      ${constants.fontSize.paragraph.laptop};
    }

    .bottom-container {
      gap: 120px;
    }
  `,
};

export default aboutCompanyResponsive;