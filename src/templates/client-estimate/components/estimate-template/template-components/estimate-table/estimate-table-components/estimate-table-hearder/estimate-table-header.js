import {StyleSheet, Text, View} from "@react-pdf/renderer";
import estimateTemplateConfig from "../../../../estimate-template-config";

export default function EstimateTableHeader() {
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            backgroundColor: "#1e4198",
            color: "#fff",
            padding: 5,
        }
    });

    const boxSizes = estimateTemplateConfig.tableBoxSize;

    return <View style={styles.container}>
        <Text style={{width: boxSizes[0]}}>Sl. No.</Text>
        <Text style={{width: boxSizes[1]}}>Description</Text>
        <Text style={{width: boxSizes[2]}}>Qty (Pcs)</Text>
        <Text style={{width: boxSizes[3]}}>Weight</Text>
        <Text style={{width: boxSizes[4]}}>Price (/Kg)</Text>
        <Text style={{width: boxSizes[5]}}>Total</Text>
    </View>
}