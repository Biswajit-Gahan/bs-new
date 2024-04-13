import {Fragment, useEffect, useReducer, useState} from "react";
import styles from "./client-estimate.module.css";
import ThicknessSelect from "./components/thickness-select/thickness-select";
import DimensionSelect from "./components/dimension-select/dimention-select";
import mobileViewImage from "../../assets/images/mobile-view.png";
import {useSearchParams} from "react-router-dom";
import clientEstimateData from "./utils/client-estimate-data";
import PopupModal from "./components/popup-modal/popup-modal";

export default function ClientEstimate() {
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token");
    const agentName = searchParams.get("name");
    const agentMobileNumber = searchParams.get("mobile");
    const currentDate = new Date().toJSON().slice(0, 10);

    const [showPopup, setShowPopup] = useState(() => ({flag: false, data : {flag: false, message: ""}}));

    const initialState = {
        preparedOnDate: currentDate,
        dimensionIndex: "",
        thickness: "",
        approxWeight: "",
        gradeValue: "",
        quantity: "",
        totalPrice: "",
        ratePerKg: "",
    }

    function reducer(state, action) {
        return { ...state, ...action.payload }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function getExactValue(value, valuesAfterPoint) {
        const splitValues = `${value}`.split(".")

        if(splitValues.length > 1) {
            return parseFloat(`
                ${splitValues[0]}.${[...splitValues[1]].slice(0, valuesAfterPoint).join("")}
            `);
        }

        return value;
    }



    function getGradeValue(dimensionIndex, thickness) {
        return parseFloat(clientEstimateData.valuesPerKg[thickness][dimensionIndex]);
    }

    function getApproxWeight(quantity, gradeValue) {
        return getExactValue(quantity * gradeValue, 4);
    }

    function getTotalPrice(price, approxWeight) {
        console.log(price)
        return getExactValue(price * approxWeight, 2);
    }

    function handleQuantity (event) {
        if(clientEstimateData.regex.quantity.test(event.target.value)) {
            dispatch({payload: {quantity: parseFloat(event.target.value)}});
            return;
        }
        dispatch({payload: {quantity: event.target.value.slice(0, event.target.value.length - 1)}});
    }

    function handleRatePerKg(event) {
        if(clientEstimateData.regex.isOnlyNumberAndPoint.test(event.target.value)) {
            dispatch({payload: {ratePerKg: event.target.value}});
            return;
        }

        dispatch({payload: {ratePerKg: event.target.value.slice(0, event.target.value.length - 1)}});
    }

    useEffect(() => {
        if(state.dimensionIndex && state.thickness) {
            const gradeValue = getGradeValue(state.dimensionIndex, state.thickness);
            dispatch({payload: {gradeValue}});

            if(clientEstimateData.regex.quantity.test(state.quantity)) {
                const approxWeight = getApproxWeight(state.quantity, gradeValue);
                dispatch({payload: {approxWeight}});

                if(clientEstimateData.regex.ratePerKg.test(state.ratePerKg)) {
                    const totalPrice = getTotalPrice(state.ratePerKg, approxWeight);
                    dispatch({payload: {totalPrice}});
                } else {
                    dispatch({payload: {totalPrice: ""}})
                }
            } else {
                dispatch({payload: {approxWeight: "", ratePerKg: "", totalPrice: ""}})
            }
        }
    }, [state.dimensionIndex, state.thickness, state.quantity, state.ratePerKg]);



    if(!agentName || !agentMobileNumber || clientEstimateData.token !== token) {
        return <Fragment>
            <div className={styles.popup}>
                <img className={styles.mobile_view_image} src={mobileViewImage} alt="mobile-view-image"/>
                <p>Parameters are not found. </p>
                <p>Kindly re-open this app. </p>
            </div>

            <div className={styles.caution}>
                <img className={styles.mobile_view_image} src={mobileViewImage} alt="mobile-view-image"/>
                <p>Kindly open in mobile app... </p>
            </div>
        </Fragment>
    }

    function handleRequestButton(event) {
        event.preventDefault();

        const [agentName, agentMobileNumber, preparedOnDate, validTillDate, clientName, clientCompanyName, clientGstin, clientMobileNumber, clientEmailId, clientAddress, gradeType, thickness, dimension, quantity, approxWeight, ratePerKg, totalPrice] = event.target;

    //     CHECK NAME
        if(!clientEstimateData.regex.name.test(agentName.value) || !clientEstimateData.regex.name.test(clientName.value)) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.name}
            }))
            return;
        }

    //     CHECK MOBILE NUMBER
        if (!clientEstimateData.regex.mobileNumber.test(agentMobileNumber.value) || !clientEstimateData.regex.mobileNumber.test(clientMobileNumber.value)) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.mobileNumber}
            }))
            return;
        }

    //     CHECK DATES
        if(!preparedOnDate.value || !validTillDate.value) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.date}
            }))
            return;
        }

    //     COMPARE DATES
        const dateOne = new Date(preparedOnDate.value);
        const dateTwo = new Date(validTillDate.value);
        if(dateOne > dateTwo) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.date}
            }))
            return;
        }

    //     CHECK COMPANY NAME
        if(!clientEstimateData.regex.companyName.test(clientCompanyName.value)) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.companyName}
            }))
            return;
        }

    //     CHECK GSTIN
        if(!clientEstimateData.regex.gstNumber.test(clientGstin.value)) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.gstNumber}
            }))
            return;
        }

    //     CHECK EMAIL ID
        if(!clientEstimateData.regex.email.test(clientEmailId.value)) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.emailId}
            }))
            return;
        }

    //     CHECK ADDRESS
        if(!clientEstimateData.regex.address.test(clientAddress.value)) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.address}
            }))
            return;
        }

    //     CHECK GRADE TYPE
        if(gradeType.value === "false") {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.gradeType}
            }))
            return;
        }

    //     CHECK THICKNESS
        if(thickness.value === "false") {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.thickness}
            }))
            return;
        }

    //     CHECK DIMENSION
        if(dimension.value === "false") {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.dimension}
            }))
            return;
        }

    //     CHECK QUANTITY
        if(!clientEstimateData.regex.quantity.test(quantity.value)) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.quantity}
            }))
            return;
        }

    //     CHECK APPROX WEIGHT
        if(!approxWeight.value) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.approxWeight}
            }))
            return;
        }

    //     CHECK RATE PER KG
        if(!clientEstimateData.regex.ratePerKg.test(ratePerKg.value)) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.ratePerKg}
            }))
            return;
        }

    //     CHECK TOTAL PRICE
        if(!totalPrice.value) {
            setShowPopup(() => ({
                flag: true, data: {flag: false, message: clientEstimateData.messages.error.totalPrice}
            }))
            return;
        }

        setShowPopup(() => ({
            flag: true, data: {flag: true, message: clientEstimateData.messages.success.formRequest}
        }));
    }

    function handlePreparedOnDateChange(event) {
        dispatch({payload: {preparedOnDate: event.target.value}});
    }

    return <main className={styles.main}>
        {showPopup.flag && <PopupModal data={showPopup.data} setShowPopup={setShowPopup} />}
        <form className={styles.form} id={"form"} onSubmit={handleRequestButton}>
            <span className={styles.text_header}>AGENT DETAILS</span>
            <p className={styles.label}>Prepared By</p>
            <input readOnly type="text" id="agentName" placeholder="Prepared by" value={agentName || ""}
                   className={styles.input_field_design}/>
            <p className={styles.label}>Agent Mobile Number</p>
            <input readOnly type="text" id="agentNumber" placeholder="Mobile number" value={agentMobileNumber || ""}
                   className={styles.input_field_design}/>
            <p className={styles.label}>Estimate Prepared On</p>
            <input required type="date" id="agentPreparedDate" value={state.preparedOnDate}
                   className={styles.input_field_design} onChange={handlePreparedOnDateChange}/>
            <p className={styles.label}>Estimate Valid Till</p>
            <input required type="date" id="agentValidTillDate"
                   className={styles.input_field_design} />

            <span className={styles.text_header}>CLIENT DETAILS</span>
            <p className={styles.label}>Client Name</p>
            <input required type="text" id="clientName" placeholder="Client name"
                   className={styles.input_field_design}/>
            <p className={styles.label}>Client Company Name</p>
            <input required type="text" id="clientCompanyName" placeholder="Client company name"
                   className={styles.input_field_design}/>
            <p className={styles.label}>Client GSTIN</p>
            <input required type="text" id="clientGstinNumber" placeholder="GSTIN"
                   className={styles.input_field_design}/>
            <p className={styles.label}>Client Mobile Number</p>
            <input required type="text" id="clientPhoneNumber" placeholder="Client mobile number"
                   className={styles.input_field_design}/>
            <p className={styles.label}>Client Mail ID</p>
            <input required type="email" id="clientEmailId" placeholder="Client email id"
                   className={styles.input_field_design}/>
            <p className={styles.label}>Client Address</p>
            <textarea required id="cilentAddress" rows="7" placeholder="Address"
                      className={styles.text_field_area_design}/>

            <span className={styles.text_header}>MATERIALS SPECIFICATIONS</span>

            {/* Select Grade Types */}
            <p className={styles.label}>Specify Grade Type</p>
            <div className={styles.select_container}>
                <select id="gradeSelect" defaultValue="false" className={styles.grade_select}>
                    <option value="false" disabled>Select Grade Type</option>
                    <option value="304">304</option>
                </select>
            </div>

            {/* Select Thickness */}
            <p className={styles.label}>Specify Thickness (GAUGE)</p>
            <div className={styles.select_container}>
                <ThicknessSelect dispatch={dispatch}/>
            </div>

            {/* select dimension  */}
            <p className={styles.label}>Specify Dimension</p>
            <div className={styles.select_container}>
                <DimensionSelect dispatch={dispatch}/>
            </div>

            {/* Quantity */}
            <p className={styles.label}>Specify Quantity (PCS)</p>
            <input required type="text" id="quantity" placeholder="Quantity" className={styles.input_field_design}
                   onInput={handleQuantity} value={state.quantity}/>

            {/* Approximate weight */}
            <p className={styles.label}>Approximate Weight (KG)</p>
            <input readOnly type="text" id="approxWeight" placeholder="Approx weight"
                   className={styles.input_field_design} value={state.approxWeight}/>

            {/* Rate per kg */}
            <p className={styles.label}>Rate/KG (₹)</p>
            <input required type="text" id="ratePerKg" placeholder="Rate / kg" className={styles.input_field_design}
                   onInput={handleRatePerKg} value={state.ratePerKg}/>

            {/*Total price  */}
            <p className={styles.label}>Total Price (₹)</p>
            <input readOnly value={state.totalPrice} type="text" id="totalPrice" placeholder="Total price"
                   className={styles.input_field_design}/>


            <button type="submit" className={styles.request_button}>REQUEST</button>
        </form>

        <div className={styles.caution}>
            <img className={styles.mobile_view_image} src={mobileViewImage} alt="mobile-view-image" />
            <p>Kindly open in mobile app... </p>
        </div>
    </main>
}