import React, { useEffect, useRef, useState } from "react";
import { NewsContainer } from "./news.styles";
import PageTitle from "../../components/page.title/PageTitle";
import observer from "../../utils/observer";
import localdb from "../../utils/localdb";
import Testimonials from "../../components/testimonials/Testimonials";
import QuotationTemplate from "../../components/quotation.template/quotation-template";
// import MessageBox from "../../components/message.box/MessageBox";

const News = () => {
  const [showViewModal, setShowViewModal] = useState(() => false);

  const [newsWrapperProps, setNewsWrapperProps] = useState(() => ({
    width: "",
    scrollWidth: "",
  }));

  const [newsId, setNewsId] = useState(() => "");

  const newsWrapperPadding = 10;

  const count = useRef(1);

  const newsLength = localdb.news.length - 1;

  const newsWrapperRef = useRef();

  const handleViewModal = (id) => {
    setShowViewModal((prevData) => (prevData = !prevData));
    setNewsId((prevData) => (prevData = id));
  };

  const handleCloseModal = () => {
    setShowViewModal((prevData) => (prevData = !prevData));
  };

  const handleNextButton = () => {
    if (count.current < newsLength) {
      count.current++;
      newsWrapperRef.current.style.transform = `translateX(-${
        ((newsWrapperProps.scrollWidth +
          newsWrapperPadding -
          newsWrapperProps.width) /
          newsLength) *
        count.current
      }px)`;
    } else {
      return;
    }
  };

  const handlePrevButton = () => {
    if (count.current > 0) {
      count.current--;
      newsWrapperRef.current.style.transform = `translateX(-${
        ((newsWrapperProps.scrollWidth +
          newsWrapperPadding -
          newsWrapperProps.width) /
          newsLength) *
        count.current
      }px)`;
    }
  };

  useEffect(() => {
    setNewsWrapperProps((prevData) => ({
      ...prevData,
      scrollWidth: newsWrapperRef.current.scrollWidth,
      width: newsWrapperRef.current.getBoundingClientRect().width,
    }));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      newsWrapperRef.current.style.transform = `translateX(0px)`;
      setNewsWrapperProps((prevData) => ({
        ...prevData,
        scrollWidth: newsWrapperRef.current.scrollWidth,
        width: newsWrapperRef.current.getBoundingClientRect().width,
      }));
      count.current = 1;
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <NewsContainer>
      <QuotationTemplate />
      {/* ABOUT TITLE SECTION */}
      <section className="about-title-section">
        <PageTitle pageName={"News & Events"} />
      </section>

      {/* SLIDER SECTION */}
      <section className="slider-section">
        {/* SLIDER CONTAINER */}
        <div className="slider-container">
          {/* SLIDER WRAPPER */}
          <div ref={newsWrapperRef} className="slider-wrapper">
            {/* NEWS CONTAINER */}
            {localdb.news.map((item, index) => (
              <div
                className="news-container"
                key={index}
                onClick={() => handleViewModal(item)}>
                <img src={item} alt="news" className="news-img" />
              </div>
            ))}
          </div>

          {/* SLIDER BUTTONS */}
          <button
            type="button"
            className="slider-button-left slider-button"
            onClick={handlePrevButton}>
            &lt;
          </button>
          <button
            type="button"
            className="slider-button-right slider-button"
            onClick={handleNextButton}>
            &gt;
          </button>
        </div>
      </section>

      {/* VIEW MODAL SECTION */}
      {showViewModal && (
        <section className="view-modal-section">
          {/* VIEW MODAL WRAPPER */}
          <div className="view-modal-wrapper">
            {/* MODAL NEWS IMAGE */}
            <img src={newsId} alt="" className="modal-news-img" />

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="close-button"
              onClick={handleCloseModal}>
              X
            </button>
          </div>
        </section>
      )}

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <Testimonials />
      </section>

      {/* NEED HELP SECTION */}
      {/* <section className="need-help-section">
        <MessageBox />
      </section> */}
    </NewsContainer>

  );
};

export default News;
