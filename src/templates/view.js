class ViewTemplates {

    cell = (value="") => {
        return `<td>${value}</td>`
    }

    tableHeaderContainer = (data = "") => {
        return `
            <tr>
                ${data}
            </tr>
        `
    }

    tableContainer = (data = "") => {
        return `
            <table>
                ${data}
            </table>
        `
    }

    tableRowContainer = (data = "") => {
        return `
            <tr>
                ${data}
            </tr>
        `
    }
}

export default ViewTemplates;