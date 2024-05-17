import {StyleSheet, Text, View} from "@react-pdf/renderer";
import estimateTemplateConfig from "../../../../estimate-template-config";

export default function EstimateTableRow({data}) {
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            padding: 5,
        }
    })

    const boxSizes = estimateTemplateConfig.tableBoxSize;

    return <View style={styles.container}>
        <Text style={{width: boxSizes[0]}}>{data.slNo}</Text>
        <Text style={{width: boxSizes[1]}}>{data.description}</Text>
        <Text style={{width: boxSizes[2]}}>{data.quantity}</Text>
        <Text style={{width: boxSizes[3]}}>{data.approxWeight}</Text>
        <Text style={{width: boxSizes[4]}}>{data.ratePerKg}</Text>
        <Text style={{width: boxSizes[5]}}>{data.totalPrice}</Text>
    </View>
}