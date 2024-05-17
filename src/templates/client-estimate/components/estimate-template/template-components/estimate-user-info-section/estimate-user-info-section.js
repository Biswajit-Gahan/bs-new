import {StyleSheet, Text, View} from "@react-pdf/renderer";

export default function EstimateUserInfoSection({state}) {
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            marginTop: 20,
            flexDirection: "row",
            justifyContent: 'space-between',
        },

        mainWrapper: {
            gap: 10,
        },

        wrapper: {
            gap: 3,
        },

        heading: {
            textDecoration: "underline"
        }
    })

    return <View style={styles.container}>
        <View style={styles.mainWrapper}>
            <View style={styles.wrapper}>
                <Text>Prepared By: {state.agentName}</Text>
                <Text>Mobile Number: +91 {state.agentNumber}</Text>
                <Text>Prepared On: {state.agentPreparedDate}</Text>
                <Text>Valid Till: {state.agentValidTillDate}</Text>
            </View>

            <View style={styles.wrapper}>
                <Text style={styles.heading}>Bill To:</Text>
                <Text>Name:  {state.clientName}</Text>
                <Text>Company Name:  {state.clientCompanyName}</Text>
                <Text>Address:  {state.clientAddress}</Text>
                <Text>Mobile Number: +91  {state.clientPhoneNumber}</Text>
                <Text>Email:  {state.clientEmailId}</Text>
            </View>
        </View>
        <View style={styles.wrapper}>
            <Text style={styles.heading}>Bank Details:</Text>
            <Text>Account Number: 78965422250</Text>
            <Text>IFSC Code: 78965422250</Text>
            <Text>India Bank, Nayapalli</Text>
        </View>
    </View>
}