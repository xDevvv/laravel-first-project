let gradeSelected;
let productSelected;

const gradeBtns = document.querySelectorAll('.grade-check-btn');
const productBtns = document.querySelectorAll('.product-check-btn');


gradeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        
        gradeBtns.forEach((btn) => {
            btn.classList.remove('selected');
        });

        btn.classList.add('selected');

        gradeSelected = btn.id;

    })
});

productBtns.forEach((btn) => {
    btn.addEventListener('click', () => {

        productBtns.forEach((btn) => {
            btn.classList.remove('selected');
        });
        
        btn.classList.add('selected');

        productSelected = btn.id;
        
    });        
});

const computeBtn = document.querySelector('.final-compute');
computeBtn.addEventListener('click' , async () => {

    const request = await fetch(`request/info/${gradeSelected}/${productSelected}`)
    const data = await request.json();

    lguFirstModal(gradeSelected, productSelected, data)
})



if(document.getElementById('#exampleModalToggle2') != undefined) {
    const modal = new bootstrap.Modal(document.getElementById('#exampleModalToggle2'));
    modal.show();
}

document.querySelector('#lgu-print').addEventListener('click', () => {
    const printContents = document.querySelector('.file').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.style.backgroundColor = 'white';
    document.body.style.padding = '0';
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    window.location.reload();
})

