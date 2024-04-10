import { css } from "styled-components";
import constants from "../../utils/constants";

const messageBoxResponsive = {
  mobile: css`
    .message-box-wrapper {
      flex-direction: column;
      width: 300px;
      height: 550px;
      padding: 10px;
    }
  `,
  tablet: css`
    .message-box-wrapper {
      width: 550px;
      height: 450px;
      gap: 25px;
      padding: 30px;
    }

    .header-text {
      ${constants.fontSize.header.tablet};
    }

    .header-tag {
      ${constants.fontSize.paragraph.tablet};
    }

    .message-container {
      gap: 15px;
    }

    .input {
      width: 250px;
      height: 40px;
    }

    .input-message {
      height: 150px;
    }

  `,
  laptop: css`
    .message-box-wrapper {
      width: 600px;
      height: 500px;
      gap: 25px;
      padding: 40px;
    }

    .header-text {
      ${constants.fontSize.header.laptop};
    }

    .header-tag {
      ${constants.fontSize.paragraph.laptop};
    }

    .message-container {
      gap: 15px;
    }

    .input {
      width: 250px;
      height: 40px;
    }
    
    .input-message {
      height: 150px;
    }
  `,
};

export default messageBoxResponsive;