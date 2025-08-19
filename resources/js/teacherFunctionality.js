import { removeSuccessNofif } from "./authentication";
import { fetchSpecificStudent } from "./adminFunctionality";

const successNotification = document.querySelector('.teacher-input-success-notif');

(successNotification) ? removeSuccessNofif(successNotification) : null;



document.querySelector('.view-btn').addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    let section = e.target.dataset.section;
    let name = e.target.dataset.name;

    fetchSpecificStudent(id, section, name);
});