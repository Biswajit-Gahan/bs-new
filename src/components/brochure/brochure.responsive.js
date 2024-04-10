import { css } from "styled-components";
import constants from "../../utils/constants";

const brochureResponsive = {
  mobile: css`
    width: 100%;
    min-width: 100%;
    
    .brochure-header-container {
      flex-direction: column;
    }

    .brochure-header-text {
      ${constants.fontSize.header.mobile};
    }
    
    .brochure-content {
      ${constants.fontSize.paragraph.mobile};
      /* text-align: center; */
    }

    .brochure-button-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .brochure-button {
      ${constants.fontSize.paragraph.tablet};
    }
  `,
  tablet: css`
    width: 600px;
    min-width: 600px;

    .brochure-header-text {
      ${constants.fontSize.header.tablet};
    }
    
    .brochure-content {
      ${constants.fontSize.paragraph.tablet};
    }

    .brochure-button {
      ${constants.fontSize.paragraph.tablet};
    }
  `,
  laptop: css`
    width: 800px;
    min-width: 800px;

    .brochure-header-text {
      ${constants.fontSize.header.laptop};
    }

    .brochure-content {
      ${constants.fontSize.paragraph.laptop};
    }

    .brochure-button {
      width: 220px;
    }
  `,
};

export default brochureResponsive;