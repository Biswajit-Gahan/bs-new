import {View, StyleSheet} from "@react-pdf/renderer";
import EstimateTableHeader from "./estimate-table-components/estimate-table-hearder/estimate-table-header";
import EstimateTableRow from "./estimate-table-components/estimate-table-row/estimate-table-row";
import estimateTemplateConfig from "../../estimate-template-config";
import EstimateTableFooter from "./estimate-table-components/estimate-table-footer/estimate-table-footer";

export default function EstimateTable({state}) {
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            marginTop: 10,
        }
    })

    const tableData = [];

    const totalItems = state.estimates.length;
    let totalQuantity = 0;
    let totalApproxWeight = 0;
    let totalPrice = 0;

    for(let i = 0; i < estimateTemplateConfig.tableRows; i++) {
        if(!state.estimates[i]) {
            tableData.push({
                slNo: "_",
                description: "_",
                quantity: "_",
                approxWeight: "_",
                ratePerKg: "_",
                totalPrice: "_",
            })
        } else {
            totalQuantity += state.estimates[i].quantity;
            totalApproxWeight += state.estimates[i].approxWeight;
            totalPrice += state.estimates[i].totalPrice;

            tableData.push({
                slNo: i + 1,
                description: `G: ${state.estimates[i].grade}, D: ${state.estimates[i].dimension}, T: ${state.estimates[i].thickness}G`,
                quantity: state.estimates[i].quantity,
                approxWeight: state.estimates[i].approxWeight,
                ratePerKg: `Rs. ${state.estimates[i].ratePerKg}`,
                totalPrice: `Rs. ${state.estimates[i].totalPrice}`,
            })
        }
    }

    return <View style={styles.container}>
        <EstimateTableHeader />
        <View>
            {
                tableData.map((row, index) => (<EstimateTableRow data={row} key={index} />))
            }
        </View>
        <EstimateTableFooter data={{
            slNo: `Total: ${state.estimates.length}`,
            description: "",
            quantity: `Total: ${totalQuantity}`,
            approxWeight: `Total: ${totalApproxWeight.toFixed(2)}`,
            ratePerKg: "",
            totalPrice: `Total: ${totalPrice.toFixed(2)}`,
        }} />
    </View>
}