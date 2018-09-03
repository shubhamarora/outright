// default as empty sting to handle blank cell case.
export const cell = (value="") => {
    return `<td>${value}</td>`
};

export const tableHeaderContainer = (data) => {
    return `
        <tr>
            ${data}
        </tr>
    `
};

export const tableContainer = (data) => {
    return `
        <table>
            ${data}
        </table>
    `
}

export const tableRowContainer = (data) => {
    return `
        <tr>
            ${data}
        </tr>
    `
};