function lguFirstModal(gradeLevel, product, data) {

    const secondModalModalBtn = document.querySelector('#modal-select-file');
    
    const sizeMap = {
        'Extra Small': 'extraSmall',
        'Small': 'small',
        'Medium': 'medium',
        'Large': 'large',
        'Extra Large': 'extraLarge',
        'Double XL': 'doubleXl'
    };

    const sizeTotals = [
        {gender: 'Male', size: {extraSmall: 0, small: 0, medium: 0, large: 0, extraLarge: 0, doubleXl: 0}},
        {gender: 'Female', size: {extraSmall: 0, small: 0, medium: 0, large: 0, extraLarge: 0, doubleXl: 0}}, 
    ];

    let modalContainerTitle;
    let productHeader;
    let boysCount = 0;
    let girlsCount = 0;

    const firstModal = document.querySelector('#lgu-modal-1-container');
    
    if(product == 'slacks_skirt_size' || product == 'polo_blouse_size') {

        let product1;
        let product2;

        const sizeTotals = [
            {gender: 'Male', size: {extraSmall: 0, small: 0, medium: 0, large: 0, extraLarge: 0, doubleXl: 0}},
            {gender: 'Female', size: {extraSmall: 0, small: 0, medium: 0, large: 0, extraLarge: 0, doubleXl: 0}}, 
        ];

        
        (product == 'slacks_skirt_size') ? product1 = 'Slacks' : product1 = 'Polo';
        (product == 'slacks_skirt_size') ? product2 = 'Skirt' : product2 = 'Blouse';
        (product == 'slacks_skirt_size') ? modalContainerTitle = 'Slacks & Skirt' : modalContainerTitle = 'Polo & Blouse';

        data.forEach((value) => {
            if(value.gender == 'Male') {
                boysCount += parseInt(value.total);
                sizeTotals[0].size[sizeMap[value.size]] += parseInt(value.total);
            }

            if(value.gender == 'Female') {
                girlsCount += parseInt(value.total);
                sizeTotals[1].size[sizeMap[value.size]] += parseInt(value.total);
            }
        })

        firstModalInsertion({
            modalTitle: modalContainerTitle,
            productHeader: {product1: product1, product2: product2},
            studentData: {boysCount: boysCount, girlsCount: girlsCount, gradeLevel: gradeLevel},
        });

        threeColumnTableLayout(product, sizeTotals, {productHeader: {product1: product1, product2: product2}});

        secondModalModalBtn.addEventListener('change', () => {

            let boysOverallTotal;
            let girlsOverallTotal;

            sizeTotals.forEach((value) => {
                if(value.gender == 'Male') boysOverallTotal = Object.values(value.size).reduce((acc, curr) => acc + curr, 0);
                if(value.gender == 'Female') girlsOverallTotal = Object.values(value.size).reduce((acc, curr) => acc + curr, 0);
            });


            const containerFile = document.querySelector('.per-section-info');
            containerFile.innerHTML = '';

            if(secondModalModalBtn.value == 'overall') {
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
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Size</th>
                                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${product1}</th>
                                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${product2}</th>
                                        </tr>
                                    </thead>
                                    <tbody class="student-table-body">
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Extra Small (XL)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[0].extraSmall} PCS</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[1].extraSmall} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Small (S)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[0].small} PCS</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[1].small} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Medium (M)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[0].medium} PCS</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[1].medium} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Large (L)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[0].large} PCS</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[1].large} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Extra Large (XL)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[0].extraLarge} PCS</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[1].extraLarge} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Double Extra Large (XXL)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[0].doubleXl} PCS</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals[1].doubleXl} PCS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col py-3 d-flex justify-content-center modal-content-title">OVERALL TOTAL</div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <tr>
                                                <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Total</th>
                                                <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${product1}</th>
                                                <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${product2}</th>
                                            </tr>
                                    </thead>
                                    <tbody class="student-table-body">
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${boysOverallTotal + girlsOverallTotal}</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${boysOverallTotal} PCS</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${girlsOverallTotal} PCS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>    
                `;
            } 

            if(secondModalModalBtn.value == 'per-section') {
                fetch(`request/student/per_section/${gradeLevel}`)
                .then(response => response.json())
                .then(data => {
                    for(let i = 0; i < data.length; i++) {
                        containerFile.insertAdjacentHTML('beforeend', `
                            <div class="container file my-3">
                                <div class="row p-3 file-main-header">
                                    <div class="col d-flex justify-content-start lgu-second-modal-header" style="font-size: 14px; font-weight: bold;">Class: Grade 1 - ${data[i].section}</div>
                                    <div class="col d-flex justify-content-end lgu-second-modal-header" style="font-size: 14px; font-weight: bold;">Adviser ID: ${data[i].teacher_id}</div>
                                </div>
                                <div class="row px-3">
                                    <div class="col">
                                        <table class="table table-bordered border-black">
                                            <thead>
                                                <tr>
                                                    <th style="text-align: center; font-size: 12px;" scope="col"></th>
                                                    <th style="text-align: center; font-size: 12px;" scope="col">Student Name</th>
                                                    <th style="text-align: center; font-size: 12px;" scope="col">${product1} / ${product2}</th>
                                                </tr>
                                            </thead>
                                            <tbody class="${data[i].section}-student-table-body">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row px-3 pb-4">
                                    <div class="col" style="font-size: 14px;">
                                        <strong class="${data[i].section}-total-student"></strong>
                                    </div>
                                </div>
                            </div>    
                        `);
                        
                        let boysCount = 0;
                        let girlsCount = 0;

                        fetch(`request/section/boys/${gradeLevel}/${data[i].section}`)
                        .then(response => response.json())
                        .then(data => {

                            console.log(data)
                            let hasBoysHeader = false;

                            for(let i = 0; i < data.length; i++) {
                                
                                const tableBody = document.querySelector(`.${data[i].section}-student-table-body`);
                                
                                if(!hasBoysHeader) {
                                    let boysHeader = document.createElement('tr');
                                    boysHeader.innerHTML = `
                                        <td style="text-align: center; font-size: 12px;"></td>
                                        <td style="text-align: center; font-size: 12px; color: red;">Boys</td>
                                        <td style="text-align: center; font-size: 12px;"></td>
                                    `;

                                    tableBody.appendChild(boysHeader);
                                    hasBoysHeader = true;
                                }

                                boysCount++;
                                const row = document.createElement('tr');
                                if(product == 'slacks_skirt_size') {
                                    row.innerHTML = `
                                        <td style="text-align: center; font-size: 12px;">${boysCount}</td>
                                        <td style="text-align: center; font-size: 12px;">${data[i].first_name} ${data[i].last_name}</td>
                                        <td style="text-align: center; font-size: 12px;">${data[i].slacks_skirt_size}</td>
                                    `;
                                }

                                if(product == 'polo_blouse_size') {
                                    row.innerHTML = `
                                        <td style="text-align: center; font-size: 12px;">${boysCount}</td>
                                        <td style="text-align: center; font-size: 12px;">${data[i].first_name} ${data[i].last_name}</td>
                                        <td style="text-align: center; font-size: 12px;">${data[i].polo_blouse_size}</td>
                                    `;
                                }
                                
                                
                                tableBody.appendChild(row);

                                document.querySelector(`.${data[i].section}-total-student`).innerHTML = `Total Students: ${boysCount + girlsCount} Students`;
                            }
                        });

                        fetch(`request/section/girls/${gradeLevel}/${data[i].section}`)
                        .then(response => response.json())
                        .then(data => {

                            let hasGirlsHeader = false;

                            for(let i = 0; i < data.length; i++) {
                                
                                const tableBody = document.querySelector(`.${data[i].section}-student-table-body`);    
                                
                                if(!hasGirlsHeader) {
                                    let girlsHeader = document.createElement('tr');
                                    girlsHeader.innerHTML = `
                                        <td style="text-align: center; font-size: 12px;"></td>
                                        <td style="text-align: center; font-size: 12px; color: red;">Girls</td>
                                        <td style="text-align: center; font-size: 12px;"></td>
                                    `;

                                    tableBody.appendChild(girlsHeader);
                                    hasGirlsHeader = true;
                                }

                                girlsCount++;
                                const row = document.createElement('tr');
                                row.innerHTML = `
                                    <td style="text-align: center; font-size: 12px;">${girlsCount}</td>
                                    <td style="text-align: center; font-size: 12px;">${data[i].first_name} ${data[i].last_name}</td>
                                    <td style="text-align: center; font-size: 12px;">${data[i].slacks_skirt_size}</td>
                                `;
                                
                                tableBody.appendChild(row);
                                document.querySelector(`.${data[i].section}-total-student`).innerHTML = `Total Students: ${boysCount + girlsCount} Students`;
                            }
                        });
                    } 
                });
            }
        });
    }

    if(product == 't_shirt_size' || product == 'pants_size') {
        
        (product == 't_shirt_size') ? modalContainerTitle = 'T-Shirt' : modalContainerTitle = 'Pants';
        (product == 't_shirt_size') ? productHeader = 'T-Shirt' : productHeader = 'Pants';

        data.forEach((value) => {

            console.log(value.gender);
            if(value.gender == 'Male') {
                boysCount += parseInt(value.total);
                sizeTotals[0].size[sizeMap[value.size]] += parseInt(value.total);
            }

            if(value.gender == 'Female') {
                girlsCount += parseInt(value.total);
                sizeTotals[1].size[sizeMap[value.size]] += parseInt(value.total);
            }
        });



        firstModalInsertion({
            modalTitle: modalContainerTitle,
            productHeader: productHeader,
            studentData: {sizeTotals: sizeTotals, boysCount: boysCount, girlsCount: girlsCount, gradeLevel: gradeLevel},
        });

        threeColumnTableLayout(product, sizeTotals, {productHeader: {product1: product1, product2: product2}});

        secondModalModalBtn.addEventListener('change', () => {

            const containerFile = document.querySelector('.per-section-info');
            containerFile.innerHTML = '';

            if(secondModalModalBtn.value == 'overall') {

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
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Size</th>
                                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${modalContainerTitle.toUpperCase()}</th>
                                        </tr>
                                    </thead>
                                    <tbody class="student-table-body">
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Extra Small (XL)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals.extraSmall} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Small (S)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals.small} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Medium (M)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals.medium} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Large (L)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals.large} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Extra Large (XL)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals.extraLarge} PCS</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">Double Extra Large (XXL)</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals.doubleXl} PCS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col py-3 d-flex justify-content-center modal-content-title">OVERALL TOTAL</div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <tr>
                                                <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">Total</th>
                                                <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;" scope="col">${modalContainerTitle.toUpperCase()}</th></th>
                                            </tr>
                                    </thead>
                                    <tbody class="student-table-body">
                                        <tr>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals.extraSmall + sizeTotals.small + sizeTotals.medium + sizeTotals.large + sizeTotals.extraLarge + sizeTotals.doubleXl}</td>
                                            <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue); font-size: 12px;">${sizeTotals.extraSmall + sizeTotals.small + sizeTotals.medium + sizeTotals.large + sizeTotals.extraLarge + sizeTotals.doubleXl} PCS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>    
                `;
            } 

            if(secondModalModalBtn.value == 'per-section') {

                fetch(`request/student/per_section`)
                .then(response => response.json())
                .then(data => {

                    for(let i = 0; i < data.length; i++) {
                        containerFile.insertAdjacentHTML('beforeend', `
                            <div class="container file my-3">
                                <div class="row p-3 file-main-header">
                                    <div class="col d-flex justify-content-start lgu-second-modal-header" style="font-size: 14px; font-weight: bold;">Class: Grade 1 - ${data[i].section}</div>
                                    <div class="col d-flex justify-content-end lgu-second-modal-header" style="font-size: 14px; font-weight: bold;">Adviser ID: ${data[i].teacher_id}</div>
                                </div>
                                <div class="row px-3">
                                    <div class="col">
                                        <table class="table table-bordered border-black">
                                            <thead>
                                                <tr>
                                                    <th style="text-align: center; font-size: 12px;" scope="col"></th>
                                                    <th style="text-align: center; font-size: 12px;" scope="col">Student Name</th>
                                                    <th style="text-align: center; font-size: 12px;" scope="col">${productHeader}</th>
                                                </tr>
                                            </thead>
                                            <tbody class="${data[i].section}-student-table-body">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row px-3 pb-4">
                                    <div class="col" style="font-size: 14px;">
                                        <strong class="${data[i].section}-total-student"></strong>
                                    </div>
                                </div>
                            </div>    
                        `);
                            
                        fetch(`request/section/${gradeLevel}/${data[i].section}`)
                        .then(response => response.json())
                        .then(data => {

                            let hasGirlsHeader = false;
                            let hasBoysHeader = false;
                            let boysCount = 0;
                            let girlsCount = 0;

                            for(let i = 0; i < data.length; i++) {
                                
                                const tableBody = document.querySelector(`.${data[i].section}-student-table-body`);
                                const teacherName = document.querySelector('.lgu-second-modal-header');
                                const sectionName = document.querySelector('.lgu-second-modal-header');
                            
                                    
                                if(data[i].gender == 'Female') {
                                    if (!hasGirlsHeader) {
                                        let girlsHeader = document.createElement('tr');
                                        girlsHeader.innerHTML = `
                                            <td style="text-align: center; font-size: 12px;"></td>
                                            <td style="text-align: center; font-size: 12px; color: red;">Girls</td>
                                            <td style="text-align: center; font-size: 12px;"></td>
                                        `;
                                        tableBody.appendChild(girlsHeader);

                                        hasGirlsHeader = true;
                                    }

                                    girlsCount++;
                                    const row = document.createElement('tr');
                                    row.innerHTML = `
                                        <td style="text-align: center; font-size: 12px;">${girlsCount}</td>
                                        <td style="text-align: center; font-size: 12px;">${data[i].first_name} ${data[i].last_name}</td>
                                        <td style="text-align: center; font-size: 12px;">${data[i].slacks_skirt_size}</td>
                                    `;
                                    
                                    tableBody.appendChild(row);
                                }
                                


                                

                                if(data[i].gender == 'Male') {
                                    if(!hasBoysHeader) {
                                        let boysHeader = document.createElement('tr');
                                        boysHeader.innerHTML = `
                                            <td style="text-align: center; font-size: 12px;"></td>
                                            <td style="text-align: center; font-size: 12px; color: red;">Boys</td>
                                            <td style="text-align: center; font-size: 12px;"></td>
                                        `;

                                        tableBody.appendChild(boysHeader);

                                        hasBoysHeader = true;
                                    }

                                    boysCount++;
                                    const row = document.createElement('tr');
                                    row.innerHTML = `
                                        <td style="text-align: center; font-size: 12px;">${boysCount}</td>
                                        <td style="text-align: center; font-size: 12px;">${data[i].first_name} ${data[i].last_name}</td>
                                        <td style="text-align: center; font-size: 12px;">${data[i].slacks_skirt_size}</td>
                                    `;
                                    
                                    tableBody.appendChild(row);
                                }
                                document.querySelector(`.${data[i].section}-total-student`).innerHTML = `Total Students: ${boysCount + girlsCount} Students`;
                            }
                            
                            

                            
                        });
                    }
                    console.log(data.length);
                })
            }
        });
    }

    if(product == 'school_supplies') {

        modalContainerTitle = 'Shoes';
        productHeader = 'Needed';

        const maleShoeSizeTotal = {
            yes: 0,
            no: 0
        }

        const femaleShoeSizeTotal = {
            yes: 0,
            no: 0
        }

        data.forEach((value) => {

            if(value.gender == 'Female') {
                (value.size == 'yes') ? femaleShoeSizeTotal.yes += parseInt(value.total) : femaleShoeSizeTotal.no += parseInt(value.total);
            }

            if(value.gender == 'Male') {
                (value.size == 'yes') ? maleShoeSizeTotal.yes += parseInt(value.total) : maleShoeSizeTotal.no += parseInt(value.total);
            }

            (value.gender == 'Male') ? boysCount += parseInt(value.total) : girlsCount += parseInt(value.total);
        });

        firstModalInsertion({
            modalTitle: modalContainerTitle,
            productHeader: productHeader,
            studentData: {boysCount: boysCount, girlsCount: girlsCount, gradeLevel: gradeLevel},
        });

        firstModal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex justify-content-end">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="container-fluid modal-container-title">${modalContainerTitle}</div>
                        <div class="container-fluid student-information modal-student-information-container mb-3">
                            <h3>Grade ${gradeLevel}</h3>
                            <div class="row mx-2 mx-sm-5">
                                <div class="col">
                                    <table class="table table-bordered total-product-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">GENDER</th>
                                                <th scope="col" class="product-header">YES</th>
                                                <th scope="col" class="product-header">NO</th>
                                            </tr>
                                        </thead>
                                        <tbody class="product-body">
                                            <tr>
                                                <td>MALE</td>
                                                <td>${maleShoeSizeTotal.yes}</td>
                                                <td>${maleShoeSizeTotal.no}</td>
                                            </tr>
                                            <tr>
                                                <td>FEMALE</td>
                                                <td>${femaleShoeSizeTotal.yes}</td>
                                                <td>${femaleShoeSizeTotal.no}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="overall-total-container col d-flex justify-content-end">
                                    <div class="outer-container">
                                        <div class="inner-container">
                                            <div class="overall-grade-header">Grade ${gradeLevel}</div>
                                            <div class="d-flex flex-column">
                                                <div>Boys - ${boysCount}</div>
                                                <div class="mb-2">Girls - ${girlsCount}</div>
                                                <div class="line-separation"></div>
                                                <div>Total = ${boysCount + girlsCount} Students</div>
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
            </div>
        `;
    }

    if(product == 'shoe_size') {
        modalContainerTitle = 'Shoes';

        firstModal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex justify-content-end">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="container-fluid modal-container-title">${modalContainerTitle}</div>
                        <div class="container-fluid student-information modal-student-information-container mb-3">
                            <h3>Grade ${gradeLevel}</h3>
                            <div class="row mx-2 mx-sm-5">
                                <div class="col">
                                    <table class="table table-bordered total-product-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">SIZE</th>
                                                <th scope="col" class="product-header">TOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody class="product-body">
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div class="overall-total-container col d-flex justify-content-end">
                                    <div class="outer-container">
                                        <div class="inner-container">
                                            <div class="overall-grade-header">Grade ${gradeLevel}</div>
                                            <div class="d-flex flex-column">
                                                <div class="boys-total"></div>
                                                <div class="mb-2 girls-total"></div>
                                                <div class="line-separation"></div>
                                                <div class="overall-student"></div>
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
            </div>
        `;

        data.forEach((value) => {
            document.querySelector('.product-body').insertAdjacentHTML('beforeend', `
                <tr>
                    <td>${value.size}</td>
                    <td>${value.total}</td>
                </tr>
            `);

            (value.gender == 'Male') ? boysCount += parseInt(value.total) : girlsCount += parseInt(value.total);
        });

        document.querySelector('.boys-total').innerHTML = `Boys - ${boysCount}`;
        document.querySelector('.girls-total').innerHTML = `Girls - ${girlsCount}`;
        document.querySelector('.overall-student').innerHTML = `Total = ${boysCount + girlsCount} Students`;
    }

}

