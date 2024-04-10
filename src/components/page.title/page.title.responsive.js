import { css } from "styled-components";
import constants from "../../utils/constants";

const pageTitleResponsive = {
  mobile: css`
    .page-name {
      ${constants.fontSize.header.mobile};
    }

    .page-name-section {
      height: 80px;
      min-height: 80px;
    }
  `,
  tablet: css`
    .page-name {
      ${constants.fontSize.header.tablet};
    }

    .page-name-section {
      height: 100px;
      min-height: 100px;
    }
  `,
  laptop: css`
    .page-name {
      ${constants.fontSize.header.laptop};
    }

    .page-name-section {
      height: 150px;
      min-height: 150px;
    }
  `,
};

export default pageTitleResponsive;