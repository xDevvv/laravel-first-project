// Authentication Notification

const successNotifTeacherLgu = document.querySelector('.teacher-lgu-success-notif');

(successNotifTeacherLgu) ? removeSuccessNofif(successNotifTeacherLgu) : null;

export function removeSuccessNofif(element) {
    setTimeout(() => {
        element.classList.remove('show');
    }, 3000);
}


export function showLoadingSpinner() {
    console.log('show')
    document.querySelector('#loader').style.display = "block";
    document.querySelector('#content').style.display = "none";
}

export function hideLoadingSpinner() {
    document.querySelector('#loader').style.display = "none";
    document.querySelector('#content').style.display = "block";
    console.log('hide');
}
