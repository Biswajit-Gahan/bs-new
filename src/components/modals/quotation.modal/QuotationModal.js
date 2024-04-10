import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { QuotationModalContainer } from "./quotation.modal.styles";
import regex from "../../../utils/regex";
import constants from "../../../utils/constants";
import { sendMail } from "../../../utils/axios/email";
// import { firedb } from "../../../utils/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseIcon from "@mui/icons-material/Close";

const QuotationModal = ({
  productType = "round",
  clickEvent,
  quantity = "",
}) => {
  const [allInputs, setAllInputs] = useState(() => ({
    username: "",
    useremail: "",
    usermobile: "",
    company: "",
    productType,
    thickness: "",
    gradeType: "201",
    quantity,
    exReq: "",
  }));

  const [buttonState, setButtonState] = useState(() => ({
    isError: false,
    isSuccess: false,
    isLoading: false,
    isChecked: false,
  }));

  const checkAllInputs = () => {
    const obj = Object.keys(allInputs).every((item) => {
      if (item === "productType" || item === "gradeType") {
        return true;
      } else {
        return allInputs[item] !== "" && regex[item].test(allInputs[item]);
      }
    });
    return obj;
  };

  const handleInputs = ({ target }) => {
    setButtonState((prevData) => ({
      ...prevData,
      isError: false,
      isLoading: false,
      isSuccess: false,
    }));
    const { id, value } = target;
    setAllInputs((prevData) => ({ ...prevData, [id]: value }));
    if (target.nodeName !== "SELECT") {
      if (regex[id].test(value)) {
        target.style.color = constants.colors.bsDark;
      } else {
        if (value === "") {
          target.style.color = constants.colors.bsDark;
        } else {
          target.style.color = "red";
        }
      }
    }
  };

  const handleRequest = async () => {
    if (buttonState.isChecked && !buttonState.isLoading) {
      setButtonState((prevData) => ({ ...prevData, isLoading: true }));
      try {
        const toEmail = process.env.REACT_APP_EMAIL_DEFAULT_ADDRESS;
        const subject = "New Qutotaion For Bishnu Steel";
        const content = `
          <h3>Sender's Details</h3>
          <p><strong>Name:</strong> ${allInputs.username}</p>
          <p><strong>Mobile No.</strong>: ${allInputs.usermobile}</p>
          <p><strong>Email ID:</strong> ${allInputs.useremail}</p>
          <p><strong>Company:</strong> ${allInputs.company}</p>
          <br/>
          <h3>Requirement Details</h3>
          <p><strong>Steel Type</strong>: ${allInputs.productType}</p>
          <p><strong>Thickness.</strong>: ${allInputs.thickness} MM</p>
          <p><strong>Grade</strong>: ${allInputs.gradeType}</p>
          <p><strong>Quantity</strong>: ${allInputs.quantity} TON</p>
          <br/>
          <h3><strong>Other Requirements:</strong></h3>
          <p>${allInputs.exReq}</p>
        `;

        const { data } = await sendMail.post(
          process.env.REACT_APP_EMAIL_SEND_API,
          {
            toEmail,
            subject,
            content,
          }
        );

        if (data.statusCode === 200) {
          setButtonState((prevData) => ({
            ...prevData,
            isLoading: false,
            isSuccess: true,
            isError: false,
          }));
          setAllInputs(() => ({
            username: "",
            useremail: "",
            usermobile: "",
            company: "",
            productType,
            thickness: "",
            gradeType: "201",
            quantity: "",
            exReq: "",
          }));
        } else {
          setButtonState((prevData) => ({
            ...prevData,
            isLoading: false,
            isError: true,
          }));
        }

        // TODO: TEMPRARILY DISABLED THE FIREBASE DB

        // const docRef = await addDoc(collection(firedb, "request_quotation"), {
        //   username: allInputs.username,
        //   useremail: allInputs.useremail,
        //   usermobile: allInputs.usermobile,
        //   exReq: allInputs.exReq,
        //   company: allInputs.company,
        //   grade: allInputs.gradeType,
        //   quantity: allInputs.quantity,
        //   steeltype: allInputs.productType,
        //   thickness: allInputs.thickness,
        //   requestdate: serverTimestamp(),
        // });
      } catch (err) {
        setButtonState((prevData) => ({
          ...prevData,
          isLoading: false,
          isError: true,
        }));
      }
    }
  };

  useEffect(() => {
    const check = checkAllInputs();
    if (check) {
      setButtonState((prevData) => ({ ...prevData, isChecked: true }));
    } else {
      setButtonState((prevData) => ({ ...prevData, isChecked: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allInputs]);

  return createPortal(
    <QuotationModalContainer>
      {/* QUOTATION FORM CONTAINER */}
      <div className="quotation-form-container">
        {/* YOUR DETAILS CONTAINER */}
        <div className="your-details-container">
          {/* HEADER TEXT */}
          <h4 className="your-details-container-header-text header-text">
            Your Details
          </h4>

          {/* YOUR DETAILS INPUTS CONTAINER */}
          <div className="your-details-inputs-container input-container">
            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="username" className="input-label">
                  Full Name
                </label>
                <input
                  value={allInputs.username}
                  type="text"
                  id="username"
                  className="name-input input"
                  placeholder="your full name..."
                  onInput={handleInputs}
                />
              </div>

              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="useremail" className="input-label">
                  Email ID
                </label>
                <input
                  value={allInputs.useremail}
                  type="email"
                  id="useremail"
                  className="email-input input"
                  placeholder="your email id..."
                  onInput={handleInputs}
                />
              </div>
            </div>

            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="usermobile" className="input-label">
                  Mobile Number
                </label>
                <input
                  value={allInputs.usermobile}
                  type="text"
                  id="usermobile"
                  className="mobile-input input"
                  placeholder="your mobile number..."
                  onInput={handleInputs}
                />
              </div>

              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="company" className="input-label">
                  Company Name
                </label>
                <input
                  value={allInputs.company}
                  type="text"
                  id="company"
                  className="company-input input"
                  placeholder="your company name..."
                  onInput={handleInputs}
                />
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT DETAILS CONTAINER */}
        <div className="product-details-container">
          {/* HEADER TEXT */}
          <h4 className="product-details-container-header-text header-text">
            Product Details
          </h4>
          {/* PRODUCT TYPE INPUTS CONTAINER */}
          <div className="productType-inputs-container input-container">
            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="productType" className="input-label">
                  Steel Type
                </label>
                <select
                  value={allInputs.productType}
                  id="productType"
                  className="productType-select input"
                  onChange={handleInputs}>
                  <option value="round" className="option">
                    Round Stainless Tube
                  </option>
                  <option value="square" className="option">
                    Square Stainless Tube
                  </option>
                  <option value="rectangle" className="option">
                    Rectangle Stainless Tube
                  </option>
                </select>
              </div>

              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="thickness" className="input-label">
                  Thickness <strong className="bold-text">(MM)</strong>
                </label>
                <input
                  value={allInputs.thickness}
                  type="text"
                  id="thickness"
                  className="thickness-input input"
                  placeholder="eg: 0.3mm - 3.0mm"
                  onInput={handleInputs}
                />
              </div>
            </div>

            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="gradeType" className="input-label">
                  Grade
                </label>
                <select
                  value={allInputs.gradeType}
                  id="gradeType"
                  className="gradeType-select input"
                  onChange={handleInputs}>
                  <option value="201" className="option">
                    201
                  </option>
                  <option value="202" className="option">
                    202
                  </option>
                  <option value="304" className="option">
                    304
                  </option>
                  <option value="304L" className="option">
                    304L
                  </option>
                  <option value="316" className="option">
                    316
                  </option>
                  <option value="316L" className="option">
                    316L
                  </option>
                </select>
              </div>

              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="quantity" className="input-label">
                  Quantity <strong className="bold-text">(TON)</strong>
                </label>
                <input
                  value={allInputs.quantity}
                  type="text"
                  id="quantity"
                  className="quantity-input input"
                  placeholder="quantity in tons..."
                  onInput={handleInputs}
                />
              </div>
            </div>

            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="exReq" className="input-label">
                  Other Requirements
                </label>
                <textarea
                  value={allInputs.exReq}
                  type="text"
                  id="exReq"
                  className="text-area-input input"
                  placeholder="please specify your addition requirements, if any..."
                  onInput={handleInputs}
                />
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS CONTAINER */}
        <div className="buttons-container">
          <button
            type="button"
            className="request-quotation-button modal-button"
            onClick={handleRequest}
            style={{
              cursor: buttonState.isChecked ? "pointer" : "not-allowed",
            }}>
            {buttonState.isLoading ? (
              <>
                <RestartAltIcon /> Please Wait...
              </>
            ) : buttonState.isError ? (
              <>
                <ErrorOutlineIcon />
                Error, Please Send Again!
              </>
            ) : buttonState.isSuccess ? (
              <>
                <DoneAllIcon />
                Sent Successfully.
              </>
            ) : (
              <>
                <SendRoundedIcon />
                Request Quotation
              </>
            )}
          </button>
          <button
            type="button"
            className="close-button modal-button"
            onClick={clickEvent}>
            <CloseIcon />
            Close
          </button>
        </div>
      </div>
    </QuotationModalContainer>,
    document.querySelector("#quotation-modal")
  );
};

export default QuotationModal;
