export function defaultDetailsLayout(data) {
    return `
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
}

export function teacherDetailsLayout(data) {
    return `
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
    `;
}

export function lguDetailsLayout(data) {
    return `
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
    
    
    `;
}

export function studentTableHeader() {
    return `
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
}

export function studentTableBody(data) {
    return `
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
    `;
}

export function studentCardBody(data) {
    return `
        <tr>
            <td style="text-align: center;">${data.first_name} ${data.last_name}</td>
            <td>
                <button class="btn btn-sm btn-primary view-btn" data-id="${data.student_id}">
                    View
                </button>
            </td>
        </tr>
    `;
}

export function insertSingleStudentInfoModal(data) {
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

export function selectedSectionLayout() {
    return `
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
    `;
}