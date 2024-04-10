import { css } from "styled-components";
import constants from "../../utils/constants";

const footerResponsive = {
  mobile: css`
    .brand-logo {
      width: 200px;
    }

    .credits-container {
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .copyright, .credit {
      text-align: center;
      ${constants.fontSize.paragraph.mobile};
    }

    .header-text {
      ${constants.fontSize.paragraph.mobile};
    }

    .content-text {
      ${constants.fontSize.paragraph.mobile};
    }

    .link {
      ${constants.fontSize.paragraph.mobile};
    }
  `,
  tablet: css`
    .links {
      flex-wrap: wrap;
    }

    .header-text {
      ${constants.fontSize.paragraph.tablet};
    }

    .content-text {
      ${constants.fontSize.paragraph.mobile};
    }

    .link {
      ${constants.fontSize.paragraph.mobile};
    }

    .mui-icon {
      width: 30px;
      height: 30px;
    }

    .copyright, .credit {
      ${constants.fontSize.paragraph.mobile};
    }
  `,
  laptop: css`
    .brand-logo {
      width: 220px;
    }

    .footer-wrapper {
      padding: 50px 30px;
    }

    .top-container {
      flex-wrap: wrap;
      gap: 30px;
    }

    .header-text {
      ${constants.fontSize.paragraph.laptop};
    }

    .content-text {
      ${constants.fontSize.paragraph.tablet};
    }

    .link {
      ${constants.fontSize.paragraph.tablet};
    }

    .mui-icon {
      width: 32px;
      height: 32px;
    }

    .copyright, .credit {
      ${constants.fontSize.paragraph.tablet};
    }
  `,
};

export default footerResponsive;