function firstModalInsertion({modalTitle, studentData}) {

    const firstModal = document.querySelector('#lgu-modal-1-container');

    firstModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-body contents">
                <div class="container-fluid d-flex justify-content-end">
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
                                        <div>Boys - ${studentData.boysCount}</div>
                                        <div class="mb-2">Girls - ${studentData.girlsCount}</div>
                                        <div class="line-separation"></div>
                                        <div>Total = ${studentData.boysCount + studentData.girlsCount} Students</div>
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

function threeColumnTableLayout(product, sizeTotals, {productHeader}) {
    console.log(sizeTotals);
    if(product == 'slacks_skirt_size' || product == 'polo_blouse_size') {
        document.querySelector('.total-product-table').innerHTML = `
            <thead>
                <tr>
                    <th scope="col">Size</th>
                    <th scope="col">${productHeader.product1}</th>
                    <th scope="col">${productHeader.product2}</th>
                </tr>
            </thead>
            <tbody class="product-body">
                <tr>
                    <td>EXTRA SMALL</td>
                    <td>${sizeTotals[0].size.extraSmall} PCS</td>
                    <td>${sizeTotals[1].size.extraSmall} PCS</td>
                </tr>
                <tr>
                    <td>SMALL</td>
                    <td>${sizeTotals[0].size.small} PCS</td>
                    <td>${sizeTotals[1].size.small} PCS</td>
                </tr>
                <tr>
                    <td>MEDIUM</td>
                    <td>${sizeTotals[0].size.medium} PCS</td>
                    <td>${sizeTotals[1].size.medium} PCS</td>
                </tr>
                <tr>
                    <td>LARGE</td>
                    <td>${sizeTotals[0].size.large} PCS</td>
                    <td>${sizeTotals[1].size.large} PCS</td>
                </tr>
                <tr>
                    <td>EXTRA LARGE</td>
                    <td>${sizeTotals[0].size.extraLarge} PCS</td>
                    <td>${sizeTotals[1].size.extraLarge} PCS</td>
                </tr><tr>
                    <td>DOUBLE XL</td>
                    <td>${sizeTotals[0].size.doubleXl} PCS</td>
                    <td>${sizeTotals[1].size.doubleXl} PCS</td>
                </tr>
            </tbody>
        `;
    }

    if(product == 't_shirt_size' || product == 'pants_size') {
        docoument.querySelector('.total-product-table').innerHTML = `
            <thead>
                <tr>
                    <th scope="col">Size</th>
                    <th scope="col" class="product-header">${productHeader.productHeader}</th>
                </tr>
            </thead>
            <tbody class="product-body">
                <tr>
                    <td>EXTRA SMALL</td>
                    <td>${sizeTotals[0].size.extraSmall + sizeTotals[1].size.extraSmall} PCS</td>
                </tr>
                <tr>
                    <td>SMALL</td>
                    <td>${sizeTotals[0].size.small + sizeTotals[1].size.small} PCS</td>
                </tr>
                <tr>
                    <td>MEDIUM</td>
                    <td>${sizeTotals[0].size.medium + sizeTotals[1].size.medium} PCS</td>
                </tr>
                <tr>
                    <td>LARGE</td>
                    <td>${sizeTotals[0].size.large + sizeTotals[1].size.large} PCS</td>
                </tr>
                <tr>
                    <td>EXTRA LARGE</td>
                    <td>${sizeTotals[0].size.extraLarge + sizeTotals[1].size.extraLarge} PCS</td>
                </tr>
                <tr>
                    <td>DOUBLE XL</td>
                    <td>${sizeTotals[0].size.doubleXl + sizeTotals[1].size.doubleXl} PCS</td>
                </tr>
            </tbody>
        `;
    }
}

function twoColumnTableLayout(product) {

    if(product == 'school_supplies') {
        docoument.querySelector('.total-product-table').innerHTML = `
            <thead>
                <tr>
                    <th scope="col">GENDER</th>
                    <th scope="col" class="product-header">YES</th>
                    <th scope="col" class="product-header">NO</th>
                </tr>
            </thead>
            <tbody class="product-body">
                <tr>
                    <td>MALE</td>
                    <td>${maleShoeSizeTotal.yes}</td>
                    <td>${maleShoeSizeTotal.no}</td>
                </tr>
                <tr>
                    <td>FEMALE</td>
                    <td>${femaleShoeSizeTotal.yes}</td>
                    <td>${femaleShoeSizeTotal.no}</td>
                </tr>
            </tbody>
        `;
    }

    if(product == 'shoe_size') {
        docoument.querySelector('.total-product-table').innerHTML = `
            <thead>
                <tr>
                    <th scope="col">SIZE</th>
                    <th scope="col" class="product-header">TOTAL</th>
                </tr>
            </thead>
            <tbody class="product-body">
                
            </tbody>
        `;
    }
}

