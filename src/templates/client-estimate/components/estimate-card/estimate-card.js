import styles from "./estimate-card.module.css";

export default function EstimateCard({number, estimate, state, dispatch}) {
    function handleDeleteButton(id) {
        const newEstimates = state.estimates.filter((item) => item.id !== id);
        dispatch({
            payload: {
                estimates: newEstimates,
            }
        })
    }
    return <section className={styles.estimateCardContainer}>
        <div className={styles.contentContainer}>
            <span className={styles.contentText}>Grade: {estimate.grade}</span>
            <span className={styles.contentText}>Thickness: {estimate.thickness} G</span>
            <span className={styles.contentText}>Dimension: {estimate.dimension}</span>
            <span className={styles.contentText}>Quantity: {estimate.quantity} PCS</span>
            <span className={styles.contentText}>Approximate Weight: {estimate.approxWeight} KG</span>
            <span className={styles.contentText}>Rate/KG: ₹ {estimate.ratePerKg}</span>
            <span className={styles.contentText}>Total Price: ₹ {estimate.totalPrice}</span>
            <button type={"button"} onClick={() => handleDeleteButton(estimate.id)} className={styles.deleteButton}>Delete</button>
        </div>
        <div className={styles.numberContainer}>
            <span className={styles.numberText}>{number}</span>
        </div>
    </section>
}