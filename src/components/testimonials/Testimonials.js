// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { TestimonialsContainer } from "./testimonials.styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import localdb from "../../utils/localdb";
import uid from "../../utils/uid";

const Testimonials = () => {
  const wrapperElement = useRef();

  const clickCount = useRef(0);

  useEffect(() => {
    const handleWindowResize = () => {
      const elementWidth = wrapperElement.current.getBoundingClientRect().width;
      wrapperElement.current.style.transform = `translateX(-${
        (elementWidth + 30) * clickCount.current
      }px)`;
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleNextButton = () => {
    const elementWidth = wrapperElement.current.getBoundingClientRect().width;

    if (clickCount.current < localdb.testimonials.length - 1) {
      wrapperElement.current.style.transform = `translateX(-${
        (elementWidth + 30) * ++clickCount.current
      }px)`;
    } else {
      clickCount.current = 0;
      wrapperElement.current.style.transform = `translateX(0)`;
    }
  };

  const handlePrevButton = () => {
    const elementWidth = wrapperElement.current.getBoundingClientRect().width;

    if (clickCount.current > 0) {
      wrapperElement.current.style.transform = `translateX(-${
        (elementWidth + 30) * --clickCount.current
      }px)`;
    } else {
      clickCount.current = localdb.testimonials.length - 1;
      wrapperElement.current.style.transform = `translateX(-${
        (elementWidth + 30) * clickCount.current
      }px)`;
    }
  };

  return (
    <TestimonialsContainer>
      {/* HEADER CONTAINER */}
      <div className="header-container anime" data-move="move-up">
        <h2 className="header-text">Testimonials</h2>
      </div>

      {/* FEEDBACK CONTAINER */}
      <div
        className="feedback-container anime"
        data-move="zoom-out"
        data-delay={0.2}>
        {/* FEEDBACK TOP CONTAINER */}
        <div className="feedback-top-container">
          {/* FEEDBACK WRAPPER */}
          <div ref={wrapperElement} className="feedback-wrapper-container">
            {localdb.testimonials.map((item, index) => (
              <div className="feedback-wrapper" key={uid()}>
                {/* USER INFO CONTAINER */}
                <div className="user-info-container">
                  {/* USER AVATAR */}
                  <img
                    src={item.userImage}
                    alt="user-avatar"
                    className="user-avatar"
                  />

                  {/* USER NAME CONTAINER */}
                  <div className="user-name-container">
                    <h4 className="user-name">{item.userName}</h4>
                    <p className="user-tag">{item.userDesg}</p>
                  </div>
                </div>
                {/* USER FEEDBACK CONTAINER */}
                <div className="user-feedback-container">
                  <p className="user-feedback">{item.userFeedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEEDBACK BOTTOM CONTAINER */}
        <div className="feedback-bottom-container">
          <button className="left-button" onClick={handlePrevButton}>
            <ArrowBackIcon />
          </button>
          <button className="right-button" onClick={handleNextButton}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
