import { css } from "styled-components";
import constants from "../../utils/constants";

const productCardResponsive = {
  mobile: css`
    width: 230px;
    height: 230px;

    &::after {
      ${constants.fontSize.paragraph.mobile};
    }
  `,
  tablet: css`
    width: 180px;
    height: 180px;

    &::after {
      ${constants.fontSize.paragraph.mobile};
    }
  `,
  laptop: css`
    width: 220px;
    height: 220px;

    &::after {
      ${constants.fontSize.paragraph.laptop};
    }
  `,
};

export default productCardResponsive;