import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const pathname = window.location.pathname;

const noneBackgroundPaths = [
    '/',
    '/dashboard',
    '/admin',
    '/request',
    '/approve',
    '/teacher',
    '/student_information',
    '/lgu_dashboard'
];


if(noneBackgroundPaths.includes(pathname)) {
    document.body.style.backgroundImage = 'none';
}


const burgerMenu = document.getElementById('burger-menu');

if(burgerMenu != null) {
    burgerMenu.addEventListener('click', (event) => {
        const sideBar = document.querySelector('#sidebar');
        if(event.target.id == 'burger-menu') sideBar.classList.toggle('show');
    });
}

document.addEventListener('click', (event) => {
    const sideBar = document.getElementById('sidebar');
    if(event.target.id != 'burger-menu') sideBar.classList.remove('show');
})


