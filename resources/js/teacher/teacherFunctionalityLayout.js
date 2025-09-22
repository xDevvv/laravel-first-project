export function modalToDeleteStudent() {
    document.querySelector("body").insertAdjacentHTML('beforeend', `
        <div class="modal fade" id="deleteModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger">Confirm Student Deletion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>The following students will be deleted:</p>
                    <table class="table table-striped" id="studentsToDelete">
                        <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger delete-confirm-btn">Confirm Delete</button>
                </div>
            </div>
        </div>
    `);

}