import React, { useState } from "react";
import { NeedAssistanceContainer } from "./need.assistance.styles";
import regex from "../../utils/regex";
import QuotationModal from "../modals/quotation.modal/QuotationModal";

const NeedAssistance = () => {
  const [quantity, setQuantity] = useState(() => (""));

  const [productType, setProductType] = useState(() => ("round"));

  const [isChecked, setIsChecked] = useState(() => (false));

  const [showModal, setShowModal] = useState(() => (false));

  const handleInput = (event) => {
    const { value } = event.target;
    setQuantity((prevData) => (prevData = value));
    const check = regex.quantity.test(value);
    if (check) {
      setIsChecked((prevData) => (prevData = true));
    } else {
      setIsChecked((prevData) => (prevData = false));
    };
  };

  const handleSelection = (event) => {
    const { value } = event.target;
    setProductType((prevData) => (prevData = value.split("-")[0]));
  }

  const handleRequestButton = () => {
    if (isChecked) {
      setShowModal((prevData) => (prevData = !prevData));
    } else {
      setShowModal((prevData) => (prevData = false));
    };
  };

  return (
    <NeedAssistanceContainer>
      {
        showModal && <QuotationModal quantity={quantity} productType={productType} clickEvent={handleRequestButton} />
      }
      <div className="wrapper">
        <div className="content-container">
          {/* WRAPPER LEFT CONTAINER */}
          <div className="wrapper-left-container">
            {/* HEADER CONTAINER */}
            <div className="header-container">
              <h2 className="header-text anime" data-move="move-up">Need Assistance ?</h2>
              <p className="header-tag anime" data-move="move-right" data-delay={0.2}>It's easy.</p>
            </div>

            {/* HEADER CONTENT */}
            <p className="header-content anime" data-move="move-right" data-delay={0.3}>
              If you have any queries or need assistance please provide your queries here, our team will contact you to clarify the queries.
            </p>
          </div>

          {/* WRAPPER RIGHT CONTAINER */}
          <div className="wrapper-right-container">
            {/* MATERIAL TYPE */}
            <select defaultValue="round-tubes" name="material-type" id="material-type" className="material-type anime" data-move="move-down" data-delay={0.4} onChange={handleSelection}>
              {/* <option className="material-option" value="Material Types" disabled={true}>Material Types</option> */}
              <option className="material-option" value="round-tubes">Round Stainless Tubes</option>
              <option className="material-option" value="square-tubes">Square Stainless Tubes</option>
              <option className="material-option" value="rectangle-tubes">Rectangle Stainless Tubes</option>
            </select>

            {/* MATERIAL QUANTITY */}
            <input type="text" name="material-quantity" id="material-quantity" className="material-quantity anime" placeholder="Material Quantity" data-move="move-down" data-delay={0.5} onInput={handleInput}/>

            {/* GENERATE QUOTATION BUTTON */}
            <button type="button" className="generate-quotation-button anime" data-move="move-down" data-delay={0.6} onClick={handleRequestButton}>Generate Quotation</button>
          </div>
        </div>
      </div>

    </NeedAssistanceContainer>
  );
};

export default NeedAssistance;