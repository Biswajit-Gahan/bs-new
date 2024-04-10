import styles from "./dimension-select.module.css";
import clientEstimateData from "../../utils/client-estimate-data";

export default function DimensionSelect({dispatch}) {
    const handleDimension = (e) => {
        dispatch({ payload: { dimensionIndex: e.target.value } })
    }

    return (
        <select id="dimensionSelect" defaultValue="false" className={styles.dimension_select} onChange={handleDimension}>
            <option value="false" disabled>Select dimension</option>
            {
                clientEstimateData.dimensions.map((item, index) => <option key={index} value={index}>{item}</option>)
            }
        </select>
    )
}