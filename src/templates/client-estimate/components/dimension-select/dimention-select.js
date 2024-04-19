import styles from "./dimension-select.module.css";
import clientEstimateData from "../../utils/client-estimate-data";

export default function DimensionSelect({dispatch, state}) {
    function getDimensionValue(index) {
        return clientEstimateData.dimensions[index]
    }

    function handleDimension (event)  {
        dispatch({
            payload: {
                dimensionIndex: event.target.value,
                dimensionInnerText: getDimensionValue(event.target.value),
            }
        })
    }

    return (
        <select id="dimensionSelect" value={state.dimensionIndex} className={styles.dimension_select} onChange={handleDimension}>
            <option value="" disabled>Select dimension</option>
            {
                clientEstimateData.dimensions.map((item, index) => <option key={index} value={index}>{item}</option>)
            }
        </select>
    )
}