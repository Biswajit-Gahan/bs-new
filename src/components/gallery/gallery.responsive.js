import { css } from "styled-components";
import constants from "../../utils/constants";

const galleryResponsive = {
  mobile: css`
    .gallery-title {
      ${constants.fontSize.header.mobile};
    }

    .gallery-wrapper {
      gap: 0;
    }

    .gallery-content-container {
      width: 300px;
      min-width: 300px;
      padding: 0;
    }

    .gallery-image {
      width: 300px;
      height: 300px;
      min-width: 300px;
      min-height: 300px;

      &:hover {
        padding: 0;
        transform: scale(1);
        cursor: none;
      }
    }
  `,
  tablet: css`
    .gallery-title {
      ${constants.fontSize.header.tablet};
    }

    .gallery-content-container {
      width: 550px;
      min-width: 550px;
    }

    .gallery-image {
      width: 180px;
      height: 180px;
      min-width: 180px;
      min-height: 180px;
    }
  `,
  laptop: css`
    .gallery-title {
      ${constants.fontSize.header.laptop};
    }

    .gallery-content-container {
      width: 750px;
      min-width: 750px;
    }

    .gallery-image {
      width: 200px;
      height: 200px;
      min-width: 200px;
      min-height: 200px;
    }
  `,
};

export default galleryResponsive;