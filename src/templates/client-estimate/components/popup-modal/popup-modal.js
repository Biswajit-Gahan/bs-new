import styles from "./popup-modal.module.css";
import successImage from "../../../../assets/images/success.png";
import errorImage from "../../../../assets/images/error.png";
import {useSearchParams} from "react-router-dom";

export default function PopupModal({data: {flag, message}, setShowPopup}) {
    const [searchParams, setSearchParams] = useSearchParams();
    function handleOkButton() {
        setShowPopup(() => ({flag: false, data: {flag: false, message: ""}}));
        const name = searchParams.get("name");
        const mobile = searchParams.get("mobile");
        const token = searchParams.get("token");
        const success = "true";
        setSearchParams({name, mobile, token, success});
    }
    return <section className={styles.popupContainer}>
        <div className={styles.popupWrapper}>
            <img className={styles.image} src={flag ? successImage : errorImage} alt="success image" />
            <span className={styles.text}>{message}</span>
            <button className={`${styles.button} ${flag ? styles.greenButton : styles.redButton}`} type={"button"} onClick={handleOkButton}>OK</button>
        </div>
    </section>
}