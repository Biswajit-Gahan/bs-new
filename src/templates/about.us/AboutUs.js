import React, { useEffect, useRef } from "react";
import { AboutUsContainer } from "./about.us.styles";
import PageTitle from "../../components/page.title/PageTitle";
import AboutCompanyTag from "../../components/about.company.tag/AboutCompanyTag";
// import ProductCard from "../../template-components/product.card/ProductCard";
// import roundSteel from "../../assets/images/round-steel-n1.jpg";
// import squareSteel from "../../assets/images/square-steel-n1.jpg";
// import rectangleSteel from "../../assets/images/rectangular-steel-n1.jpg";
import MessageBox from "../../components/message.box/MessageBox";
import observer from "../../utils/observer";
import localdb from "../../utils/localdb";
import jslImage from "../../assets/images/jsl-image.jpg";

const AboutUs = () => {
  const certContainer = useRef();

  const certificatesLength = localdb.certificates.length - 1;

  const count = useRef(1);

  useEffect(() => {
    const resizeCertificates = () => {
      const { width } = certContainer.current.getBoundingClientRect();
      certContainer.current.style.transform = `translateX(-${
        width * count.current
      }px)`;
    };

    window.addEventListener("resize", resizeCertificates);

    return () => {
      window.removeEventListener("resize", resizeCertificates);
    };
  }, []);

  const handleNextButton = () => {
    const { width } = certContainer.current.getBoundingClientRect();
    if (count.current < certificatesLength) {
      count.current++;
      certContainer.current.style.transform = `translateX(-${
        width * count.current
      }px)`;
    } else {
      return;
    }
  };

  const handlePrevButton = () => {
    const { width } = certContainer.current.getBoundingClientRect();
    if (count.current > 0) {
      count.current--;
      certContainer.current.style.transform = `translateX(-${
        width * count.current
      }px)`;
    } else {
      return;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  return (
    <AboutUsContainer>
      {/* PAGE NAME SECTION */}
      <section className="page-name-section">
        <PageTitle pageName="About Us" />
      </section>

      {/* OUR VISION SECTION */}
      <section className="our-vision-section">
        <div className="our-vision-container">
          <h4 className="our-vision-header-text anime" data-move="move-up">
            Our Vision
          </h4>
          <p
            className="our-vision-content anime"
            data-move="move-right"
            data-delay={0.2}>
            Our vision is to establish ourselves as a leading manufacturer of
            stainless steel tubes, renowned for our unmatched robustness,
            durability, and uncompromising quality across India.
          </p>
        </div>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="our-mission-section">
        <div className="our-mission-container">
          <h4 className="our-mission-header-text anime" data-move="move-up">
            Our Mission
          </h4>
          <p
            className="our-mission-content anime"
            data-move="move-right"
            data-delay={0.2}>
            We aim to expand our domestic footprint across India, catering to a
            diverse range of markets and customers with cutting edge innovation
            design and finishes within next 5 years.
            <br />
            <br />
            Our mission is to solidify our position as a trusted partner and
            preferred supplier in the stainless steel tube industry with an aim
            to reachout 50 Lakh Household in next 5 Years.
          </p>
        </div>
      </section>

      {/* OUR PRODUCTS SECTION */}
      {/* <section className="our-products-section">
        <div className="our-products-container">
          <h4 className="our-products-header-text anime" data-move="move-up">Our Products</h4>
          <p className="our-products-content anime" data-move="move-right" data-delay={0.2}>
            Stainless steel welded tubes are available in various shapes and sizes, including rectangular, square, and circle pipes. These tubes are categorized based on their outer diameter, thickness, steel grade, specification, length, and application in home decor and furniture. Some common material grades used in these tubes include 304/304L, 316/316L, 316TI, and 202.
          </p>
          <div className="products-container">
            <ProductCard productImg={roundSteel} productName={"Round Stainless Tubes"} productType="round" />
            <ProductCard productImg={squareSteel} productName={"Square Stainless Tubes"} productType="square" />
            <ProductCard productImg={rectangleSteel} productName={"Rectangle Stainless Tube"} productType="rectangle" />
          </div>
        </div>
      </section> */}

      {/* STEEL QUALITY */}
      <section className="steel-quality-section">
        {/* STEEL QUALITY CONTAINER */}
        <div className="steel-quality-container">
          {/* BISHNU QUALITY WRAPPER */}
          <div className="bishnu-quality-wrapper">
            <h1 className="header-text anime" data-move="move-up">
              Product Quality
            </h1>
            <p
              className="header-tag anime"
              data-move="move-left"
              data-delay={0.1}>
              Bishnu Steel strives for total customer satisfaction by
              consistently supplying quality stainless steel pipes and tubes
              conforming to mutually agreed product specifications & delivery
              schedule.
            </p>
            <p
              className="header-tag anime"
              data-move="move-left"
              data-delay={0.2}>
              We are committed to involve all employees for the continuous
              improvement of our product in quality & customer satisfaction &
              achieve leadership in the global market.
            </p>
            <p
              className="header-tag anime"
              data-move="move-left"
              data-delay={0.3}>
              <u>We provide services with</u>
            </p>
            <p
              className="header-tag anime"
              data-move="move-left"
              data-delay={0.4}>
              &raquo; Stated Quality
            </p>
            <p
              className="header-tag anime"
              data-move="move-left"
              data-delay={0.5}>
              &raquo; Timely Delivery
            </p>
            <p
              className="header-tag anime"
              data-move="move-left"
              data-delay={0.6}>
              &raquo; Quality Services at all Times
            </p>
          </div>

          {/* BISHNU QUALITY CERTFICATE WRAPPER */}
          <div
            className="bishnu-quality-certificate-wrapper anime"
            data-move="move-right"
            data-delay={0.1}>
            {/* ALL CERTIFICATES CONTAINER */}
            <div ref={certContainer} className="all-certificates-container">
              {localdb.certificates.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt="bishnu steel certificate"
                    className="certificate-image"
                  />
                );
              })}
            </div>

            {/* SCROLL BUTTONS */}
            <button
              type="button"
              className="scroll-button scroll-button-left"
              onClick={handlePrevButton}>
              &lt;
            </button>
            <button
              type="button"
              className="scroll-button scroll-button-right"
              onClick={handleNextButton}>
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* JSL SECTION */}
      <section className="jsl-section">
        {/* JSL WRAPPER */}
        <div className="jsl-wrapper">
          {/* JSL CERTFICATE CONTAINER */}
          <div
            className="jsl-certificate-container anime"
            data-move="move-left">
            <img
              src={jslImage}
              alt="jsl certificate"
              className="jsl-certificate-image"
            />
          </div>

          {/* JSL CONTENT CONTAINER */}
          <div className="jsl-content-container">
            <p
              className="header-tag anime"
              data-move="move-right"
              data-delay={0.1}>
              We have well Equipped in house testing laboratory. We assessed and
              found to be in accordance with the requirements of quality
              standards. We have Certificate that the Quality Management System
              ISO 9001:2015 Certificate.
            </p>
            <h1
              className="header-text anime"
              data-move="move-right"
              data-delay={0.2}>
              MANUFACTURE AND SUPPLIER OF STAINLESS STEEL PIPES, TUBES, AND S.S
              COIL.
            </h1>
            <p
              className="header-tag anime"
              data-move="move-right"
              data-delay={0.3}>
              We have well equipped in-house testing laboratory. We ensure
              output quality by adopting the following procedure batch-wise.
            </p>
            <p
              className="header-tag anime"
              data-move="move-right"
              data-delay={0.4}>
              &raquo; Testing for Raw Material
            </p>
            <p
              className="header-tag anime"
              data-move="move-right"
              data-delay={0.5}>
              &raquo; Process control method
            </p>
            <p
              className="header-tag anime"
              data-move="move-right"
              data-delay={0.6}>
              &raquo; Finished products test
            </p>
            <p
              className="header-tag anime"
              data-move="move-right"
              data-delay={0.7}>
              Our technically advanced Rectangular Pipes are intended to serve
              various industries such as Automobile & Ancillaries, Furniture,
              Railways, Engineering, etc.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="about-us-section">
        <AboutCompanyTag
          aboutCompanyContent={
            "Bishnu Steel is a visionary stainless steel tube manufacturing company located in Khurda,Barunai Industrial unit known for its commitment to excellence and innovation. With a daily production capacity of 10 tons, our state-of-the-art manufacturing unit is equipped with imported machinery, ensuring precision, efficiency, and high-quality output.<br/><br/>We understand the importance of design in the stainless steel tube industry. Our dedicated team work tirelessly to create innovative designs that meet the evolving needs of our customers. We offer a wide range of sizes, catering to various industries such as home decor, furniture, kitchenware, automobile and ancillaries and fabrication.<br/><br/>At Bishnu Steel, we prioritize customer satisfaction and strive to build long-term partnerships. Our dedicated customer support team provides personalized assistance, technical expertise, and on-time delivery to meet the unique requirements of our clients. We believe in the power of collaboration and work closely with our customers to understand their needs and deliver tailored solutions.<br/><br/>With our commitment to design, sustainability, durability, performance, and integration with emerging technologies, Bishnu Steel will be poised to be a leading name in the stainless steel tube industry. We envision a future where our products continue to shape industries, create inspiring spaces, and contribute to a sustainable and prosperous world.<br/><br/>"
          }
        />
      </section>

      {/* NEED HELP SECTION */}
      <section className="need-help-section">
        <MessageBox />
      </section>
    </AboutUsContainer>
  );
};

export default AboutUs;
