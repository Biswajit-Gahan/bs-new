import React, { useEffect, useRef, useState } from "react";
import { Container } from "./about.product.styles";
import constants from "../../utils/constants";

const AboutProduct = ({ headerText, aboutText, productImage }) => {

  const [productImageWidth, setProductImageWidth] = useState(() => (0));

  var productImageWrapperRef = useRef();

  var count = useRef(0);

  var intervalId = useRef(0);

  useEffect(() => {
    setProductImageWidth((prevData) => (prevData = productImageWrapperRef.current.getBoundingClientRect().width));
  }, []);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (count.current < 2) {
        count.current++;
        productImageWrapperRef.current.style.transform = `translateX(${-productImageWidth * count.current}px)`;
      } else {
        count.current = 0;
        productImageWrapperRef.current.style.transform = `translateX(${0}px)`;
      }
    }, 3000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [productImageWidth]);

  useEffect(() => {
    const resizeWindowHandler = () => {
      setProductImageWidth((prevData) => (prevData = productImageWrapperRef.current.getBoundingClientRect().width));
      count.current = 0;
      productImageWrapperRef.current.style.transform = `translateX(${0}px)`;
    };

    window.addEventListener("resize", resizeWindowHandler);

    return () => {
      window.removeEventListener("resize", resizeWindowHandler);
    }
  }, [])

  return (
    <Container>
      <svg className="product-bg" width="1440" height="250" viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 78.5C662.262 250 369.375 2.66667 -1 0V250H1440V78.5Z" fill={constants.colors.bsBlue} fillOpacity="0.07" />
      </svg>
      <div className="product-image-container anime" data-move="move-left">
        {/* <img src={productImage} alt="pipe-img" className="product-image" /> */}
        <div ref={productImageWrapperRef} className="product-images-wrapper">
          {
            Array.isArray(productImage) ?
            productImage.map((item, index) => (
              <img key={index} src={item} alt="steel-img" className="product-image" />
            )) :
              <img src={productImage} alt="steel-img" className="product-image" />
          }
        </div>
      </div>
      <div className="product-details-container">
        <h1 className="product-header-text anime" data-move="move-up">{headerText}</h1>
        <p className="about-product-text anime" data-move="move-right">{aboutText}</p>
      </div>
    </Container>
  );
};

export default AboutProduct;