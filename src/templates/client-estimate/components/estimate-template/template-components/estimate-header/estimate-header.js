import {View, Image, StyleSheet, Text} from "@react-pdf/renderer";
import bsLogo from "../../../../../../assets/images/bs-logo-flat.png";

export default function EstimateHeader({state}) {
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
        },

        bsLogo: {
            width: 110,
        }
    })

    return <View style={styles.container}>
        <Image style={styles.bsLogo} src={bsLogo} />
    </View>
}