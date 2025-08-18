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
            <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                    <div class="col-3 error-handler">
                        @if(session()->has('errors'))
                            <div class="alert alert-success alert-dismissible fade show" role="alert" style="font-size: 13px;">
                                Request Denied!
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        @endif
                        @if (session()->has('success'))
                            <div class="alert alert-success alert-dismissible fade show" role="alert" style="font-size: 13px;">
                                Request Accepted Successfully!
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
            <div class="tab-header">
                <a href="/request" class="active">Request</a>
                <a href="/approve">Approved</a>
            </div>
            <div class="container-fluid table-columns">
                <div class="row mx-3 d-flex flex-row align-items-center table-col-container">
                    <div class="name-header-container col-sm-6 col-md-3 d-flex flex-sm-grow-1 justify-content-center p-0">
                        Name 
                    </div>
                    <div class="id-header-container d-sm-none col-md-3 d-md-flex flex-grow-1 justify-content-center p-0">
                        ID Number
                    </div>
                    <div class="role-header-container d-sm-none col-md-3 d-md-flex flex-grow-1 justify-content-center p-0">
                        Role
                    </div>
                    <div class="approval-header-container col-sm-6 col-md-3 d-flex flex-sm-grow-1 justify-content-center p-0">
                        Approval
                    </div>
                </div>
                <div class="container-xlg mt-3">
                    @foreach ($pendingUsers as $user )
                        <div class="row user-details-container mx-3 mb-4">
                            <div class="col d-flex justify-content-center align-items-center">
                                {{ $user['name'] }}
                            </div>
                            <div class="id-value-container col d-sm-none d-md-flex justify-content-center align-items-center">
                                {{ $user['pending_user_id'] }}
                            </div>
                            <div class="role-value-container col d-sm-none d-md-flex justify-content-center align-items-center">
                                {{ $user['role'] }}
                            </div>
                            <div class="col d-flex justify-content-center align-items-center gap-3">
                                <a class="btn btn-danger decline-btn" href="/request/decline/{{ $user['pending_user_id'] }}" role="button" >Decline</a>
                                <a class="btn btn-success details-btn" role="button" id="{{ $user['pending_user_id'] }}">Details</a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    @vite('resources/js/adminFunctionality.js')
@endsection