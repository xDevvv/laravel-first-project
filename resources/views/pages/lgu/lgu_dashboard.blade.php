@extends('base-layout.main')

@section('navBarList')
    <li><a href="/logout_user">Logout</a></li>
@endSection
    
@section('content')
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="myToast" class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    Hello! Please select Grade level and Product.
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog modal-xl" id="lgu-modal-1-container">
        </div>
    </div>
    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl" id="lgu-modal-2-container">
            <div class="modal-content">
                <div class="modal-body contents">
                    <div class="container-fluid d-flex justify-content-end mb-2">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="container-fluid student-information-supplies modal-student-information-container mb-3">
                        <div class="row">
                            <div class="col py-3 per-section-info">
                                <div class="container file place-holder">
                                    <div class="row pt-3 d-flex justify-content-center align-items-center place-holder">
                                        <h6 style="color: gray;">Choose File...</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col py-3 d-flex flex-column second-modal-column">
                                <div class="container-fluid"> 
                                    <div class="row modal-file-select-container">
                                        <h2>Files</h2>
                                        <div class="container file-dropdown">
                                            <select name="chosen-file" id="modal-select-file">
                                                <option value="" hidden> -- Choose -- </option>
                                                <option value="overall">Overall</option>
                                                <option value="per-section">Per Section</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row gap-3">
                                        <div class="col back-btn">
                                            <button class="compute-btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back</button>
                                        </div>
                                        <div class="print-btn col d-flex justify-content-end">
                                            <button class="compute-btn" id="lgu-print">Print</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid px-5">
        <div class="container-fluid d-flex gap-5 mt-5">
            <div>Selection</div>
            <div>Computed</div>
            <div>Print</div>
        </div>
        <div class="container-xlg lgu-content mt-3 mb-5 p-3">
            <div class="lgu-grade-lvl-container">
                <div class="lgu-content-heading ps-4">
                    <h3>Grade Level</h3>
                    <div class="line-separation"></div>
                </div>
                <div class="row grade-lvl mt-4 mb-5">
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-grade-btn grade-check-btn" id="1">Grade 1</button>
                    </div>
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-grade-btn grade-check-btn" id="2">Grade 2</button>
                    </div>
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-grade-btn grade-check-btn" id="3">Grade 3</button>
                    </div>
                </div>
                <div class="row grade-lvl my-5">
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-grade-btn grade-check-btn" id="4">Grade 4</button>
                    </div>
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-grade-btn grade-check-btn" id="5">Grade 5</button>
                    </div>
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-grade-btn grade-check-btn" id="6">Grade 6</button>
                    </div>
                </div>
            </div>
            <div class="lgu-grade-lvl-container">
                <div class="lgu-content-heading ps-4">
                    <h3>Type of Product</h3>
                    <div class="line-separation"></div>
                </div>
                <div class="row grade-lvl mt-4 mb-5">
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-product-btn product-check-btn" id="school_supplies">School Supplies</button>
                    </div>
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-product-btn product-check-btn" id="t_shirt_size">P.E Shirt</button>
                    </div>
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-product-btn product-check-btn" id="pants_size">P.E Pants</button>
                    </div>
                </div>
                <div class="row grade-lvl my-5">
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-product-btn product-check-btn" id="slacks_skirt_size">Slacks & Skirt</button>
                    </div>
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-product-btn product-check-btn" id="polo_blouse_size">Polo & Blouse</button>
                    </div>
                    <div class="col d-flex justify-content-center my-4">
                        <button type="button" class="lgu-product-btn product-check-btn" id="shoe_size">Shoes</button>
                    </div>
                </div>
            </div>
            <div class="container-fluid compute-btn-container d-flex justify-content-end">
                <button class="compute-btn final-compute" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Compute</button>
            </div>
        </div>
    </div>
@endsection

@section('footer')
    <div class="container-fluid line"></div>
@endsection

@section('script')
    @vite('resources/js/lgu/lguFunctionality.js')
@endsection