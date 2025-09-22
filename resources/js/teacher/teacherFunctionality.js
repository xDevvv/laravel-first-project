import { removeSuccessNofif } from "../authentication";
import { modalToDeleteStudent } from "./teacherFunctionalityLayout"


const successNotification = document.querySelector('.teacher-input-success-notif');
const confirmStudentDeletion = document.querySelector('.delete-btn');

if (successNotification) removeSuccessNofif(successNotification);

document.querySelectorAll('.view-btn').forEach(btn => btn.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    fetchSpecificStudent(id);
}));

if(confirmStudentDeletion) confirmStudentDeletion.addEventListener('click', () => { showInfoStudentToDelete()});

    // deleteConfirm.addEventListener('click', () => { deleteStudents() });

function showInfoStudentToDelete() {

    modalToDeleteStudent();

    const checkBoxes = document.querySelectorAll('.studentCheckBox:checked');

    let selectedIds = [];

    if( checkBoxes.length === 0 ) {
        alert("Please select at least one student to delete.");
        return;
    }

    // Clear previous data
      const tbody = document.querySelector("#studentsToDelete tbody");
      tbody.innerHTML = "";
      selectedIds = [];

    // Populate modal table
    checkBoxes.forEach(box => {
        const studentId = box.id;
        const name = box.dataset.student_name;
        selectedIds.push(box.id);

        const row = `<tr><td>${studentId}</td><td>${name}</td></tr>`;
        tbody.insertAdjacentHTML("beforeend", row);
    });

    // Show modal
    const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
    deleteModal.show();

    const deleteConfirm = document.querySelector('.delete-confirm-btn');
    deleteConfirm.addEventListener('click', () => { deleteStudents(selectedIds) });
}

async function deleteStudents(data) {

    console.log("Deleting students...");
    
    const respose = await fetch('/delete-students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify({ ids: data })
    });

    const result = await respose.json();

    console.log(result);

    if(result.success) {
        // Close modal
        data.forEach(id => {
            document.querySelector(`.studentCheckBox[id='${id}']`).closest("tr").remove();
        });
        bootstrap.Modal.getInstance(document.getElementById("deleteModal")).hide();
    }
    
}

    

