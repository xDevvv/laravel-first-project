@extends('base-layout.main')


@section('adminNavBarList')
    <li><a href="/admin">Home</a></li>
    <li><a href="/request">Request</a></li>
    <li><a href="/logout_user">Logout</a></li>
@endsection

@section('pendingRequestsCount')
    <div class="notification-count">
        {{ $pendingRequestsCount }}
    </div>
@endsection

@section('adminSideNavBarList')
    <li><a id="home" href="/admin">Home</a></li>
    <li><a id="about" href="/request">Request <span>{{ $pendingRequestsCount }}</span></a></li>
    <li><a id="projects" href="/logout_user">Logout</a></li>
@endsection

@section('content')
    <div class="container-fluid" style="margin-bottom: 1px;">
        <div class="container-fluid d-flex justify-content-end mt-3 pe-5 align-items-center position-relative">
            <div class="menu-icon-container">
                <i class='bx bx-menu bx-sm'></i>
            </div>
            <div class="search-input-container">
                <input type="text" id="search" placeholder="Search" class="mb-2">
            </div>
            <div class="search-icon-container">
                <i class='bx bx-search-alt-2 bx-sm'></i>
            </div>
        </div>
        <div class="container-xlg class-section-container">
            <div class="elementary-container mt-5">
                <div class="col p-0 d-flex justify-content-center grd-container">
                    <div class="grade-lvl-container d-flex justify-content-center align-items-center px-lg-5 px-sm-5 rounded-2">
                        ELEMENTARY GRADE LEVEL
                    </div>
                </div>
                <div class="row d-flex justify-content-between mt-3 gap-2">
                    <div class="col p-0 d-flex justify-content-center grd-container">
                        <div class="dropdown d-flex justify-content-center" id="dropdown1">
                            <div class="dropdown-toggle section-dropdown" id="1">GRADE 1 SECTIONS </div>
                            <div class="dropdown-menus grade-1"></div>
                        </div>
                    </div>
                    <div class="col p-0 d-flex justify-content-center grd-container">
                        <div class="dropdown d-flex justify-content-center" id="dropdown1">
                            <div class="dropdown-toggle section-dropdown" id="2">GRADE 2 SECTIONS </div>
                            <div class="dropdown-menus grade-2"></div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-between mt-3 gap-2">
                    <div class="col p-0 d-flex justify-content-center grd-container">
                        <div class="dropdown d-flex justify-content-center" id="dropdown1">
                            <div class="dropdown-toggle section-dropdown" id="3">GRADE 3 SECTIONS </div>
                            <div class="dropdown-menus grade-3"></div>
                        </div>
                    </div>
                    <div class="col p-0 d-flex justify-content-center grd-container">
                        <div class="dropdown d-flex justify-content-center" id="dropdown1">
                            <div class="dropdown-toggle section-dropdown" id="4">GRADE 4 SECTIONS </div>
                            <div class="dropdown-menus grade-4"></div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-between mt-3 gap-2">
                    <div class="col p-0 d-flex justify-content-center grd-container">
                        <div class="dropdown d-flex justify-content-center" id="dropdown1">
                            <div class="dropdown-toggle section-dropdown" id="5">GRADE 5 SECTIONS </div>
                            <div class="dropdown-menus grade-5"></div>
                        </div>
                    </div>
                    <div class="col p-0 d-flex justify-content-center grd-container">
                        <div class="dropdown d-flex justify-content-center" id="dropdown1">
                            <div class="dropdown-toggle section-dropdown" id="6">GRADE 6 SECTIONS </div>
                            <div class="dropdown-menus grade-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection()

@section('script')
    @vite('resources/js/adminFunctionality.js')
@endsection