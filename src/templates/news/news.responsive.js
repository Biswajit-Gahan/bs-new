import { css } from "styled-components";
// import constants from "../../utils/constants";

const newsResponsive = {
  mobile: css`
    .slider-container {
      margin: 0 20px;
    }

    .news-container {
      width: 250px;
      height: 250px;
      min-height: 250px;
      min-width: 250px;
    }

    .slider-button {
      width: 40px;
      height: 40px;
      min-height: 40px;
      min-width: 40px;
    }

    .slider-button-left {
      left: 50px;
    }

    .slider-button-right {
      right: 50px;
    }
  `,
  tablet: css`
    .slider-container {
      margin: 0 30px;
    }

    .news-container {
      width: 300px;
      height: 300px;
      min-height: 300px;
      min-width: 300px;
    }

    .slider-button-left {
      left: 70px;
    }

    .slider-button-right {
      right: 70px;
    }
  `,
  laptop: css`
    .slider-container {
      margin: 0 40px;
    }

    .news-container {
      width: 400px;
      height: 400px;
      min-height: 400px;
      min-width: 400px;
    }
  `,
};

export default newsResponsive;
