import styles from "./show-estimate-screen.module.css";
import editIcon from "../../../../assets/images/edit_icon.png";
import {useEffect, useState} from "react";
import {BlobProvider, PDFDownloadLink} from "@react-pdf/renderer";
import EstimateTemplate from "../estimate-template/estimate-template";

export default function ShowEstimateScreen({state, dispatch}) {
    const [totals, setTotals] = useState({
        items: 0,
        quantity: 0,
        approxWeight: 0,
        price: 0,
    });

    function handleEditButton() {
        dispatch({
            payload: {
                currentScreen: 1
            }
        })
    }

    useEffect(() => {
        const totalItems = state.estimates.length;
        let totalQuantity = 0;
        let totalApproxWeight = 0;
        let totalPrice = 0;

        state.estimates.forEach((item, index) => {
            totalQuantity += item.quantity;
            totalApproxWeight += item.approxWeight;
            totalPrice += item.totalPrice;
        });

        setTotals({
            items: totalItems,
            quantity: totalQuantity,
            approxWeight: totalApproxWeight.toFixed(2),
            price: totalPrice.toFixed(2),
        });
    }, []);

    function handleDownloadButton(data) {
        // console.log("Data: ", data)
        const file = new File([data.blob], `estimate-${Date.now()}.pdf`, {type: data.blob.type});
        // console.log("File: ", file)
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener("load", () => {
            const response = fileReader.result;
            console.log("FileReader Result: ", response)
            const link = document.createElement("a");
            link.href = `${response}`;
            link.download = `estimate-${Date.now()}.pdf`;
            link.click();
        });
        // const link = document.createElement("a");
        // link.href = URL.createObjectURL(data.blob);
        // link.download = "estimate.pdf";
        // link.click();
    }

    return <div className={styles.mainContainer}>
        <h3 className={styles.heading}>List of all estimates.</h3>
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>ITEM</th>
                    <th>DESCRIPTION</th>
                    <th>QUANTITY (IN PCS)</th>
                    <th>APPROX WEIGHT</th>
                    <th>PRICE (PER KG)</th>
                    <th>TOTAL</th>
                </tr>
                </thead>

                <tbody>
                {
                    state.estimates.map((estimate, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{`G: ${estimate.grade}, D: ${estimate.dimension}, T: ${estimate.thickness}G`}</td>
                            <td>{`${estimate.quantity} Pcs`}</td>
                            <td>{`${estimate.approxWeight} Kg`}</td>
                            <td>{`Rs. ${estimate.ratePerKg}`}</td>
                            <td>{`Rs. ${estimate.totalPrice}`}</td>
                        </tr>
                    ))
                }

                <tr>
                    <td>Total Items: {totals.items}</td>
                    <td>_</td>
                    <td>Total Quantity: {totals.quantity} Pcs</td>
                    <td>Total Approx Weight: {totals.approxWeight} Kg</td>
                    <td>_</td>
                    <td>Total Price: Rs. {totals.price}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            <button onClick={handleEditButton} className={styles.back_button} type="button">
                <img className={styles.editIcon} src={editIcon} alt="edit"/>
            </button>
            {/*<PDFDownloadLink document={<EstimateTemplate state={state} />} fileName={`estimate-${Date.now()}.pdf`}>*/}
            {/*    /!*<button className={styles.download_button} type="button">DOWNLOAD</button>*!/*/}
            {/*    {({blob, url, loading, error}) => (*/}
            {/*        loading ? "LOADING..." : "DOWNLOAD"*/}
            {/*    )}*/}
            {/*</PDFDownloadLink>*/}

            <BlobProvider document={<EstimateTemplate state={state}/>}>
                {
                    (data) => (
                        <button className={styles.download_button} type="button" onClick={() => handleDownloadButton(data)}>DOWNLOAD</button>
                    )
                }
            </BlobProvider>
        </div>
    </div>
}