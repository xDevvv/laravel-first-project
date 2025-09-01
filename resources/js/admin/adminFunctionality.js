import { defaultDetailsLayout, teacherDetailsLayout, lguDetailsLayout, studentTableHeader,
         studentTableBody, studentCardBody, insertSingleStudentInfoModal, selectedSectionLayout
 } from "./adminFunctionalityLayout";

const userDetailsBtn = document.querySelectorAll('.details-btn');

const tableContainer = document.querySelector('.table-columns');

// Helper Function to Get the value
const getValue = (id) => document.getElementById(id).value.trim();


// Admin Page Dashboard (Dropdown)

document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', function () {
        this.parentElement.classList.toggle('show');
    });
});



if(userDetailsBtn != null) {
    userDetailsBtn.forEach(btn => {
        btn.addEventListener('click', async () => {

            const userId = btn.getAttribute('id');
            
            const response = await fetch(`request/details/${userId}`);
            const data = await response.json();

            

            tableContainer.insertAdjacentHTML('afterbegin', defaultDetailsLayout(data));

            const modalElement = document.getElementById('user-details');
            const bootstrapModal = new bootstrap.Modal(modalElement);

            bootstrapModal.show();

            if(data.role === 'teacher') {
                document.querySelector('.modal-body').insertAdjacentHTML('beforeend', teacherDetailsLayout(data));                
                gradeLevelSelection();
            }

            if(data.role === 'lgu') {
                document.querySelector('.modal-body').insertAdjacentHTML('beforeend', lguDetailsLayout(data));
            }

            const btnCloseModal = document.querySelector('.close-modal');
            closeModal(btnCloseModal, modalElement)

            const acceptUser = document.querySelector('.accept-user');
            acceptUser.addEventListener('click', () => acceptPendingUser(userId, data));
        });
    });
}

function toggleError(input, errorElement) {
    
    let value   = getValue(input);
    console.log(value);
    let errorEl = document.querySelector(`${errorElement}`);

    if (value) {
        errorEl.classList.add('hide');
        return true;
    } else {
        errorEl.classList.remove('hide');
        return false;
    }

}

// Request Notification in Navbar
const pendingUserContainer = document.querySelector('.notification-count');

if(pendingUserContainer !== null) {
    if(pendingUserContainer.innerHTML == 0) pendingUserContainer.classList.add('hide')
}

const dropDown = document.querySelectorAll('.dropdown-toggle')

if(dropDown !== null) {

    let gradeLevel;

    dropDown.forEach((toggle) => {
        toggle.addEventListener('click', () => {

            gradeLevel = toggle.id;

            fetch(`request/sections/all/${toggle.id}`)
            .then(response => response.json())
            .then(datas => {
                
                const container = document.querySelector(`.grade-${gradeLevel}`)
                container.innerHTML = '';

                datas.forEach((data) => {
                    container.insertAdjacentHTML('beforeend', 
                        `<div class="section" data-section="${data.section_name}">GRADE ${data.grade_level} ${data.section_name.toUpperCase()}</div>`)
                })
                selectedSection(gradeLevel);
            }).catch(error => console.log(error));
        })
    })
}

function fetchStudent(gradeLvl, section) {

    fetch(`request/students/${gradeLvl}/${section}`)
    .then(response => response.json())
    .then(datas => {
        document.querySelector('.student-table-container').innerHTML = studentTableHeader();

        datas.forEach((data) => {
            document.querySelector('.student-table-body').insertAdjacentHTML('beforeend', studentTableBody(data));
            document.querySelector('.student-card-body').insertAdjacentHTML('beforeend', studentCardBody(data));
        });

        document.querySelectorAll('.view-btn').forEach(btn => btn.addEventListener('click', (e) => {
            let id = e.target.dataset.id;
            fetchSpecificStudent(id);
        }));
        
        document.getElementById('print').addEventListener('click', () => {
            const printContents = document.querySelector('.student-table-container').innerHTML;
            const originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;

            window.location.reload();
        });
    }).catch(error => console.log(error))
}

export async function fetchSpecificStudent(id) {

    const response = await fetch(`request/student/${id}`);
    const data = await response.json();

    const modalElement = document.querySelector('.print-modal');
    const modal = bootstrap.Modal.getInstance(modalElement);


    if(modalElement == null) 
    {
        insertSingleStudentInfoModal(data);
        return;
    }
    else if(modal) 
    {
        modal.hide();
        insertSingleStudentInfoModal(data);
    }
    else 
    {
        const newModal = new bootstrap.Modal(modalElement);
        newModal.hide();
        insertSingleStudentInfoModal(data);
    }
}


