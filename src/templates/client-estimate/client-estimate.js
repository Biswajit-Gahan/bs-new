import {Fragment, useEffect, useReducer, useState} from "react";
import styles from "./client-estimate.module.css";
import ThicknessSelect from "./components/thickness-select/thickness-select";
import DimensionSelect from "./components/dimension-select/dimention-select";
import mobileViewImage from "../../assets/images/mobile-view.png";
import {useSearchParams} from "react-router-dom";
import clientEstimateData from "./utils/client-estimate-data";
import PopupModal from "./components/popup-modal/popup-modal";
import UserDetailsScreen from "./components/user-details-screen/user-details-screen";
import EstimateAddScreen from "./components/estimate-add-screen/estimate-add-screen";
import EstimateCard from "./components/estimate-card/estimate-card";
import ShowEstimateScreen from "./components/show-estimate-screen/show-estimate-screen";

export default function ClientEstimate() {
    const [searchParams, setSearchParams] = useSearchParams();
    // const token = searchParams.get("token");
    // const agentName = searchParams.get("name");
    // const agentMobileNumber = searchParams.get("mobile");
    // const currentDate = new Date().toJSON().slice(0, 10);

    // const [showPopup, setShowPopup] = useState(() => ({flag: false, data: {flag: false, message: ""}}));
    // const [nextScreen, setNextScreen] = useState(() => false);

    const initialState = {
        showPopupModal: {flag: false, data: {success: false, message: ""}},
        currentScreen: 0,
        token: searchParams.get("token"),
        agentName: searchParams.get("name"),
        agentNumber: searchParams.get("mobile"),
        agentPreparedDate: new Date().toJSON().slice(0, 10),
        agentValidTillDate: "",
        clientName: "",
        clientEmailId: "",
        clientCompanyName: "",
        clientGstinNumber: "",
        clientPhoneNumber: "",
        clientAddress: "",
        dimensionIndex: "",
        dimensionInnerText: "",
        thickness: "",
        approxWeight: "",
        gradeSelect: "",
        quantity: "",
        totalPrice: "",
        ratePerKg: "",
        estimates: [],
    }

    function reducer(state, action) {
        return {...state, ...action.payload}
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // function getExactValue(value, valuesAfterPoint) {
    //     const splitValues = `${value}`.split(".")
    //
    //     if (splitValues.length > 1) {
    //         return parseFloat(`
    //             ${splitValues[0]}.${[...splitValues[1]].slice(0, valuesAfterPoint).join("")}
    //         `);
    //     }
    //
    //     return value;
    // }

    // function getGradeValue(dimensionIndex, thickness) {
    //     return parseFloat(clientEstimateData.valuesPerKg[thickness][dimensionIndex]);
    // }

    // function getApproxWeight(quantity, gradeValue) {
    //     return getExactValue(quantity * gradeValue, 4);
    // }

    // function getTotalPrice(price, approxWeight) {
    //     console.log(price)
    //     return getExactValue(price * approxWeight, 2);
    // }

    // useEffect(() => {
    //     if (state.dimensionIndex && state.thickness) {
    //         const gradeValue = getGradeValue(state.dimensionIndex, state.thickness);
    //         dispatch({payload: {gradeValue}});
    //
    //         if (clientEstimateData.regex.quantity.test(state.quantity)) {
    //             const approxWeight = getApproxWeight(state.quantity, gradeValue);
    //             dispatch({payload: {approxWeight}});
    //
    //             if (clientEstimateData.regex.ratePerKg.test(state.ratePerKg)) {
    //                 const totalPrice = getTotalPrice(state.ratePerKg, approxWeight);
    //                 dispatch({payload: {totalPrice}});
    //             } else {
    //                 dispatch({payload: {totalPrice: ""}})
    //             }
    //         } else {
    //             dispatch({payload: {approxWeight: "", ratePerKg: "", totalPrice: ""}})
    //         }
    //     }
    // }, [state.dimensionIndex, state.thickness, state.quantity, state.ratePerKg]);


    if (!state.agentName || !state.agentNumber || clientEstimateData.token !== state.token) {
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

    // function handleAddButton(event) {
    //     event.preventDefault();
    //
    //     const [agentName, agentMobileNumber, preparedOnDate, validTillDate, clientName, clientCompanyName, clientGstin, clientMobileNumber, clientEmailId, clientAddress, gradeType, thickness, dimension, quantity, approxWeight, ratePerKg, totalPrice] = event.target;
    //
    //     //     CHECK GRADE TYPE
    //     if (state.gradeSelect === "false") {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.gradeType}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK THICKNESS
    //     if (!state.thickness) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.thickness}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK DIMENSION
    //     if (!state.dimensionIndex) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.dimension}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK QUANTITY
    //     if (!clientEstimateData.regex.quantity.test(state.quantity)) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.quantity}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK APPROX WEIGHT
    //     if (!state.approxWeight) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.approxWeight}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK RATE PER KG
    //     if (!clientEstimateData.regex.ratePerKg.test(state.ratePerKg)) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.ratePerKg}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK TOTAL PRICE
    //     if (!state.totalPrice) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.totalPrice}
    //         }))
    //         return;
    //     }
    //
    //     if (state.estimates.length === 20) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.estimatesLength}
    //         }));
    //         return;
    //     }
    //
    //     const estimateData = {
    //         grade: state.gradeSelect,
    //         thickness: state.thickness,
    //         dimension: state.dimensionInnerText,
    //         quantity: state.quantity,
    //         approxWeight: state.approxWeight,
    //         ratePerKg: state.ratePerKg,
    //         totalPrice: state.totalPrice,
    //         id: Date.now(),
    //     }
    //
    //     dispatch({
    //         payload: {
    //             estimates: [...state.estimates, estimateData],
    //             gradeSelect: "",
    //             thickness: "",
    //             dimensionIndex: "",
    //             dimensionInnerText: "",
    //             quantity: "",
    //             approxWeight: "",
    //             ratePerKg: "",
    //             totalPrice: "",
    //         }
    //     })
    // }

    // function handleRequestButton() {
    //     if(state.estimates.length === 0){
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.emptyRequest}
    //         }))
    //         return;
    //     }
    //
    //     setShowPopup(() => ({
    //         flag: true, data: {flag: true, message: clientEstimateData.messages.success.formRequest}
    //     }));
    // }
    //
    // function handleNextButton(event) {
    //     event.preventDefault();
    //
    //     //     CHECK NAME
    //     if (!clientEstimateData.regex.name.test(state.agentName) || !clientEstimateData.regex.name.test(state.clientName)) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.name}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK MOBILE NUMBER
    //     if (!clientEstimateData.regex.mobileNumber.test(state.agentNumber) || !clientEstimateData.regex.mobileNumber.test(state.clientPhoneNumber)) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.mobileNumber}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK DATES
    //     if (!state.agentPreparedDate || !state.agentValidTillDate) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.date}
    //         }))
    //         return;
    //     }
    //
    //     //     COMPARE DATES
    //     const dateOne = new Date(state.agentPreparedDate);
    //     const dateTwo = new Date(state.agentValidTillDate);
    //     if (dateOne > dateTwo) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.date}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK COMPANY NAME
    //     if (!clientEstimateData.regex.companyName.test(state.clientCompanyName)) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.companyName}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK GSTIN
    //     if (!clientEstimateData.regex.gstNumber.test(state.clientGstinNumber)) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.gstNumber}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK EMAIL ID
    //     if (!clientEstimateData.regex.email.test(state.clientEmailId)) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.emailId}
    //         }))
    //         return;
    //     }
    //
    //     //     CHECK ADDRESS
    //     if (!clientEstimateData.regex.address.test(state.clientAddress)) {
    //         setShowPopup(() => ({
    //             flag: true, data: {flag: false, message: clientEstimateData.messages.error.address}
    //         }))
    //         return;
    //     }
    //
    //     setNextScreen(() => true);
    // }

    // function handleNextButton(event, nextScreen) {
    //     event.preventDefault();
    //
    //     //     CHECK NAME
    //     if (!clientEstimateData.regex.name.test(state.agentName) || !clientEstimateData.regex.name.test(state.clientName)) {
    //         dispatch({
    //             payload: {
    //                 ...state, showPopupModal: {
    //                     flag: true, data: {success: false, message: clientEstimateData.messages.error.name}
    //                 }
    //             }
    //         })
    //         return;
    //     }
    //
    //     //     CHECK MOBILE NUMBER
    //     if (!clientEstimateData.regex.mobileNumber.test(state.agentNumber) || !clientEstimateData.regex.mobileNumber.test(state.clientPhoneNumber)) {
    //         dispatch({
    //             payload: {
    //                 ...state, showPopupModal: {
    //                     flag: true, data: {success: false, message: clientEstimateData.messages.error.mobileNumber}
    //                 }
    //             }
    //         })
    //         return;
    //     }
    //
    //     //     CHECK DATES
    //     if (!state.agentPreparedDate || !state.agentValidTillDate) {
    //         dispatch({
    //             payload: {
    //                 ...state, showPopupModal: {
    //                     flag: true, data: {success: false, message: clientEstimateData.messages.error.date}
    //                 }
    //             }
    //         })
    //         return;
    //     }
    //
    //     //     COMPARE DATES
    //     const dateOne = new Date(state.agentPreparedDate);
    //     const dateTwo = new Date(state.agentValidTillDate);
    //     if (dateOne > dateTwo) {
    //         dispatch({
    //             payload: {
    //                 ...state, showPopupModal: {
    //                     flag: true, data: {success: false, message: clientEstimateData.messages.error.date}
    //                 }
    //             }
    //         })
    //         return;
    //     }
    //
    //     //     CHECK COMPANY NAME
    //     if (!clientEstimateData.regex.companyName.test(state.clientCompanyName)) {
    //         dispatch({
    //             payload: {
    //                 ...state, showPopupModal: {
    //                     flag: true, data: {success: false, message: clientEstimateData.messages.error.companyName}
    //                 }
    //             }
    //         })
    //         return;
    //     }
    //
    //     //     CHECK GSTIN
    //     if (!clientEstimateData.regex.gstNumber.test(state.clientGstinNumber)) {
    //         dispatch({
    //             payload: {
    //                 ...state, showPopupModal: {
    //                     flag: true, data: {success: false, message: clientEstimateData.messages.error.gstNumber}
    //                 }
    //             }
    //         })
    //         return;
    //     }
    //
    //     //     CHECK EMAIL ID
    //     if (!clientEstimateData.regex.email.test(state.clientEmailId)) {
    //         dispatch({
    //             payload: {
    //                 ...state, showPopupModal: {
    //                     flag: true, data: {success: false, message: clientEstimateData.messages.error.emailId}
    //                 }
    //             }
    //         })
    //         return;
    //     }
    //
    //     //     CHECK ADDRESS
    //     if (!clientEstimateData.regex.address.test(state.clientAddress)) {
    //         dispatch({
    //             payload: {
    //                 ...state, showPopupModal: {
    //                     flag: true, data: {success: false, message: clientEstimateData.messages.error.address}
    //                 }
    //             }
    //         })
    //         return;
    //     }
    //
    //     dispatch({
    //         payload: {
    //             ...state, nextScreen
    //         }
    //     })
    // }

    return <main className={styles.main}>
        <div className={styles.wrapper}>
            {
                state.showPopupModal.flag && <PopupModal {...{state, dispatch}}/>
            }

            {
                state.currentScreen === 0 && <UserDetailsScreen {...{state, dispatch}}/>
            }

            {
                state.currentScreen === 1 && <EstimateAddScreen {...{state, dispatch}} />
            }

            {
                state.currentScreen === 2 && <ShowEstimateScreen {...{state, dispatch}} />
            }
        </div>
        {/*{*/}
        {/*    !nextScreen*/}
        {/*        ? <form className={styles.form} id={"form"} onSubmit={handleNextButton}>*/}
        {/*            <UserDetailsScreen*/}
        {/*                state={state}*/}
        {/*                dispatch={dispatch}*/}
        {/*            />*/}

        {/*            <button type="submit" className={styles.next_button}>NEXT</button>*/}
        {/*        </form>*/}

        {/*        : <form className={styles.form} id={"form"} onSubmit={handleAddButton}>*/}
        {/*            <EstimateAddScreen*/}
        {/*                dispatch={dispatch}*/}
        {/*                state={state}*/}
        {/*            />*/}

        {/*            <section className={styles.estimateCardListContainer}>*/}
        {/*                {*/}
        {/*                    state.estimates.length > 0 && <p className={styles.text_header}>ADDED LIST</p>*/}
        {/*                }*/}

        {/*                {*/}
        {/*                    state.estimates.map((estimate, index) => (*/}
        {/*                        <EstimateCard*/}
        {/*                            key={index}*/}
        {/*                            estimate={estimate}*/}
        {/*                            number={index + 1 < 9 ? `0${index + 1}` : `${index + 1}`}*/}
        {/*                            state={state}*/}
        {/*                            dispatch={dispatch}*/}
        {/*                        />*/}
        {/*                    ))*/}
        {/*                }*/}
        {/*            </section>*/}

        {/*            <button type="submit" className={styles.add_button}>+</button>*/}
        {/*            <button type="button" className={styles.request_button} onClick={handleRequestButton}>REQUEST</button>*/}
        {/*        </form>*/}
        {/*}*/}


        <div className={styles.caution}>
            <img className={styles.mobile_view_image} src={mobileViewImage} alt="mobile-view-image"/>
            <p>Kindly open in mobile app... </p>
        </div>
    </main>
}