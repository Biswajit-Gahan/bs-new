import styles from "./user-details-screen.module.css";
import {Fragment} from "react";
import clientEstimateData from "../../utils/client-estimate-data";

export default function UserDetailsScreen({state, dispatch}) {
    function handleInputFields(event) {
        dispatch({
            payload: {
                [event.target.id]: event.target.value
            }
        })
    }

    function handleNextButton(event, nextScreen) {
        event.preventDefault();

        //     CHECK NAME
        if (!clientEstimateData.regex.name.test(state.agentName) || !clientEstimateData.regex.name.test(state.clientName)) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.name}
                    }
                }
            })
            return;
        }

        //     CHECK MOBILE NUMBER
        if (!clientEstimateData.regex.mobileNumber.test(state.agentNumber) || !clientEstimateData.regex.mobileNumber.test(state.clientPhoneNumber)) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.mobileNumber}
                    }
                }
            })
            return;
        }

        //     CHECK DATES
        if (!state.agentPreparedDate || !state.agentValidTillDate) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.date}
                    }
                }
            })
            return;
        }

        //     COMPARE DATES
        const dateOne = new Date(state.agentPreparedDate);
        const dateTwo = new Date(state.agentValidTillDate);
        if (dateOne > dateTwo) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.date}
                    }
                }
            })
            return;
        }

        //     CHECK COMPANY NAME
        if (!clientEstimateData.regex.companyName.test(state.clientCompanyName)) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.companyName}
                    }
                }
            })
            return;
        }

        //     CHECK GSTIN
        if (!clientEstimateData.regex.gstNumber.test(state.clientGstinNumber)) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.gstNumber}
                    }
                }
            })
            return;
        }

        //     CHECK EMAIL ID
        if (!clientEstimateData.regex.email.test(state.clientEmailId)) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.emailId}
                    }
                }
            })
            return;
        }

        //     CHECK ADDRESS
        if (!clientEstimateData.regex.address.test(state.clientAddress)) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.address}
                    }
                }
            })
            return;
        }

        dispatch({
            payload: {
                ...state, currentScreen: nextScreen
            }
        })
    }

    return <form className={styles.wrapper} onSubmit={(event) => handleNextButton(event, 1)}>
            <span className={styles.text_header}>AGENT DETAILS</span>
            <p className={styles.label}>Prepared By</p>
            <input readOnly type="text" id="agentName" placeholder="Prepared by" value={state.agentName}
                   className={styles.input_field_design}/>
            <p className={styles.label}>Agent Mobile Number</p>
            <input readOnly type="text" id="agentNumber" placeholder="Mobile number" value={state.agentNumber}
                   className={styles.input_field_design}/>
            <p className={styles.label}>Estimate Prepared On</p>
            <input required type="date" id="agentPreparedDate" value={state.agentPreparedDate}
                   className={styles.input_field_design} onChange={handleInputFields}/>
            <p className={styles.label}>Estimate Valid Till</p>
            <input required type="date" id="agentValidTillDate"
                   className={styles.input_field_design} onChange={handleInputFields} value={state.agentValidTillDate}/>

            <span className={styles.text_header}>CLIENT DETAILS</span>
            <p className={styles.label}>Client Name</p>
            <input required type="text" id="clientName" placeholder="Client name"
                   className={styles.input_field_design} onInput={handleInputFields} value={state.clientName}/>
            <p className={styles.label}>Client Company Name</p>
            <input required type="text" id="clientCompanyName" placeholder="Client company name"
                   className={styles.input_field_design} onInput={handleInputFields} value={state.clientCompanyName}/>
            <p className={styles.label}>Client GSTIN</p>
            <input required type="text" id="clientGstinNumber" placeholder="GSTIN"
                   className={styles.input_field_design} onInput={handleInputFields} value={state.clientGstinNumber}/>
            <p className={styles.label}>Client Mobile Number</p>
            <input required type="text" id="clientPhoneNumber" placeholder="Client mobile number"
                   className={styles.input_field_design} onInput={handleInputFields} value={state.clientPhoneNumber}/>
            <p className={styles.label}>Client Mail ID</p>
            <input required type="email" id="clientEmailId" placeholder="Client email id"
                   className={styles.input_field_design} onInput={handleInputFields} value={state.clientEmailId}/>
            <p className={styles.label}>Client Address</p>
            <textarea required id="clientAddress" rows="7" placeholder="Address"
                      className={styles.text_field_area_design} onInput={handleInputFields}
                      value={state.clientAddress}/>
            <button type="submit" className={styles.next_button}>NEXT</button>
        </form>
}