function fetchTeacher(grade_level, section) {
    fetch(`request/teacher/${grade_level}/${section}`)
    .then(response => response.json())
    .then(data => {
        data.forEach((teacher) => {
            document.querySelector('.teacher-assigned').innerHTML = `Adviser: ${teacher.name} - ${teacher.grade_level} ${teacher.section}`
        })
        
    }).catch(error => console.log(error));
}

function closeModal(btnElement, modal) {
    btnElement.addEventListener('click', () => {
        // Hide the modal
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        bootstrapModal.hide();

        // Remove the modal from the DOM
        tableContainer.removeChild(modal);
    });

}

function acceptPendingUser(userId, {username, password}) {
    const name   = getValue('name');
    const id     = getValue('id');
    const role   = getValue('role');
    const email  = getValue('email');
    const status = getValue('status');

    // LGU
    if(role == 'lgu') {

        const isValidArea = toggleError('area', '.input-area-error');
        const isValidStatus = toggleError('status', '.input-select-error');
        const isValidLguType = toggleError('lgu_type', '.input-lgu_type-error');
        
        const isValid = [isValidArea, isValidStatus, isValidLguType].every(Boolean);

        if(isValid && status == 'verified') {

            const area = getValue('area');
            const lguType = getValue('lgu_type');

            fetch(`request/accept/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    id: id,
                    name: name,
                    email: email,
                    role: role,
                    lgu_type: lguType,
                    area: area,
                    status: status
                }),
                credentials: "same-origin"
            })
            .then(response => response.json())
            .then(data => {
                acceptAlertNotification(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        }
    }
    
    // Teacher
    if(role == 'teacher') {

        const gradeLevel = getValue('grade_level');
        const section    = getValue('section');

        const isValidGradeLevel = toggleError('grade_level', '.input-grade_level-error');
        const isValidSection = toggleError('section', '.input-section-error');
        const isValidStatus = toggleError('status', '.input-select-error');

        const isValid = [isValidGradeLevel, isValidSection, isValidStatus].every(Boolean);
        if(isValid && status == 'verified') {
            fetch(`/request/accept/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    id: id,
                    name: name,
                    email: email,
                    role: role,
                    grade_level: gradeLevel,
                    section: section,
                    status: status
                }),
                credentials: "same-origin"
            })
            .then(response => response.json())                
            .then(data => {
                acceptAlertNotification(data);
            }).catch(error => console.error(`Fetch Error ${error}`))
        }
    }
}

function acceptAlertNotification(data) {
    document.querySelector('.modal-container').insertAdjacentHTML('afterbegin', `
        <div class="container-fluid pt-3">
            <div class="row d-flex justify-content-center error-modal-handler">
                <div class="col-5">
                    <div class="alert alert-success alert-dismissible fade show error-modal" role="alert">
                        ${data.success ? 'Request Approved Successfully!' : 'Request Denied!'}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    `)
        
    document.querySelector('.accept-user').disabled = true;

    setTimeout(() => {
        window.location.href = data.url;
    }, 3000);
    
}

function selectedSection(gradeLevel) {
    document.querySelectorAll('.section').forEach((sections) => {
        sections.addEventListener('click', () => {

            const sectionValue = sections.dataset.section;

            document.body.insertAdjacentHTML('afterbegin', selectedSectionLayout());            
            fetchStudent(gradeLevel, sectionValue);
            fetchTeacher(gradeLevel, sectionValue);

            const modal = new bootstrap.Modal(document.getElementById('student-in-sections'));
            modal.show();

        })
    })
}

function gradeLevelSelection() {

    const gradeLevelOption = document.getElementById('grade_level');
    const sectionOption = document.querySelector('#section');
    
    gradeLevelOption.addEventListener('change' , async () => {
        if(gradeLevelOption.value != '') {

            sectionOption.disabled = false;

            const id = gradeLevelOption.value;

            // Remove the last options
            for(let i = sectionOption.length - 1; i > 0; i--) {
                sectionOption.remove(i);
            }

            fetch(`request/sections/available/${id}`)
            .then(response => response.json())
            .then(result => {
                result.forEach((data) => {

                const option = document.createElement('option')
                option.value = data.section_name;
                option.textContent = data.section_name;

                sectionOption.append(option);
                }); 
            }); 
        }
    });
}