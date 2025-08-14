const spinnerWrapper = document.querySelector('.spinner-wrapper');
const imgLogo = document.querySelector('.img-logo');


if(imgLogo){

    setTimeout(() => {
        spinnerWrapper.style.display = 'none';
        imgLogo.style.display = 'block';

    }, 300); 

    
}

