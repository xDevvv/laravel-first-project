// Authentication Notification

const successNotifTeacherLgu = document.querySelector('.teacher-lgu-success-notif');



(successNotifTeacherLgu) ? removeSuccessNofif(successNotifTeacherLgu) : null;


export function removeSuccessNofif(element) {
    setTimeout(() => {
        element.classList.remove('show');
    }, 3000);
}

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