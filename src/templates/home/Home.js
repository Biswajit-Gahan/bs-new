import React, { useEffect, useRef } from "react";
import { Container } from "./home.styles";
import factoryVideo from "../../assets/videos/factory-video.mp4";
import AboutProduct from "../../components/about.product/AboutProduct";
import posterImage from "../../assets/images/steel-pipes.jpg"
import ProductCard from "../../components/product.card/ProductCard";
import roundSteel from "../../assets/images/round-steel-n1.jpg";
import squareSteel from "../../assets/images/square-steel-n1.jpg";
import rectangleSteel from "../../assets/images/rectangular-steel-n1.jpg";
import Brochure from "../../components/brochure/Brochure";
import AboutCompanyTag from "../../components/about.company.tag/AboutCompanyTag";
import Testimonials from "../../components/testimonials/Testimonials";
import NeedAssistance from "../../components/need.assistance/NeedAssistance";
// import EventsSlider from "../../template-components/events.slider/EventsSlider";
import MessageBox from "../../components/message.box/MessageBox";
// import steelImage from "../../assets/images/steel-pipes.jpg";
import { useNavigate } from "react-router-dom";
import observer from "../../utils/observer";


const Home = () => {
  // USEREF FOR ALL PRODUCTS
  const allProducts = useRef();

  // USENAVIGATE
  const navigate = useNavigate();

  // USE SEARCH PARAMS
  // const [searchParams, setSearchParams] = useSearchParams();

  // const isScrolled = useRef(false);

  // FUNCTION GOTO PRODUCTS
  const gotoProductsHandler = () => {
    allProducts.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  // useEffect(() => {
  //   if (searchParams.get("view-products") === "true") {
  //     gotoProductsHandler();
  //     // setSearchParams({ "view-products": "false" });
  //   }
  // }, []);


  return (
    <Container>
      {/* VIDEO CONTAINER */}
      <section className="video-container">
        {/* BRAND VIDEO */}
        <video className="brand-video anime" data-move="zoom-in" data-duration="1" src={factoryVideo} autoPlay muted loop poster={posterImage} playsInline={true} />

        {/* HERO CONTAINER */}
        <div className="hero-container">
          {/* HERO TEXTS */}
          <h1 className="hero-text anime" data-move="move-down">The power of steel,<br /><span className="hero-bold anime" data-move="move-down" data-delay={0.2}>The Beauty of Design.</span></h1>
          <p className="hero-tag anime" data-move="move-down" data-delay={0.3}>We understand the importance of design in the stainless steel tube industry. Our dedicated team work tirelessly to create innovative designs that meet the evolving needs of our customers. We offer a wide range of sizes, catering to various industries such as home decor, furniture, kitchenware, automobile and ancillaries and fabrication.</p>

          {/* BUTTONS */}
          <div className="header-bottons-container">
            <button type="button" className="header-our-products-button header-button anime" data-move="move-left" data-delay={0.3} onClick={gotoProductsHandler}>Our Products</button>
            <button type="button" className="header-know-more-button header-button anime" data-move="move-right" data-delay={0.3} onClick={() => {navigate("end-uses")}}>Know More</button>
          </div>
        </div>
      </section>

      {/* ABOUT STEELS */}
      <section className="about-steels-container">
        {/* ABOUT PRODUCT COMPONENT */}
        <AboutProduct
          headerText={"Stainless Steel ERW / NB Pipe"}
          aboutText={"Steel tubing can be made from various raw materials, like iron, carbon, manganese, vanadium, and zirconium. Like pipe, tubing can be produced as either seamless or welded. Seamless tubing is a solid block of steel that is rolled into a round shape and then pierced and stretched into its final length."}
          productImage={[roundSteel, squareSteel, rectangleSteel]}
        />
      </section>

      {/* PRODUCT RANGE */}
      <section className="product-range-container" ref={allProducts}>
        <div className="product-range-container-wrapper">
          {/* PRODUCT RANGE HEADER */}
          <div className="product-range-header">
            <h2 className="product-range-header-text anime" data-move="move-up">Our Products Range</h2>
            <div className="header-divider anime" data-move="move-left" data-delay={ 0.3}></div>
          </div>

          {/* PRODUCT RANGE CARDS CONTAINER */}
          <div className="product-range-cards-container">
            {/* PRODUCT RANGE COMPONENT */}
            <ProductCard productImg={roundSteel} productName={"Round Stainless Tubes"} productType="round" />
            <ProductCard productImg={squareSteel} productName={"Square Stainless Tubes"} productType="square" />
            <ProductCard productImg={rectangleSteel} productName={"Rectangle Stainless Tubes"} productType="rectangle" />
          </div>
        </div>
      </section>

      {/* BROCHURE SECTION */}
      <section className="brochure-container">
        {/* BROCHURE COMPONENT */}
        <Brochure />
      </section>

      {/* ABOUT COMPANY SECTION */}
      <section className="about-company-container">
        <AboutCompanyTag
          aboutCompanyContent="Bishnu Steel is a visionary stainless steel tube manufacturing company located in Khurda, Barunai Industrial unit known for its commitment to excellence and innovation. With a daily production capacity of 10 tons, our state-of-the-art manufacturing unit is equipped with imported machinery, ensuring precision, efficiency, and high-quality output.<br /><br />
        We understand the importance of design in the stainless steel tube industry. Our dedicated team  work tirelessly to create innovative designs that meet the evolving needs of our customers. We offer a wide range of sizes, catering to various industries such as home decor, furniture, kitchenware, automobile and ancillaries and fabrication.<br /><br />"
        />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-container">
        <Testimonials />
      </section>

      {/* NEED ASSISTANCE SECTION*/}
      <section className="need-assistance-container">
        <NeedAssistance />
      </section>

      {/* EVENTS SLIDER SECTION */}
      {/* <section className="events-slider-container">
        <EventsSlider />
      </section> */}

      {/* MESSAGE BOX SECTION */}
      <section className="message-box-section">
        <MessageBox />
      </section>

    </Container>
  );
};

export default Home;