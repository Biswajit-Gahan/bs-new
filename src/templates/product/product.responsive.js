import { css } from "styled-components";
import constants from "../../utils/constants";

const productResponsive = {
  mobile: css`
    /* product-name-section */

    .brochure-section {
      min-height: fit-content;
      height: fit-content;
      padding: 0 50px;
    }

    .product-name-section {
      height: 80px;
      min-height: 80px;
    }

    .product-name {
      ${constants.fontSize.header.mobile};
    }

    /* product-sizes-info-section */

    .product-sizes-header-text {
      ${constants.fontSize.header.mobile};
    }

    .product-sizes-header-tag {
      ${constants.fontSize.paragraph.mobile};
    }

    .table {
      width: 280px;
      height: 300px;
    }

    .table-header .header-data {
      ${constants.fontSize.paragraph.mobile};
    }

    .table-header-data {
      ${constants.fontSize.paragraph.mobile};
    }

    /* product-dimentions-section */

    .product-dimentions-wrapper {
      width: 100%;
      min-width: 100%;
    }


    .dimentions-top-section, .dimentions-bottom-section {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .product-dimentions-header-title {
      ${constants.fontSize.header.tablet};
    }

    .product-dimentions-details-container {
      gap: 20px;
    }

    .outer-diameter-container, .thickness-container, .length-container, .material-grade-container, .usage-container {
      width: 300px;
      min-width: 300px;
    }

    .product-dimentions-icon-container {
      width: 45px;
      height: 45px;
      min-width: 45px;
      min-height: 45px;
    }

    .product-dimentions-icon {
      font-size: 23px;
    }

    .product-dimentions-bottom-wrapper {
      width: 95%;
      min-width: 95%;
      padding: 25px;
      border-radius: 10px;
    }
  `,
  tablet: css`
    /* product-name-section */

    .product-name-section {
      height: 100px;
      min-height: 100px;
    }

    .product-name {
      ${constants.fontSize.header.tablet};
    }

    /* product-sizes-info-section */

    .product-sizes-info-wrapper {
      width: 100%;
      height: 500px;
      min-width: 100%;
      min-height: 500px;
      gap: 30px;
      flex-direction: column;
      border-radius: 0;
    }

    .product-sizes-header-text {
      ${constants.fontSize.header.tablet};
      text-align: center;
    }

    .product-sizes-header-tag {
      ${constants.fontSize.paragraph.tablet};
      text-align: center;
    }

    .table {
      width: 300px;
      height: 300px;
    }

    .table-header .header-data {
      ${constants.fontSize.paragraph.mobile};
    }

    .table-header-data {
      ${constants.fontSize.paragraph.mobile};
    }

    /* product-dimentions-section */

    .product-dimentions-wrapper {
      width: 100%;
      min-width: 100%;
    }


    .dimentions-top-section, .dimentions-bottom-section {
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
    }

    .product-dimentions-header-title {
      ${constants.fontSize.header.tablet};
    }

    .outer-diameter-container, .thickness-container, .material-grade-container, .usage-container {
      width: 220px;
      min-width: 220px;
    }

    .product-dimentions-icon-container {
      width: 45px;
      height: 45px;
      min-width: 45px;
      min-height: 45px;
    }

    .product-dimentions-icon {
      font-size: 23px;
    }

    .product-dimentions-bottom-wrapper {
      width: 95%;
      min-width: 95%;
      padding: 25px;
      border-radius: 10px;
    }
  `,
  laptop: css`
    /* product-name-section */

    .product-name-section {
      height: 150px;
      min-height: 150px;
    }

    .product-name {
      ${constants.fontSize.header.laptop};
    }

    /* product-sizes-info-section */

    .product-sizes-info-wrapper {
      width: 700px;
      height: 450px;
      min-width: 700px;
      min-height: 450px;
      gap: 30px;
    }

    .product-sizes-header-text {
      ${constants.fontSize.header.laptop};
    }

    .product-sizes-header-tag {
      ${constants.fontSize.paragraph.laptop};
    }

    .table {
      width: 320px;
      height: 300px;
    }

    .table-header .header-data {
      ${constants.fontSize.paragraph.tablet};
    }

    .table-header-data {
      ${constants.fontSize.paragraph.tablet};
    }

    /* product-dimentions-section */

    .product-dimentions-wrapper {
      width: 750px;
      min-width: 750px;
    }

    .product-dimentions-header-title {
      ${constants.fontSize.header.laptop};
    }

    .outer-diameter-container, .thickness-container, .material-grade-container, .usage-container {
      width: 280px;
      min-width: 280px;
    }

    .product-dimentions-icon-container {
      width: 50px;
      height: 50px;
      min-width: 50px;
      min-height: 50px;
    }

    .product-dimentions-icon {
      font-size: 25px;
    }

    .product-dimentions-bottom-wrapper {
      width: 750px;
      min-width: 750px;
      padding: 25px;
      border-radius: 10px;
    }
  `,
};

export default productResponsive;