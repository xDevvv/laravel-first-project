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

@section('adminNavBarListSideBar')
    <li><a id="home" href="/admin">Home</a></li>
    <li><a id="about" href="/request">Request <span>{{ $pendingRequestsCount }}</span></a></li>
    <li><a id="projects" href="/logout">Logout</a></li>
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
        <div class="container-fluid main-container">
            <div class="tab-header">
                <a href="/request">Request</a>
                <a href="/approve" class="active">Approved</a>
            </div>
            <div class="container-fluid table-columns">
                <div class="row mx-3 d-flex flex-row align-items-center table-col-container">
                    <div class="modal-input-label row mx-3 d-flex flex-row align-items-center table-col-container">
                        <div class="name-header-container col col-sm-6 col-md-3 d-flex flex-sm-grow-1 justify-content-center p-0">
                            Name
                        </div>
                        <div class="id-header-container d-sm-none col-md-3 d-md-flex flex-grow-1 justify-content-center p-0">
                            ID Number
                        </div>
                        <div class="role-header-container d-sm-none col-md-3 d-md-flex flex-grow-1 justify-content-center p-0">
                            Role
                        </div>
                        <div class="approval-header-container col-sm-6 col-md-3 d-flex flex-sm-grow-1 justify-content-center p-0">
                            Date Approved
                        </div>
                    </div>
                </div>
                <div class="container-xlg mt-3">
                    @foreach ($approvedUsers as $user)
                        <div class="row user-details-container mx-3 mb-4">
                            <div class="col d-flex justify-content-center align-items-center">
                                {{ $user['name'] }}
                            </div>
                            <div class="id-value-container col d-sm-none d-md-flex justify-content-center align-items-center">
                                {{ $user['approved_user_id'] }}
                            </div>
                            <div class="role-value-container col d-sm-none d-md-flex justify-content-center align-items-center">
                                {{ $user['role'] }}
                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                {{ $user['created_at']->format('l, F j, Y') }}
                            </div>
                        </div>
                    @endforeach
                </div>    
            </div>
        </div>
    </div>
@endsection()

@section('script')
    @vite('resources/js/adminFunctionality.js')
@endsection