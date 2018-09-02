export const td = (value) => {
    return `<td>${value}</td>`
};

export const tableHeader = (headings) => {
    return `
    <Table>
        <tr>
            ${headings.map(item => td(item)).join(" ")}
        </tr>
    </Table>
    `
};