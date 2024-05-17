import styles from "./estimate-add-screen.module.css";
import {Fragment, useEffect} from "react";
import ThicknessSelect from "../thickness-select/thickness-select";
import DimensionSelect from "../dimension-select/dimention-select";
import clientEstimateData from "../../utils/client-estimate-data";
import EstimateCard from "../estimate-card/estimate-card";

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

    function getExactValue(value, valuesAfterPoint) {
        const splitValues = `${value}`.split(".")

        if (splitValues.length > 1) {
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

    function handleAddButton(event) {
        event.preventDefault();

        const [agentName, agentMobileNumber, preparedOnDate, validTillDate, clientName, clientCompanyName, clientGstin, clientMobileNumber, clientEmailId, clientAddress, gradeType, thickness, dimension, quantity, approxWeight, ratePerKg, totalPrice] = event.target;

        //     CHECK GRADE TYPE
        if (!state.gradeSelect) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.gradeType}
                    }
                }
            })
            return;
        }

        //     CHECK THICKNESS
        if (!state.thickness) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.thickness}
                    }
                }
            })

            return;
        }

        //     CHECK DIMENSION
        if (!state.dimensionIndex) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.dimension}
                    }
                }
            })
            return;
        }

        //     CHECK QUANTITY
        if (!clientEstimateData.regex.quantity.test(state.quantity)) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.quantity}
                    }
                }
            })
            return;
        }

        //     CHECK APPROX WEIGHT
        if (state.approxWeight === "") {
            console.log(state.approxWeight)
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.approxWeight}
                    }
                }
            })
            return;
        }

        //     CHECK RATE PER KG
        if (!clientEstimateData.regex.ratePerKg.test(state.ratePerKg)) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.ratePerKg}
                    }
                }
            })
            return;
        }

        //     CHECK TOTAL PRICE
        if (state.totalPrice === "") {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.totalPrice}
                    }
                }
            })
            return;
        }

        if (state.estimates.length === 20) {
            dispatch({
                payload: {
                    ...state, showPopupModal: {
                        flag: true, data: {success: false, message: clientEstimateData.messages.error.estimatesLength}
                    }
                }
            })
            return;
        }

        const estimateData = {
            grade: state.gradeSelect,
            thickness: state.thickness,
            dimension: state.dimensionInnerText,
            quantity: state.quantity,
            approxWeight: state.approxWeight,
            ratePerKg: state.ratePerKg,
            totalPrice: state.totalPrice,
            id: Date.now(),
        }

        dispatch({
            payload: {
                estimates: [...state.estimates, estimateData],
                gradeSelect: "",
                thickness: "",
                dimensionIndex: "",
                dimensionInnerText: "",
                quantity: "",
                approxWeight: "",
                ratePerKg: "",
                totalPrice: "",
            }
        })
    }

    function handleShowEstimateButton() {
        if (state.estimates.length === 0) {
            dispatch({
                payload: {
                    showPopupModal: {
                        flag: true,
                        data: {
                            success: false,
                            message: "Please add some estimates to view or download."
                        }
                    },
                }
            })
            return;
        }
        dispatch({
            payload: {
                currentScreen: 2
            }
        });
    }

    useEffect(() => {
        if (state.dimensionIndex && state.thickness) {
            const gradeValue = getGradeValue(state.dimensionIndex, state.thickness);
            dispatch({payload: {gradeValue}});

            if (clientEstimateData.regex.quantity.test(state.quantity)) {
                const approxWeight = getApproxWeight(state.quantity, gradeValue);
                dispatch({payload: {approxWeight}});

                if (clientEstimateData.regex.ratePerKg.test(state.ratePerKg)) {
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

    return <form className={styles.wrapper} id={"form"} onSubmit={handleAddButton}>
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

        <section className={styles.estimateCardListContainer}>
            {
                state.estimates.length > 0 && <p className={styles.text_header}>ADDED LIST</p>
            }

            {
                state.estimates.map((estimate, index) => (
                    <EstimateCard
                        key={index}
                        estimate={estimate}
                        number={index + 1 < 9 ? `0${index + 1}` : `${index + 1}`}
                        state={state}
                        dispatch={dispatch}
                    />
                ))
            }
        </section>

        <button type="submit" className={styles.add_button}>+</button>
        <button type="button" className={styles.request_button} onClick={handleShowEstimateButton}>SHOW ESTIMATE
        </button>
    </form>
}