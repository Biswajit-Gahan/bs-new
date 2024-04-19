import styles from "./estimate-add-screen.module.css";
import {Fragment, useEffect} from "react";
import ThicknessSelect from "../thickness-select/thickness-select";
import DimensionSelect from "../dimension-select/dimention-select";
import clientEstimateData from "../../utils/client-estimate-data";

export default function EstimateAddScreen({dispatch, state}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleGradeSelect(event) {
        dispatch({
            payload: {
                [event.target.id]: event.target.value,
            }
        })
    }

    function handleQuantity(event) {
        if (clientEstimateData.regex.quantity.test(event.target.value)) {
            dispatch({payload: {quantity: parseFloat(event.target.value)}});
            return;
        }
        dispatch({payload: {quantity: event.target.value.slice(0, event.target.value.length - 1)}});
    }

    function handleRatePerKg(event) {
        if (clientEstimateData.regex.isOnlyNumberAndPoint.test(event.target.value)) {
            dispatch({payload: {ratePerKg: event.target.value}});
            return;
        }

        dispatch({payload: {ratePerKg: event.target.value.slice(0, event.target.value.length - 1)}});
    }

    return <Fragment>
        <span className={styles.text_header}>MATERIALS SPECIFICATIONS</span>
        <p className={styles.label}>Specify Grade Type</p>
        <div className={styles.select_container}>
            <select id="gradeSelect" onChange={handleGradeSelect} value={state.gradeSelect}
                    className={styles.grade_select}>
                <option value="" disabled>Select Grade Type</option>
                <option value="304">304</option>
            </select>
        </div>

        {/* Select Thickness */}
        <p className={styles.label}>Specify Thickness (GAUGE)</p>
        <div className={styles.select_container}>
            <ThicknessSelect dispatch={dispatch} state={state}/>
        </div>

        {/* select dimension  */}
        <p className={styles.label}>Specify Dimension</p>
        <div className={styles.select_container}>
            <DimensionSelect dispatch={dispatch} state={state}/>
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
    </Fragment>
}