import { css } from "styled-components";
import constants from "../../utils/constants";

const contactUsResponsive = {
  mobile: css`
    .address-wrapper {
      gap: 50px;
      width: 100%;
      padding: 20px;
    }

    .top-address-wrapper { 
      flex-wrap: wrap;
      gap: 30px;
    }

    .address-header-title, .locate-us-heading {
      ${constants.fontSize.header.mobile};
    }

    .type-header-title {
      ${constants.fontSize.paragraph.mobile};
    }

    .type-content {
      ${constants.fontSize.paragraph.mobile};
    }

    .mui-icon {
      font-size: 20px;
    }
  `,
  tablet: css`
    .address-wrapper {
      gap: 50px;
      width: 600px;
    }

    .address-header-title, .locate-us-heading {
      ${constants.fontSize.header.tablet};
    }

    .type-header-title {
      ${constants.fontSize.paragraph.tablet};
    }

    .type-content {
      ${constants.fontSize.paragraph.tablet};
    }

    .mui-icon {
      font-size: 23px;
    }
  `,
  laptop: css`
    .address-wrapper {
      gap: 50px;
      width: 800px;
    }

    .address-header-title, .locate-us-heading {
      ${constants.fontSize.header.laptop};
    }

    .type-header-title {
      ${constants.fontSize.paragraph.laptop};
    }
  `,
};

export default contactUsResponsive;