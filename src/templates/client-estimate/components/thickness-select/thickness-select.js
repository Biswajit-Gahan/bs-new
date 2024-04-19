import styles from "./thickness-select.module.css";
import clientEstimateData from "../../utils/client-estimate-data";

export default function ThicknessSelect({dispatch, state}) {
    const handleThickness = (e) => {
        dispatch({ payload: { thickness: e.target.value } })
    }

    return (
        <>
            <select id="thicknessSelect" value={state.thickness} className={styles.thickness_select} onChange={handleThickness}>
                <option value="" disabled>Select Thickness</option>
                {
                    clientEstimateData.thickness.map((item, index) => <option key={index} value={item}>{item}</option>)
                }
            </select>
        </>


    )
}