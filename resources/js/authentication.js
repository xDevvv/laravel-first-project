// Authentication Notification

const successNotifTeacherLgu = document.querySelector('.teacher-lgu-success-notif');

(successNotifTeacherLgu) ? removeSuccessNofif(successNotifTeacherLgu) : null;

export function removeSuccessNofif(element) {
    setTimeout(() => {
        element.classList.remove('show');
    }, 3000);
}



