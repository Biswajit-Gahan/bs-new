import styles from "./popup-modal.module.css";
import successImage from "../../../../assets/images/success.png";
import errorImage from "../../../../assets/images/error.png";

export default function PopupModal({data: {flag, message}, setShowPopup}) {
    function handleOkButton() {
        setShowPopup(() => ({flag: false, data: {flag: false, message: ""}}));
    }
    return <section className={styles.popupContainer}>
        <div className={styles.popupWrapper}>
            <img className={styles.image} src={flag ? successImage : errorImage} alt="success image" />
            <span className={styles.text}>{message}</span>
            <button className={`${styles.button} ${flag ? styles.greenButton : styles.redButton}`} type={"button"} onClick={handleOkButton}>OK</button>
        </div>
    </section>
}