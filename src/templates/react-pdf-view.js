import {PDFViewer} from "@react-pdf/renderer";
import EstimateTemplate from "./client-estimate/components/estimate-template/estimate-template";

export default function ReactPdfView() {
    return <PDFViewer width={"1000"} height={"600"}>
        <EstimateTemplate />
    </PDFViewer>
}