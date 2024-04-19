import styles from "./user-details-screen.module.css";
import {Fragment} from "react";

export default function UserDetailsScreen({state, dispatch}) {
    function handleInputFields(event) {
        dispatch({
            payload: {
                [event.target.id]: event.target.value
            }
        })
    }

    return <Fragment>
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
                  className={styles.text_field_area_design} onInput={handleInputFields} value={state.clientAddress}/>
    </Fragment>
}