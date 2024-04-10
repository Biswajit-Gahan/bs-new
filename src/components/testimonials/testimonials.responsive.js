import { css } from "styled-components";
import constants from "../../utils/constants";

const TestimonialsResponsive = {
  mobile: css`
    gap: 15px;
    min-width: 325px;
    width: 325px;

    .user-info-container {
      flex-direction: column;
    }

    .user-name-container {
      align-items: center;
    }

    .header-text  {
      ${constants.fontSize.header.mobile};
    }

    .feedback-container {
      gap: 15px;
      padding: 20px;
    }

    .user-feedback {
      ${constants.fontSize.paragraph.mobile};
    }
  `,
  tablet: css`
    gap: 20px;
    min-width: 500px;
    width: 500px;

    .header-text  {
      ${constants.fontSize.header.tablet};
    }

    .feedback-container {
      gap: 20px;
      padding: 30px;
    }

    .user-feedback {
      ${constants.fontSize.paragraph.tablet};
    }
  `,
  laptop: css`
    gap: 35px;
    min-width: 700px;
    width: 700px;

    .header-text  {
      ${constants.fontSize.header.laptop};
    }

    .feedback-container {
      gap: 35px;
      padding: 40px;
    }

    .user-feedback {
      ${constants.fontSize.paragraph.laptop};
    }
  `,
};

export default TestimonialsResponsive;