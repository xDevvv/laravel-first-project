
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

            let modal = `
                <div class="modal fade" id="user-details" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content modal-container">
                            <div class="modal-body">
                                <div class="d-none d-lg-block row my-2 d-lg-flex justify-content-center align-items-baseline gap-2 px-2">
                                    <div class="col text-center">
                                        <strong>Name: </strong>
                                    </div>
                                    <div class="col d-sm-flex justify-content-center">
                                        <strong>ID Number: </strong>
                                    </div>
                                    <div class="col d-sm-flex justify-content-center">
                                        <strong>Role: </strong>
                                    </div>
                                </div>
                                <div class="row my-2 d-flex justify-content-center align-items-baseline gap-2 px-2">
                                    <div class="col input-column p-0 d-flex justify-content-center flex-column">
                                        <strong class="d-md-block d-lg-none">Name: </strong>
                                        <input type="text" class="" value="${data.name}" readonly id="name">
                                    </div>
                                    <div class="col input-column p-0 d-flex justify-content-center flex-column">
                                        <strong class="d-md-block d-lg-none">ID Number: </strong>
                                        <input type="text" class="" value="${data.pending_user_id}" readonly id="id">
                                    </div>
                                    <div class="col input-column p-0 d-flex justify-content-center flex-column">
                                        <strong class="d-md-block d-lg-none">Role: </strong>
                                        <input type="text" class="" value="${data.role}" readonly id="role">
                                    </div>
                                </div>
                            </div>    
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary close-modal">Close</button>
                                <button type="submit" class="btn btn-primary accept-user">Accept User</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            tableContainer.insertAdjacentHTML('afterbegin', modal);

            const modalElement = document.getElementById('user-details');
            const bootstrapModal = new bootstrap.Modal(modalElement);

            bootstrapModal.show();

            if(data.role === 'teacher') {
                document.querySelector('.modal-body').insertAdjacentHTML('beforeend', `
                    <div class="row mb-2 mt-4 d-flex justify-content-center align-items-baseline gap-2 px-2">
                        <div class="col text-center flex-grow-1">
                            <strong>Grade Level: </strong>
                        </div>
                        <div class="col d-flex justify-content-center flex-grow-1">
                            <strong>Section: </strong>
                        </div>
                        <div class="email-input-label d-lg-flex d-sm-none col justify-content-center">
                            <strong>Email: </strong>
                        </div>
                    </div>
                    <div class="row my-2 d-flex justify-content-center align-items-baseline gap-2 px-2">
                        <div class="col input-column p-0 d-flex justify-content-center flex-column">
                            <select class="select-status" id="grade_level">
                                <option value="" hidden>-- Choose --</option>
                                <option value="1">Grade 1</option>
                                <option value="2">Grade 2</option>
                                <option value="3">Grade 3</option>
                                <option value="4">Grade 4</option>
                                <option value="5">Grade 5</option>
                                <option value="6">Grade 6</option>
                            </select>
                            <div class="input-grade_level-error hide">*Set Grade Level to verify user </div>
                        </div>
                        <div class="col input-column p-0 d-flex justify-content-center flex-column">
                            <select class="select-status" id="section" disabled required>
                                <option value="" hidden>-- Choose --</option>
                            </select>
                            <div class="input-section-error hide">*Set Section to verify user </div>
                        </div>
                        <div class="col input-column p-0 d-flex justify-content-center flex-column">
                            <strong class="d-sm-block d-lg-none" >Email: </strong>
                            <input type="text" value="${data.email}" placeholder="Set Email" id="email">
                        </div>
                    </div>
                    <div class="row mt-4 d-flex justify-content-center align-items-baseline">
                        <div class="col-4 input-column p-0 d-flex justify-content-center flex-column">
                            <select class="select-status" id="status">
                                <option value="" selected>Unverified</option>
                                <option value="verified">Verified</option>
                            </select>
                            <div class="input-select-error hide">*Verify User</div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col">
                            <strong>School: </strong>National Teacher College
                        </div>
                    </div>
                `);                
                gradeLevelSelection();
            }

            if(data.role === 'lgu') {
                document.querySelector('.modal-body').insertAdjacentHTML('beforeend', `
                    <div class="lgu-label row mb-2 mt-4 d-lg-flex d-sm-none justify-content-center align-items-baseline gap-2 px-2">
                        <div class="col d-flex justify-content-center">
                            <strong>Area: </strong>
                        </div>
                        <div class="col d-flex justify-content-center">
                            <strong>Type: </strong>
                        </div>
                        <div class="col d-flex justify-content-center">
                            <strong>Email: </strong>
                        </div>
                    </div>
                    <div class="row my-2 d-flex justify-content-center align-items-baseline gap-2 px-2">
                        <div class="col input-column p-0 d-flex justify-content-center flex-column">
                            <strong class="d-sm-block d-lg-none">Email: </strong>
                            <input type="text" required placeholder="Set Area" id="area">
                            <div class="input-area-error hide">*Set Area to verify user </div>
                        </div>
                        <div class="col input-column p-0 d-flex justify-content-center flex-column">
                            <strong class="d-sm-block d-lg-none">Type: </strong>
                            <input type="text" required placeholder="Set LGU Type" id="lgu_type">
                            <div class="input-lgu_type-error hide">*Set LGU Type to verify user </div>
                        </div>
                        <div class="col input-column p-0 d-flex justify-content-center flex-column">
                            <strong class="d-sm-block d-lg-none">Email: </strong>
                            <input type="text" value="${data.email}" placeholder="Set Email" id="email">
                        </div>
                    </div>
                    <div class="row mt-4 d-flex justify-content-center align-items-baseline">
                        <div class="col-4 input-column p-0 d-flex justify-content-center flex-column">
                            <select class="select-status" id="status"> 
                                <option value="" selected>Unverified</option>
                                <option value="verified">Verified</option>
                            </select>
                            <div class="input-select-error hide">*Verify User</div>
                        </div>
                    </div>
                `);
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
        document.querySelector('.student-table-container').innerHTML = `
            <div class="table-list d-sm-none d-lg-block">
                <table class="rounded-table" style="border-radius: 10px;">
                    <thead class="text-center">
                        <tr>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col"></th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Student Name</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">School Supplies</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">P.E Shirt Size</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">P.E Pants Size</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Polo / Blouse Size</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Slacks / Skirts Size</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Shoe Size</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="student-table-body">

                    </tbody>
                </table>
            </div>

            <div class="card-list d-sm-block d-lg-none">
                <table class="rounded-table w-100">
                    <thead>
                        <tr>
                            <th style="text-align: center;">Name</th>
                            <th style="text-align: center;">Action</th>
                        </tr>
                    </thead>
                    <tbody class="student-card-body">

                    </tbody>
                </table>
            </div>
        `;

        datas.forEach((data) => {
            document.querySelector('.student-table-body').insertAdjacentHTML('beforeend', `
                <tr>
                    <td style="border-right: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><input style="margin-left: 20px;" type="checkbox"></td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);">${data.first_name} ${data.last_name}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);">${data.school_supplies}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);">${data.t_shirt_size}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);">${data.pants_size}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);">${data.polo_blouse_size}</td>
                    <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);">${data.slacks_skirt_size}</td>
                    <td style="text-align: center; border-left: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);">${data.shoe_size}</td>
                </tr>
            `)
        });

        datas.forEach((data) => {
            document.querySelector('.student-card-body').insertAdjacentHTML('beforeend', `
                <tr>
                    <td style="text-align: center;">${data.first_name} ${data.last_name}</td>
                    <td>
                        <button class="btn btn-sm btn-primary view-btn" data-id="${data.student_id}">
                            View
                        </button>
                    </td>
                </tr>
            `);
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

function insertSingleStudentInfoModal(data) {
    document.body.insertAdjacentHTML('afterbegin', `
        <div class="modal fade card-student" id="studentModal1" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Student Info</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Student ID:</strong> ${data.student_id}</p>
                        <p><strong>Student Name:</strong> ${data.first_name} ${data.last_name}</p>
                        <p><strong>School Supplies:</strong> ${data.school_supplies}</p>
                        <p><strong>PE Shirt Size:</strong> ${data.t_shirt_size}</p>
                        <p><strong>PE Pants Size:</strong> ${data.pants_size}</p>
                        <p><strong>Polo / Blouse Size:</strong> ${data.polo_blouse_size}</p>
                        <p><strong>Slacks / Skirts Size:</strong> ${data.slacks_skirt_size}</p>
                        <p><strong>Shoe Size:</strong> ${data.shoe_size}</p>
                    </div>
                </div>
            </div>
        </div>
    `);

    const cardStudentContainer = document.querySelector('.card-student');
    const cardStudentModal = new bootstrap.Modal(cardStudentContainer);
    cardStudentModal.show();
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

            document.body.insertAdjacentHTML('afterbegin', `
                <div class="modal fade show print-modal" id="student-in-sections" tabindex="-1">
                    <div class="modal-dialog modal-xl ">
                        <div class="modal-content">
                            <div class="teacher-assigned"></div>
                            <div class="modal-body  d-flex flex-column justify-content-center px-5" id="content-to-print" style="background-color: #CEDCE6;">
                                <div class="student-table-container">

                                </div>
                                <div class="row mt-3 modal-container-btn">
                                    <div class="col">
                                        <button type="button" class="btn btn-secondary save-btn" data-bs-dismiss="modal">Back</button>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button type="button" class="btn btn-primary save-btn" id="print">Print</button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-student-footer"></div>
                        </div>
                    </div>
                </div>
            `)
            
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