// Authentication Notification

const successNotif = document.querySelector('.success-notif');
const successNotifTeacherLgu = document.querySelector('.teacher-lgu-success-notif');

function removeSuccessNofif(element) {
    setTimeout(() => {
        element.classList.remove('show');
    }, 3000);
}

(successNotifTeacherLgu) ? removeSuccessNofif(successNotifTeacherLgu) : null;


const burgerMenu = document.getElementById('burger-menu');


if(burgerMenu != null) {
    burgerMenu.addEventListener('click', (event) => {
        const sideBar = document.getElementById('sidebar');
        if(event.target.id == 'burger-menu') sideBar.classList.toggle('show');
    });
}


document.addEventListener('click', (event) => {
    const sideBar = document.getElementById('sidebar');
    if(event.target.id != 'burger-menu') sideBar.classList.remove('show');
});