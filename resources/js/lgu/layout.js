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

export function fetchStudentData(data, product) {    
    let hasHeader = false;
    let studentCount = 0;
    for(let i = 0; i < data.length; i++) {
        
        const tableBody = document.querySelector(`.${data[i].section}-student-table-body`);
        if(!hasHeader) {
            let dataHeader = document.createElement('tr');
            dataHeader.innerHTML = `
                <td style="text-align: center; font-size: 12px;"></td>
                <td style="text-align: center; font-size: 12px; color: red;">${data[i].gender == 'Male' ? 'Boys' : 'Girls'}</td>
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
            
        `;

        if(product == 'slacks_skirt_size') row.insertAdjacentHTML('beforeend', `<td style="text-align: center; font-size: 12px;">${data[i].slacks_skirt_size}</td>`);
        if(product == 'polo_blouse_size') row.insertAdjacentHTML('beforeend', `<td style="text-align: center; font-size: 12px;">${data[i].polo_blouse_size}</td>`);
        if(product == 'pants_size') row.insertAdjacentHTML('beforeend', `<td style="text-align: center; font-size: 12px;">${data[i].pants_size}</td>`);
        if(product == 't_shirt_size') row.insertAdjacentHTML('beforeend', `<td style="text-align: center; font-size: 12px;">${data[i].t_shirt_size}</td>`);
        if(product == 'shoe_size') row.insertAdjacentHTML('beforeend', `<td style="text-align: center; font-size: 12px;">${data[i].shoe_size}</td>`);
        if(product == 'school_supplies') row.insertAdjacentHTML('beforeend', `<td style="text-align: center; font-size: 12px;">${data[i].school_supplies}</td>`);
        
        tableBody.appendChild(row);
    }
}

export function fetchPerSectionLayout(container, {data, productHeader}) {

    let hasTwoProductHeader = (productHeader.product1 && productHeader.product2) ? true : false;
    container.insertAdjacentHTML('beforeend', `
        <div class="container file my-3">
            <div class="row p-3 file-main-header">
                <div class="col d-flex justify-content-start lgu-second-modal-header" style="font-size: 14px; font-weight: bold;">Class: Grade 1 - ${data.section}</div>
                <div class="col d-flex justify-content-end lgu-second-modal-header" style="font-size: 14px; font-weight: bold;">Adviser ID: ${data.teacher_id}</div>
            </div>
            <div class="row px-3">
                <div class="col">
                    <table class="table table-bordered border-black">
                        <thead>
                            <tr>
                                <th style="text-align: center; font-size: 12px;" scope="col"></th>
                                <th style="text-align: center; font-size: 12px;" scope="col">Student Name</th>
                                <th style="text-align: center; font-size: 12px;" scope="col">${(hasTwoProductHeader) ? `${productHeader.product1} / ${productHeader.product2}` : `${productHeader}`}</th>
                            </tr>
                        </thead>
                        <tbody class="${data.section}-student-table-body">
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row px-3 pb-4">
                <div class="col" style="font-size: 14px;">
                    <strong class="${data.section}-total-student"></strong>
                </div>
            </div>
        </div>
    `);
}

export function firstModalInsertion({modalTitle, studentData}) {

    const firstModal = document.querySelector('#lgu-modal-1-container');

    firstModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-body contents">
                <div class="container-fluid d-flex justify-content-end"
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container-fluid modal-container-title">${modalTitle}</div>
                <div class="container-fluid student-information-supplies modal-student-information-container mb-3">
                    <h3>Grade ${studentData.gradeLevel}</h3>
                    <div class="row mx-2 mx-sm-5">
                        <div class="col">
                            <table class="table table-bordered total-product-table">
                                
                            </table>
                        </div>
                        <div class="overall-total-container col">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <div class="overall-grade-header">Grade ${studentData.gradeLevel}</div>
                                    <div class="d-flex flex-column">
                                        <div class="boys-total">Boys - ${studentData.boysCount}</div>
                                        <div class="mb-2 girls-total">Girls - ${studentData.girlsCount}</div>
                                        <div class="line-separation"></div>
                                        <div class="overall-student">Total = ${studentData.boysCount + studentData.girlsCount} Students</div>
                                        <div class="total-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col d-flex justify-content-end">
                            <button class="compute-btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function overallLayout(modalContainerTitle) {
    const containerFile = document.querySelector('.per-section-info');
    containerFile.innerHTML = `
        <div class="container file">
            <div class="row p-3 file-main-header">
                <div class="col-3 d-flex justify-content-start lgu-second-modal-header"><img class="img-fluid" src="/images/ntc-logo.png"></div>
                <div class="col px-0 lgu-second-modal-header">
                    <p>NATIONAL TEACHER'S COLLEGE</p>
                    <p>OVERALL GRADE 1 SUPPLY</p>
                    <p>${modalContainerTitle.toUpperCase()}</p>
                </div>
                <div class="col-3 d-flex justify-content-end lgu-second-modal-header"><img class="img-fluid" src="images/manila-seal-logo.png"></div>
            </div>
            <div class="row px-3 file-date-container">
                <div class="col d-flex file-date-line">
                    <strong>DATE:</strong> <p>June 09, 2025</p></div>
                </div>
            <div class="row px-3 file-location-container">
                <div class="col d-flex file-location-line">
                    <strong>LOCATION:</strong><p>629 J. NEPUOMUCENO STREET, QUIAPO, MANILA, PHILIPPINES</p>
                </div>
            </div>
            <div class="row">
                <div class="col py-3 d-flex justify-content-center modal-content-title">${modalContainerTitle.toUpperCase()}</div>
            </div>
            <div class="row">
                <div class="col">
                    <table class="table overall-layout-table">
                        
                    </table>
                </div>
            </div>
            <div class="row overall-header-container">
                <div class="col py-3 d-flex justify-content-center modal-content-title">OVERALL TOTAL</div>
            </div>
            <div class="row overall-table-body-container">
                <div class="col">
                    <table class="table overall-table-total">
                        
                    </table>
                </div>
            </div>
        </div>    
    `;
}