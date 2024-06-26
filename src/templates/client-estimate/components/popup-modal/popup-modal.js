import styles from "./popup-modal.module.css";
import successImage from "../../../../assets/images/success.png";
import errorImage from "../../../../assets/images/error.png";
import {useNavigate, useSearchParams} from "react-router-dom";

// export default function PopupModal({data: {flag, message}, setShowPopup}) {
export default function PopupModal({state, dispatch}) {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const navigate = useNavigate();

    // function handleOkButton() {
    //     setShowPopup(() => ({flag: false, data: {flag: false, message: ""}}));
    //     if(flag) {
    //         const name = searchParams.get("name");
    //         const mobile = searchParams.get("mobile");
    //         const token = searchParams.get("token");
    //         const success = "true";
    //         setSearchParams({name, mobile, token, success});
    //         navigate(0);
    //     }
    // }

    function handleOkButton(){
        dispatch({
            payload: {
                ...state, showPopupModal: {
                    flag: false,
                    data: {
                        success: false,
                        message: "",
                    }
                }
            }
        })
    }

    return <section className={styles.popupContainer}>
        <div className={styles.popupWrapper}>
            <img className={styles.image} src={state.showPopupModal.data.success ? successImage : errorImage} alt="success image" />
            <span className={styles.text}>{state.showPopupModal.data.message}</span>
            <button className={`${styles.button} ${state.showPopupModal.data.success ? styles.greenButton : styles.redButton}`} type={"button"} onClick={handleOkButton}>OK</button>
        </div>
    </section>
}