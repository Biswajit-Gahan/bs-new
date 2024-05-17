import {Document, Page, StyleSheet} from "@react-pdf/renderer";
import EstimateHeader from "./template-components/estimate-header/estimate-header";
import EstimateUserInfoSection from "./template-components/estimate-user-info-section/estimate-user-info-section";
import EstimateTable from "./template-components/estimate-table/estimate-table";

export default function EstimateTemplate({state}) {
    const styles = StyleSheet.create({
        page: {
            fontFamily: "Times-Roman",
            fontSize: 9,
            padding: 10,
        }
    });

    return <Document>
        <Page size={"A4"} style={styles.page}>
            <EstimateHeader state={state} />
            <EstimateUserInfoSection state={state} />
            <EstimateTable state={state} />
        </Page>
    </Document>
}