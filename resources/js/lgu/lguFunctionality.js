import { slacksSkirt_poloBlouse_table_header, slacksSkirt_poloBlouse_table_body, 
         shirt_and_pants_table_header, shirt_and_pants_table_body, 
         shoe_size_table_header, shoe_size_table_body, 
         school_supplies_table_header, school_supplies_table_body,
         dataInsertionLayout,
         fetchStudentData, fetchPerSectionLayout, firstModalInsertion,
         overallLayout
        } from "./layout";

import { showLoadingSpinner, hideLoadingSpinner } from "../authentication";

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
    
    if(gradeSelected == undefined || productSelected == undefined) {
        const toastElement = document.getElementById('myToast');
        const toast = new bootstrap.Toast(toastElement, { delay: 3000 }); // auto hide after 3s
        toast.show();
        return;
    }

    const request = await fetch(`request/info/${gradeSelected}/${productSelected}`)
    const data = await request.json();

    lguFirstModal(gradeSelected, productSelected, data);
})

const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => {
    document.addEventListener('hidden.bs.modal', function () {
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        document.body.classList.remove('modal-open');
    });
})




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

    if(product == 'slacks_skirt_size' || product == 'polo_blouse_size') {

        let product1;
        let product2;

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

        threeColumnTableLayout(product, {studentData: sizeTotals}, {productHeader: {product1: product1, product2: product2}});

        const containerFile = document.querySelector('.choose-file-placeholder');

        secondModalModalBtn.addEventListener('change', () => {

            if(containerFile) containerFile.remove();

            const containerData = document.querySelector('.container-data');
            
            containerData.innerHTML = '';
            
            showLoadingSpinner();

            if(secondModalModalBtn.value == 'overall') {
                
                const studentTotal = sizeTotalComputation(sizeTotals);
                overallLayout(modalContainerTitle);
                dataInsertionLayout(product, {data: {studentTotal: studentTotal, sizeTotals: sizeTotals, productHeader: {product1: product1, product2: product2}}});
                
            } 

            if(secondModalModalBtn.value == 'per-section') {
                
                fetch(`request/student/per_section/${gradeLevel}`)
                .then(response => response.json())
                .then(data => {
                    for(let i = 0; i < data.length; i++) {

                        fetchPerSectionLayout(containerData, {data: data[i], productHeader: {product1: product1, product2: product2}});

                        fetch(`request/section/${gradeLevel}/${data[i].section}`)
                        .then(response => response.json())
                        .then(data => {
                            
                            fetchStudentData(data.boys, product);
                            fetchStudentData(data.girls, product);
                        });
                    } 
                });
                
            }
            console.log(containerData);
            hideLoadingSpinner();
        });
    }

    if(product == 't_shirt_size' || product == 'pants_size') {

        (product == 't_shirt_size') ? modalContainerTitle = 'T-Shirt' : modalContainerTitle = 'Pants';
        (product == 't_shirt_size') ? productHeader = 'T-Shirt' : productHeader = 'Pants';

        data.forEach((value) => {
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

        twoColumnTableLayout(product, {studentData: sizeTotals}, {productHeader: productHeader});

        secondModalModalBtn.addEventListener('change', () => {

            if(secondModalModalBtn.value == 'overall') {

                const studentTotal = sizeTotalComputation(sizeTotals);
                
                overallLayout(modalContainerTitle);
                dataInsertionLayout(product, {data: {studentTotal: studentTotal, sizeTotals: sizeTotals, productHeader: productHeader}});
            }

            if(secondModalModalBtn.value == 'per-section') {

                const containerFile = document.querySelector('.per-section-info');
                containerFile.innerHTML = '';

                fetch(`request/student/per_section/${gradeLevel}`)
                .then(response => response.json())
                .then(data => {

                    for(let i = 0; i < data.length; i++) {
                        fetchPerSectionLayout(containerFile, {data: data[i], productHeader: productHeader});

                        fetch(`request/section/${gradeLevel}/${data[i].section}`)

                        .then(response => response.json())
                        .then(data => {

                            fetchStudentData(data.boys, product);
                            fetchStudentData(data.girls, product);
                        });
                    } 
                })
            }
        });
    }

    if(product == 'shoe_size') {

        let totalShoes = 0;
        let totalSize = 0;

        modalContainerTitle = 'Shoes';

        data.forEach((value) => {
            (value.gender == 'Male') ? boysCount += parseInt(value.total) : girlsCount += parseInt(value.total);

            totalSize++;
            totalShoes += parseInt(value.total);
        });
        
        firstModalInsertion({
            modalTitle: modalContainerTitle,
            productHeader: productHeader,
            studentData: {boysCount: boysCount, girlsCount: girlsCount, gradeLevel: gradeLevel},
        });
        twoColumnTableLayout(product, {studentData: {shoeSize: data}}, {productHeader: modalContainerTitle});

        secondModalModalBtn.addEventListener('change', () => {
            
            if(secondModalModalBtn.value == 'overall') {

                overallLayout(modalContainerTitle);
                dataInsertionLayout(product, {data: {shoeSize: data, totalSize: totalSize, totalShoes: totalShoes}});
            }

            if(secondModalModalBtn.value == 'per-section') {

                const containerFile = document.querySelector('.per-section-info');
                containerFile.innerHTML = '';

                fetch(`request/student/per_section/${gradeLevel}`)
                .then(response => response.json())
                .then(data => {
                    console.log(modalContainerTitle);
                    for(let i = 0; i < data.length; i++) {
                        fetchPerSectionLayout(containerFile, {data: data[i], productHeader: modalContainerTitle});

                        fetch(`request/section/${gradeLevel}/${data[i].section}`)

                        .then(response => response.json())
                        .then(data => {

                            fetchStudentData(data.boys, product);
                            fetchStudentData(data.girls, product);
                        });
                    } 
                })
            }
        });
    }

    if(product == 'school_supplies') {

        modalContainerTitle = 'School Supplies';
        productHeader = 'Needed';

        const maleTotal = {yes: 0, no: 0}
        const femaleTotal = {yes: 0, no: 0}

        data.forEach((value) => {
            if(value.gender == 'Female') {
                (value.school_supplies == 'yes') ? femaleTotal.yes += parseInt(value.total) : femaleTotal.no += parseInt(value.total);
            }

            if(value.gender == 'Male') {
                (value.school_supplies == 'yes') ? maleTotal.yes += parseInt(value.total) : maleTotal.no += parseInt(value.total);
            }

            (value.gender == 'Male') ? boysCount += parseInt(value.total) : girlsCount += parseInt(value.total);
        });


        firstModalInsertion({
            modalTitle: modalContainerTitle,
            productHeader: productHeader,
            studentData: {boysCount: boysCount, girlsCount: girlsCount, gradeLevel: gradeLevel},
        });

        threeColumnTableLayout(product, {studentData: {schoolSupplies: data, male: maleTotal, female: femaleTotal}}, {productHeader: productHeader});

        secondModalModalBtn.addEventListener('change', () => {
            
            if(secondModalModalBtn.value == 'overall') {

                overallLayout(modalContainerTitle);
                dataInsertionLayout(product, {data: {male: maleTotal, female: femaleTotal}});
            }

            if(secondModalModalBtn.value == 'per-section') {

                const containerFile = document.querySelector('.per-section-info');
                containerFile.innerHTML = '';

                fetch(`request/student/per_section/${gradeLevel}`)
                .then(response => response.json())
                .then(data => {
                    console.log(product);
                    for(let i = 0; i < data.length; i++) {
                        fetchPerSectionLayout(containerFile, {data: data[i], productHeader: modalContainerTitle});

                        fetch(`request/section/${gradeLevel}/${data[i].section}`)

                        .then(response => response.json())
                        .then(data => {

                            fetchStudentData(data.boys, product);
                            fetchStudentData(data.girls, product);
                        });
                    } 
                })
            }
        });
    }
}




function threeColumnTableLayout(product, {studentData}, {productHeader}) {
    if(product == 'slacks_skirt_size' || product == 'polo_blouse_size') {
        document.querySelector('.total-product-table').innerHTML = `
            <thead>
                ${slacksSkirt_poloBlouse_table_header(productHeader)}
            </thead>
            <tbody class="product-body">
                ${slacksSkirt_poloBlouse_table_body(studentData)}
            </tbody>
        `;
    }

    if(product == 'school_supplies') {
        document.querySelector('.total-product-table').innerHTML = `
            <thead>
                ${school_supplies_table_header()}
            </thead>
            <tbody class="product-body">
                ${school_supplies_table_body(studentData)}
            </tbody>
        `;
    }
}

function twoColumnTableLayout(product, {studentData}, {productHeader}) {

    if(product == 't_shirt_size' || product == 'pants_size') {
        document.querySelector('.total-product-table').innerHTML = `
            <thead>
                ${shirt_and_pants_table_header(productHeader)}
            </thead>
            <tbody class="product-body">
                ${shirt_and_pants_table_body(studentData)}
            </tbody>
        `;
    }
    if(product == 'shoe_size') {
        document.querySelector('.total-product-table').innerHTML = `
            <thead>
                ${shoe_size_table_header()}
            </thead>
            <tbody class="product-body">
                ${shoe_size_table_body(studentData.shoeSize)}
            </tbody>
        `;
    } 
}



function sizeTotalComputation(sizeTotal) {
    let boysOverallTotal = 0;
    let girlsOverallTotal = 0;
    sizeTotal.forEach((value) => {
        if(value.gender == 'Male') boysOverallTotal = Object.values(value.size).reduce((acc, curr) => acc + curr, 0);
        if(value.gender == 'Female') girlsOverallTotal = Object.values(value.size).reduce((acc, curr) => acc + curr, 0);
    });

    return {boysOverallTotal, girlsOverallTotal};
}

