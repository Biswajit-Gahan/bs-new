import styles from "./thickness-select.module.css";
import clientEstimateData from "../../utils/client-estimate-data";

export default function ThicknessSelect({dispatch}) {
    const handleThickness = (e) => {
        dispatch({ payload: { thickness: e.target.value } })
    }

    return (
        <>
            <select id="thicknessSelect" defaultValue="false" className={styles.thickness_select} onChange={handleThickness}>
                <option value="false" disabled>Select thickness</option>
                {
                    clientEstimateData.thickness.map((item, index) => <option key={index} value={item}>{item} Gauge</option>)
                }
            </select>
        </>


    )
}