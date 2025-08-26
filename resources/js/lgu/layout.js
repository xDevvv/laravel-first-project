export function slacksSkirt_poloBlouse_table_header(productHeader) {
    return `
        <tr>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Size</th>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${productHeader.product1}</th>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${productHeader.product2}</th>
        </tr>
    `;
}

export function slacksSkirt_poloBlouse_table_body(studentData) {
    return `
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">EXTRA SMALL</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.extraSmall} PCS</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[1].size.extraSmall} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">SMALL</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.small} PCS</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[1].size.small} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">MEDIUM</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.medium} PCS</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[1].size.medium} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">LARGE</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.large} PCS</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[1].size.large} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">EXTRA LARGE</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.extraLarge} PCS</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[1].size.extraLarge} PCS</td>
        </tr><tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">DOUBLE XL</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.doubleXl} PCS</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[1].size.doubleXl} PCS</td>
        </tr>
    
    `;
}

export function shirt_and_pants_table_header(productHeader) {
    return `
        <tr>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Size</th>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col" class="product-header">${productHeader}</th>
        </tr>
    `;
}

export function shirt_and_pants_table_body(studentData) {
    return `
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">EXTRA SMALL</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.extraSmall + studentData[1].size.extraSmall} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">SMALL</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.small + studentData[1].size.small} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">MEDIUM</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.medium + studentData[1].size.medium} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">LARGE</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.large + studentData[1].size.large} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">EXTRA LARGE</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.extraLarge + studentData[1].size.extraLarge} PCS</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">DOUBLE XL</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData[0].size.doubleXl + studentData[1].size.doubleXl} PCS</td>
        </tr>
    `;
}

export function shoe_size_table_header() {
    return `
        <tr>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Size</th>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Total</th>
        </tr>
    `;
}

export function shoe_size_table_body(studentData) {
    let row = '';
    studentData.forEach((value) => {
        row += `
            <tr>
                <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${value.size}</td>
                <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${value.total}</td>
            </tr>
        `;
    })
    return row;
}

export function school_supplies_table_header() {
    return `
        <tr>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Gender</th>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">No</th>
            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Yes</th>
        </tr> 
    `;
}

export function school_supplies_table_body(studentData) {
    console.log(studentData);
    return `
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Male</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData.male.no}</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData.male.yes}</td>
        </tr>
        <tr>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Female</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData.female.no}</td>
            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${studentData.female.yes}</td>
        </tr>
    `;
}

