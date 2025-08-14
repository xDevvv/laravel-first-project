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

computeBtn.addEventListener('click' , () => {

    fetch(`request/info/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gradeLevel: gradeSelected,
            product: productSelected
        })
    })
    .then(response => response.json())
    .then(datas => {
        lguFirstModal(gradeSelected, productSelected, datas);
    }).catch(error => console.log(error));
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
