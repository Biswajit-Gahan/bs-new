// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { GalleryContainer } from "./gallery.styles";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import constants from "../../utils/constants";
import bsLogo from "../../assets/images/bs-footer-icon-2.png";
import uid from "../../utils/uid";

const Gallery = ({ title, images }) => {
  const galleryWrapperRef = useRef();

  const clicks = useRef(0);

  const categoryLength = Math.floor(images.length / 2);

  const handleNextButton = () => {
    const windowSize = window.innerWidth;
    const galleryWidth =
      (galleryWrapperRef.current.scrollWidth -
        galleryWrapperRef.current.getBoundingClientRect().width) /
      categoryLength;

    if (
      windowSize > parseInt(constants.device.mobile) &&
      clicks.current < categoryLength
    ) {
      galleryWrapperRef.current.style.transform = `translateX(-${
        galleryWidth * ++clicks.current
      }px)`;
    } else if (
      windowSize <= parseInt(constants.device.mobile) &&
      clicks.current < images.length - 1
    ) {
      const imageWidth = galleryWrapperRef.current.scrollWidth / images.length;
      galleryWrapperRef.current.style.transform = `translateX(-${
        imageWidth * ++clicks.current
      }px)`;
    } else {
      return;
    }
  };

  const handlePrevButton = () => {
    const windowSize = window.innerWidth;
    if (windowSize > parseInt(constants.device.mobile) && clicks.current > 0) {
      const galleryWidth =
        (galleryWrapperRef.current.scrollWidth -
          galleryWrapperRef.current.getBoundingClientRect().width) /
        categoryLength;
      galleryWrapperRef.current.style.transform = `translateX(-${
        galleryWidth * --clicks.current
      }px)`;
    } else if (
      windowSize <= parseInt(constants.device.mobile) &&
      clicks.current > 0
    ) {
      const imageWidth = galleryWrapperRef.current.scrollWidth / images.length;
      galleryWrapperRef.current.style.transform = `translateX(-${
        imageWidth * --clicks.current
      }px)`;
    } else {
      return;
    }
  };

  return (
    <GalleryContainer>
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-content-container">
        <div className="gallery-wrapper" ref={galleryWrapperRef}>
          {images.map((item, index) => (
            <div className="image-wrapper" key={uid()}>
              <img src={item} alt={title} className="gallery-image" />
              <img src={bsLogo} alt="brand logo" className="water-mark" />
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <button
          type="button"
          className="left-button"
          onClick={handlePrevButton}>
          <KeyboardArrowLeftRoundedIcon className="button-icon" />
        </button>
        <button
          type="button"
          className="right-button"
          onClick={handleNextButton}>
          <KeyboardArrowRightRoundedIcon className="button-icon" />
        </button>
      </div>
    </GalleryContainer>
  );
};

export default Gallery;
