import { css } from "styled-components";
import constants from "../../utils/constants";

const navbarResponsive = {
  mobile: css`
    .middle-container {
      display: none;
    }

    .hamberger-menu {
      display: block;
    }

    .jsl-logo {
      width: 90px;
    }

    .right-container {
      justify-content: flex-end;
      flex: 1;
      margin-right: 20px;
    }

    .jsl-tag {
      display: none;
    }

    .brand-header-logo {
      height: 30px;
    }
  `,
  tablet: css`
    padding: 0 20px;

    .navbar-list {
      gap: 20px;
    }

    .right-container .request-quote-button {
      display: none;
    }
  `,
  laptop: css`
    padding: 0 10px;

    .brand-header-logo {
      height: 35px;
    }

    .navbar-list {
      gap: 25px;
    }

    .navbar-item {
      ${constants.fontSize.paragraph.mobile};
    }

    .request-quote-button {
      font-size: 10px;
      width: 150px;
    }
  `,
};

export default navbarResponsive;