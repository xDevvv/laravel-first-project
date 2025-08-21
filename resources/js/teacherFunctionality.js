import { removeSuccessNofif } from "./authentication";
import { fetchSpecificStudent } from "./adminFunctionality";

const successNotification = document.querySelector('.teacher-input-success-notif');

if (successNotification) removeSuccessNofif(successNotification);

document.querySelectorAll('.view-btn').forEach(btn => btn.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    fetchSpecificStudent(id);
}));

console.log('teacherFunctionality.js loaded');
