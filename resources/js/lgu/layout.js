export function slacksSkirt_poloBlouse_table_header(productHeader) {
    console.log(productHeader.product1);
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

export function dataInsertionLayout(product, {data}) {
    if(product == 'slacks_skirt_size' || product == 'polo_blouse_size') {
        console.log(data.total);
        document.querySelector('.overall-layout-table').innerHTML = `
            <thead>
                ${slacksSkirt_poloBlouse_table_header({product1: data.productHeader.product1, product2: data.productHeader.product2})}
            </thead>
            <tbody class="student-table-body overall-layout-table-body">
                ${slacksSkirt_poloBlouse_table_body(data.sizeTotals)}
            </tbody>
        `;

        document.querySelector('.overall-table-total').innerHTML = `
            <thead>
                <tr>
                    <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Total</th>
                    <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${data.productHeader.product1}</th>
                    <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${data.productHeader.product2}</th>
                </tr>
            </thead>
            <tbody class="student-table-body">
                <tr>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${data.studentTotal.boysOverallTotal + data.studentTotal.girlsOverallTotal}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${data.studentTotal.boysOverallTotal}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${data.studentTotal.girlsOverallTotal}</td>
                </tr>
            </tbody>
        `;
    }

    if(product == 't_shirt_size' || product == 'pants_size') {
        console.log(data);
        document.querySelector('.overall-layout-table').innerHTML = `
            <thead>
                ${shirt_and_pants_table_header(data.productHeader)}
            </thead>
            <tbody class="student-table-body overall-layout-table-body">
                ${shirt_and_pants_table_body(data.sizeTotals)}
            </tbody>
        `;

        document.querySelector('.overall-table-total').innerHTML = `
            <thead>
                ${shirt_and_pants_table_header(data.productHeader)}
            </thead>
            <tbody class="student-table-body">
                <tr>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Total</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${data.studentTotal.boysOverallTotal + data.studentTotal.girlsOverallTotal}</td>
                </tr>
            </tbody>
        `;
    }

    if(product == 'shoe_size') {
        document.querySelector('.overall-layout-table').innerHTML = `
            <thead>
                ${shoe_size_table_header()}
            </thead>
            <tbody class="student-table-body overall-layout-table-body">
                ${shoe_size_table_body(data.shoeSize)}
            </tbody>
        `;
        document.querySelector('.overall-table-total').innerHTML = `
            <thead>
                ${shoe_size_table_header()}
            </thead>
            <tbody class="student-table-body">
                <tr>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${data.totalSize}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${data.totalShoes} PCS</td>
                </tr>
            </tbody>
        `;
    }

    if(product == 'school_supplies') {
        console.log(data.schoolSupplies);
        document.querySelector('.overall-layout-table').innerHTML = `
            <thead>
                ${school_supplies_table_header()}
            </thead>
            <tbody class="student-table-body overall-layout-table-body">
                ${school_supplies_table_body(data)}
            </tbody>
        `;
        document.querySelector('.overall-table-total').innerHTML = `
            <thead>
                <tr>
                    <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Gender</th>
                    <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">No</th>
                    <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Yes</th>
                </tr> 
            </thead>
            <tbody class="student-table-body">
                <tr>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Total</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${data.male.no + data.female.no}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${data.male.yes + data.female.yes} PCS</td>
                </tr>
            </tbody>
        `;
    }
}

export function fetchStudentData(data) {
    let hasHeader = false;
    let studentCount = 0;
    for(let i = 0; i < data.length; i++) {
        
        const tableBody = document.querySelector(`.${data[i].section}-student-table-body`);
        console.log(tableBody);
        if(!hasHeader) {
            let dataHeader = document.createElement('tr');
            dataHeader.innerHTML = `
                <td style="text-align: center; font-size: 12px;"></td>
                <td style="text-align: center; font-size: 12px; color: red;">Boys</td>
                <td style="text-align: center; font-size: 12px;"></td>
            `;

            tableBody.appendChild(dataHeader);
            hasHeader = true;
        }

        studentCount++;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="text-align: center; font-size: 12px;">${studentCount}</td>
            <td style="text-align: center; font-size: 12px;">${data[i].first_name} ${data[i].last_name}</td>
            <td style="text-align: center; font-size: 12px;">${data[i].slacks_skirt_size}</td>
        `;
        
        tableBody.appendChild(row);
    }
}
