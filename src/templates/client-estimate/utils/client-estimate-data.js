import {Fragment} from "react";

function DimensionSelectInnerText ({sup, sub}) {
    return <Fragment><sup>{sup}</sup>&frasl;<sub>{sub}</sub></Fragment>
}

const clientEstimateData = {
    dimensions: [
        <Fragment><DimensionSelectInnerText sup={1} sub={2} /></Fragment>,
        <Fragment><DimensionSelectInnerText sup={5} sub={8} /></Fragment>,
        <Fragment><DimensionSelectInnerText sup={3} sub={4} /></Fragment>,
        <Fragment>1</Fragment>,
        <Fragment>1 <DimensionSelectInnerText sup={1} sub={4} /></Fragment>,
        <>1 <DimensionSelectInnerText sup={1} sub={2} /></>,
        <Fragment>2</Fragment>,
        <Fragment>2 <DimensionSelectInnerText sup={1} sub={2} /></Fragment>,
        <Fragment>3</Fragment>,
        <Fragment>12 x 12 (<DimensionSelectInnerText sup={1} sub={2} /> x <DimensionSelectInnerText sup={1} sub={2} />)</Fragment>,
        <Fragment>15 x 15 (<DimensionSelectInnerText sup={5} sub={8} /> x <DimensionSelectInnerText sup={5} sub={8} />)</Fragment>,
        <Fragment>20 x 20 (<DimensionSelectInnerText sup={3} sub={4} /> x <DimensionSelectInnerText sup={3} sub={4} />)</Fragment>,
        <Fragment>25 x 25 (1 x 1)</Fragment>,
        <Fragment>30 x 30 (1 <DimensionSelectInnerText sup={1} sub={4} /> x 1 <DimensionSelectInnerText sup={1} sub={4} />)</Fragment>,
        <Fragment>40 x 40 (1 <DimensionSelectInnerText sup={1} sub={2} /> x 1 <DimensionSelectInnerText sup={1} sub={2} />)</Fragment>,
        <Fragment>50 x 50 (2 x 2)</Fragment>,
        <Fragment>26 x 13 (1 x <DimensionSelectInnerText sup={1} sub={2} />)</Fragment>,
        <Fragment>40 x 20 (1 <DimensionSelectInnerText sup={1} sub={2} /> x <DimensionSelectInnerText sup={3} sub={4} />)</Fragment>,
        <Fragment>50 x 25 (2 x 1)</Fragment>,
        <Fragment>75 x 25 (3 x 1)</Fragment>,
        <Fragment>80 x 40 (3 x 1 <DimensionSelectInnerText sup={1} sub={2} />)</Fragment>,
    ],

    thickness: ["14", "16", "18", "20", "22"],

    valuesPerKg: {
        "14": [0.0, 0.0, 5.2, 7.1, 9.0, 10.9, 14.8, 18.6, 22.4, 0.0, 0.0, 7.1, 9.0, 10.9, 14.8, 18.6, 0.0, 10.9, 13.8, 18.6, 22.4],

        "16": [2.5, 3.3, 4.0, 5.4, 6.9, 0.0, 11.2, 14.1, 16.9, 3.3, 4.0, 5.4, 6.9, 8.3, 11.2, 14.1, 5.4, 8.3, 10.5, 14.1, 16.9],

        "18": [2.1, 2.7, 3.2, 4.4, 5.5, 6.7, 9.0, 11.3, 13.6, 2.7, 3.2, 4.4, 5.5, 6.7, 9.0, 10.3, 4.4, 6.7, 8.4, 11.3, 13.6],

        "20": [1.7, 2.1, 2.6, 0.0, 4.4, 5.3, 7.2, 9.0, 10.8, 2.1, 2.6, 3.5, 4.4, 5.3, 7.2, 9.0, 3.5, 5.3, 6.7, 9.0, 10.8],

        "22": [1.4, 1.8, 2.2, 3.0, 3.7, 4.5, 6.0, 7.6, 9.1, 1.8, 2.2, 3.0, 3.7, 4.5, 6.0, 7.6, 3.0, 4.5, 5.7, 7.6, 0.0]
    },

    regex: {
        quantity : /^[1-9][0-9]{0,5}$/,
        ratePerKg: /^[1-9][0-9]*(\.[0-9]{1,2})?$/,
        name: /^[a-zA-z]{3}[ a-zA-Z]{1,22}$/,
        companyName: /^[a-zA-z]{3}[ .a-zA-Z0-9]{1,47}$/,
        gstNumber: /^[a-zA-z0-9]{15}$/,
        mobileNumber: /^[6-9][0-9]{9}$/,
        address: /^[\w\s-,.@]*$/,
        email: /^[\w\s\-,.]*@[\w\s\-,]+(\.[a-zA-z]+)(\.[a-zA-z]+)?$/,

    },

    token: "DXRF7T8YUIPOKI98765FC86T9708UPO7TYGT",

    messages: {
        success: {
            formRequest: `
                Your form has been submitted successfully. 
                We'll get back to you soon. 
                Thanks for showing interest.
            `
        },

        error: {
            formRequest: `
                Maybe something went wrong from our side. 
                Please try again.'
            `,
            name: `
                Name format is invalid. 
                Field should not be empty.
                Example: John Doe.
            `,
            mobileNumber: `
                Mobile number format is invalid. 
                Field should not be empty.
                Example: 9875654205
            `,
            date: `
                Date fields should not be empty. 
                Valid till date should be greater than prepared on date.
            `,

            companyName: `
                Company name field should not be empty.
                Example: Steel Private Limited.
            `,

            gstNumber: `
                GST number field should not be empty.
                It should be 15 characters long.
                Example: 22AAAAA0000A1Z5
            `,

            emailId: `
                Email field should not be empty.
                It should be a valid email address.
                Example: contact@steel.com
            `,

            address: `
                Address field should not be empty.
                It should be a valid address.
                Example: Abc street, Odisha
            `,

            gradeType: `
                Grade Type field should not be empty.
                Kindly select a grade type.
            `,

            thickness: `
                Thickness field should not be empty.
                Kindly select a thickness.
            `,

            dimension: `
                Dimension field should not be empty.
                Kindly select a dimension.
            `,

            quantity: `
                Quantity field should not be empty.
                Please enter some quantity in numeric format to generate the approx weight value.
            `,

            approxWeight: `
                Approx weight field should not be empty.
                Please enter some quantity in numeric format to generate the approx weight value.
            `,

            ratePerKg: `
                Rate per Kg field should not be empty.
                Please enter rates per kg in numeric value to generate the total price value.
            `,

            totalPrice: `
                Total price field should not be empty.
                Please enter rates per kg in numeric value to generate the total price value.
            `,
        }
    }
}

export default  clientEstimateData;