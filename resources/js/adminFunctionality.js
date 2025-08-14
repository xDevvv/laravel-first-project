
// Request Notification in Navbar
const pendingUserContainer = document.querySelector('.notification-count');

if(pendingUserContainer !== null) {
    if(pendingUserContainer.innerHTML == 0) pendingUserContainer.classList.add('hide')
}

// Admin Page Dashboard (Dropdown)

document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', function () {
        this.parentElement.classList.toggle('show');
    });
});


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
                            <th style="text-align: center; border-left: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Shoe Size</th>
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
                            <th>Action</th>
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
                        <button class="btn btn-sm btn-primary" onclick="fetchSpecificStudent(${data.student_id}, ${data.grade_level}, '${data.section}')">
                            View
                        </button>
                    </td>
                </tr>
            `);
        });
        
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

async function fetchSpecificStudent(id, grade_level, section) {

    const response = await fetch(`request/specific-student/${id}/${grade_level}/${section}`);
    const data = await response.json();

    const modalElement = document.querySelector('.print-modal');
    const modal = bootstrap.Modal.getInstance(modalElement);

    console.log(data);


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