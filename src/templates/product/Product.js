import React, { useEffect, useState } from "react";
import { ProductContainer } from "./product.styles";
import AboutProduct from "../../components/about.product/AboutProduct";
import BorderOuterIcon from "@mui/icons-material/BorderOuter";
import StraightenIcon from "@mui/icons-material/Straighten";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import GenerateQuotation from "../../components/generate.quotation/GenerateQuotation";
import Brochure from "../../components/brochure/Brochure";
import MessageBox from "../../components/message.box/MessageBox";
import localdb from "../../utils/localdb";
import { useNavigate, useParams } from "react-router-dom";
import QuotationModal from "../../components/modals/quotation.modal/QuotationModal";
import observer from "../../utils/observer";
import uid from "../../utils/uid";

const Product = () => {
  // USESTATE FOR SHOW QUOTATION MODAL
  const [showQuotationModal, setShowQuotationModal] = useState(() => false);

  // FUNCTION FOR HADLER SHOW QUOTATION MODAL
  const showQuotationModalHandler = () => {
    setShowQuotationModal((prevData) => !prevData);
  };

  // USED FOR PRODUCT TYPE PARAMETER
  const { productType } = useParams();

  // USED FOR NAVIGATION
  const navigate = useNavigate();

  // USESTATE FOR PRODUCTTYPE
  const [steelProductType, setSteelProductType] = useState(() => "");

  useEffect(() => {
    window.scrollTo(0, 0);
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  // USEEFFECT FRO PRODUCT TYPE
  useEffect(() => {
    const checkProductType = () => {
      return ["round", "square", "rectangle"].some(
        (item) => item === productType
      );
    };
    if (checkProductType()) {
      setSteelProductType((prevData) => (prevData = productType));
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productType]);

  // USESTATE FOR PRODUCT GRADE
  const [productGrade, setProductGrade] = useState(() => ({
    gradeNum: "",
    gradeDesc: "",
  }));

  // USESTATE FOR PRODUCT DESCRIPTION CONTAINER
  const [showGradeDescriptionContainer, setShowGradeDescriptionContainer] =
    useState(() => false);

  // FUNCTION FOR PRODUCT GRADE CLICK
  const productGradeClickHandler = (event) => {
    const { innerText } = event.target;

    const foundIndex = localdb.aboutGrade.findIndex(
      (item) => item.gradeNum === innerText
    );

    setProductGrade(() => ({
      gradeNum: localdb.aboutGrade[foundIndex].gradeNum,
      gradeDesc: localdb.aboutGrade[foundIndex].gradeDesc,
    }));

    !showGradeDescriptionContainer &&
      setShowGradeDescriptionContainer((prevData) => (prevData = true));
  };

  // FUNCTION FROM CLOSE GRADE CONTAINER
  const closeGradeContainer = () => {
    showGradeDescriptionContainer &&
      setShowGradeDescriptionContainer((prevData) => (prevData = false));
  };

  return (
    <ProductContainer>
      {/* QUOTATION MODAL */}
      {showQuotationModal && (
        <QuotationModal
          productType={productType}
          clickEvent={showQuotationModalHandler}
        />
      )}
      {/* PRODUCT NAME SECTION */}
      <section className="product-name-section">
        <h2 className="product-name anime" data-move="move-up">
          {localdb.aboutSteel[steelProductType]?.name}
        </h2>
      </section>

      {/* ABOUT PRODUCT SECTION */}
      <section className="about-product-section">
        <AboutProduct
          headerText={`About ${localdb.aboutSteel[steelProductType]?.name}`}
          aboutText={localdb.aboutSteel[steelProductType]?.desc}
          productImage={localdb.aboutSteel[steelProductType]?.productImg}
        />
      </section>

      {/* PRODUCT SIZES INFO SECTION */}
      <section className="product-sizes-info-section">
        {/* PRODUCT SIZES INFO WRAPPER */}
        <div className="product-sizes-info-wrapper">
          {/* SIZE INFO HEADER CONTAINER */}
          <div className="sizes-info-header-container">
            <h2 className="product-sizes-header-text anime" data-move="move-up">
              Different Sizes
            </h2>
            <p className="product-sizes-header-tag anime" data-move="move-left">
              Find the right size,
              <br /> that fullfill your requirements.
            </p>
          </div>

          {/* SIZES TABLE CONTAINER */}
          <div
            className="sizes-table-container anime"
            data-move="zoom-in"
            data-delay={0.2}>
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <td className="table-header-data header-data">SL. NO.</td>
                  <td className="table-header-data header-data">SIZES (MM)</td>
                </tr>
              </thead>
              <tbody className="table-body">
                {localdb.aboutSteel[steelProductType]?.size.map(
                  (item, index) => (
                    <tr key={uid()} className="table-row">
                      <td className="table-header-data">{index + 1}</td>
                      <td className="table-header-data">{item}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRODUCT DIMENTIONS SECTION */}
      <section className="product-dimentions-section">
        {/* PRODUCT DIMENTIONS WRAPPER */}
        <div className="product-dimentions-wrapper">
          {/* PRODUCT DIMENTIONS TOP WRAPPER */}
          <div className="product-dimentions-top-wrapper">
            {/* PRODUCT DIMENTIONS HEADER TITLE */}
            <h2
              className="product-dimentions-header-title anime"
              data-move="move-up">
              Product Dimentions
            </h2>

            {/* PRODUCT DIMENTIONS DETAILS CONTAINER */}
            <div className="product-dimentions-details-container">
              {/* DIMENTIONS TOP SECTION */}
              <div className="dimentions-top-section">
                {/* OUTER DIAMETER CONTAINER */}
                <div className="outer-diameter-container">
                  {/* PRODUCT DIMENTIONS ICON CONTAINER */}
                  <div
                    className="product-dimentions-icon-container anime"
                    data-move="move-left"
                    data-delay={0.2}>
                    <BorderOuterIcon className="product-dimentions-icon" />
                  </div>

                  {/* PRODUCT DIMENTIONS TITLE CONTAINER */}
                  <div className="product-dimentions-title-container">
                    {/* PRODUCT DIMENTIONS TITLE */}
                    <h4
                      className="product-dimentions-title anime"
                      data-move="move-up"
                      data-delay={0.4}>
                      Outer Diameter
                    </h4>

                    {/* PRODUCT DIMENTIONS TEXT */}
                    <p
                      className="product-dimentions-text anime"
                      data-move="move-right"
                      data-delay={0.4}>
                      9.52 MM - 127 MM
                    </p>
                  </div>
                </div>

                {/* THICKNESS CONTAINER */}
                <div className="thickness-container">
                  {/* PRODUCT DIMENTIONS ICON CONTAINER */}
                  <div
                    className="product-dimentions-icon-container anime"
                    data-move="move-left"
                    data-delay={0.2}>
                    <StraightenIcon className="product-dimentions-icon" />
                  </div>

                  {/* PRODUCT DIMENTIONS TITLE CONTAINER */}
                  <div className="product-dimentions-title-container">
                    {/* PRODUCT DIMENTIONS TITLE */}
                    <h4
                      className="product-dimentions-title anime"
                      data-move="move-up"
                      data-delay={0.4}>
                      Thickness
                    </h4>

                    {/* PRODUCT DIMENTIONS TEXT */}
                    <p
                      className="product-dimentions-text anime"
                      data-move="move-right"
                      data-delay={0.4}>
                      0.3 MM - 3 MM
                    </p>
                  </div>
                </div>

                {/* LENGTH CONTAINER */}
                <div className="length-container">
                  {/* PRODUCT DIMENTIONS ICON CONTAINER */}
                  <div
                    className="product-dimentions-icon-container anime"
                    data-move="move-left"
                    data-delay={0.2}>
                    <SquareFootIcon className="product-dimentions-icon" />
                  </div>

                  {/* PRODUCT DIMENTIONS TITLE CONTAINER */}
                  <div className="product-dimentions-title-container">
                    {/* PRODUCT DIMENTIONS TITLE */}
                    <h4
                      className="product-dimentions-title anime"
                      data-move="move-up"
                      data-delay={0.4}>
                      Length
                    </h4>

                    {/* PRODUCT DIMENTIONS TEXT */}
                    <p
                      className="product-dimentions-text anime"
                      data-move="move-right"
                      data-delay={0.4}>
                      20 FT
                    </p>
                  </div>
                </div>
              </div>

              {/* DIMENTIONS BOTTOM SECTION */}
              <div className="dimentions-bottom-section">
                {/* MATERIAL GRADE CONTAINER */}
                <div className="material-grade-container">
                  {/* PRODUCT DIMENTIONS ICON CONTAINER */}
                  <div
                    className="product-dimentions-icon-container anime"
                    data-move="move-left"
                    data-delay={0.2}>
                    <GradeOutlinedIcon className="product-dimentions-icon" />
                  </div>

                  {/* PRODUCT DIMENTIONS TITLE CONTAINER */}
                  <div className="product-dimentions-title-container">
                    {/* PRODUCT DIMENTIONS TITLE */}
                    <h4
                      className="product-dimentions-title anime"
                      data-move="move-up"
                      data-delay={0.4}>
                      Material Grade
                    </h4>

                    {/* GRADE TEXT CONTAINER */}
                    <div className="grade-text-container">
                      <span
                        className="product-dimentions-grade-text anime"
                        data-move="move-right"
                        data-delay={0.6}
                        onClick={(event) => productGradeClickHandler(event)}>
                        201
                      </span>
                      <span
                        className="product-dimentions-grade-text anime"
                        data-move="move-right"
                        data-delay={0.7}
                        onClick={(event) => productGradeClickHandler(event)}>
                        202
                      </span>
                      <span
                        className="product-dimentions-grade-text anime"
                        data-move="move-right"
                        data-delay={0.8}
                        onClick={(event) => productGradeClickHandler(event)}>
                        304
                      </span>
                      <span
                        className="product-dimentions-grade-text anime"
                        data-move="move-right"
                        data-delay={0.9}
                        onClick={(event) => productGradeClickHandler(event)}>
                        304L
                      </span>
                      <span
                        className="product-dimentions-grade-text anime"
                        data-move="move-right"
                        data-delay={1.0}
                        onClick={(event) => productGradeClickHandler(event)}>
                        316
                      </span>
                      <span
                        className="product-dimentions-grade-text anime"
                        data-move="move-right"
                        data-delay={1.1}
                        onClick={(event) => productGradeClickHandler(event)}>
                        316L
                      </span>
                    </div>
                  </div>
                </div>

                {/* USAGE CONTAINER */}
                <div className="usage-container">
                  {/* PRODUCT DIMENTIONS ICON CONTAINER */}
                  <div
                    className="product-dimentions-icon-container anime"
                    data-move="move-left"
                    data-delay={0.2}>
                    <DataUsageOutlinedIcon className="product-dimentions-icon" />
                  </div>

                  {/* PRODUCT DIMENTIONS TITLE CONTAINER */}
                  <div className="product-dimentions-title-container">
                    {/* PRODUCT DIMENTIONS TITLE */}
                    <h4
                      className="product-dimentions-title anime"
                      data-move="move-up"
                      data-delay={0.4}>
                      Usages
                    </h4>

                    {/* PRODUCT DIMENTIONS TEXT */}
                    <p
                      className="product-dimentions-text anime"
                      data-move="move-right"
                      data-delay={0.4}>
                      Infrastructure, Furniture, Home Decore etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT DIMENTIONS BOTTOM WRAPPER */}
          {showGradeDescriptionContainer && (
            <div className="product-dimentions-bottom-wrapper">
              {/* PRODUCT GRADE DESCRIPTION HEADER TITLE */}
              <h4 className="product-grade-description-header-title">
                {productGrade.gradeNum} Grade Description
              </h4>

              {/* PRODUCT GRADE DESCRIPTION CONTENT */}
              <div
                dangerouslySetInnerHTML={{ __html: productGrade.gradeDesc }}
                className="product-grade-description-content">
                {/* DESCRIPTION FROM DANGEROUSLY SET INNER HTML */}
              </div>

              {/* CLOSE TEXT */}
              <button className="close-button" onClick={closeGradeContainer}>
                Close
              </button>
            </div>
          )}
        </div>
      </section>

      {/* GENERATE QUOTAION SECTION */}
      <section className="generate-quotation-section">
        <GenerateQuotation clickEvent={showQuotationModalHandler} />
      </section>

      {/* BROCHURE SECTION */}
      <section className="brochure-section">
        <Brochure />
      </section>

      {/* STILL NEED HELP SECTION */}
      <section className="still-need-help-section">
        <MessageBox />
      </section>
    </ProductContainer>
  );
};

export default Product;
