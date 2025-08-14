@extends('base-layout.auth')

@section('content')
    <div class="container-fluid" style="margin-bottom: 1px;">
        <div class="row">
            <div class="content-header container-fluid d-flex justify-content-center align-items-center flex-column mt-4 px-0">
                <div class="row header-text">RECORDRACK</div>
                <div class="row header-sub-text">Organize Student Records and Supplies, All in One Place</div>
            </div>
            <div class="container-fluid" style="margin-bottom: 90px;">
                <div class="row components-container">
                    <div class="img-container">
                        <div class="spinner-wrapper">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <img src="{{ asset('images/logo.png') }}" alt="RecordRack Logo" class="img-fluid img-logo">
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-3">
                    <div class="d-flex justify-content-center flex-column gap-2 auth-btn-container">
                        <a href="auth/register" class="btn" style="background-color: #2A74A4; color: white; width: 250px; padding: 15px 0px; border-radius: 50px; border: 1px solid black; font-weight: bold;">Register</a>
                        <a href="auth/login" class="btn" style="background-color: #2A74A4; color: white; width: 250px; padding: 15px 0px; border-radius: 50px;  border: 1px solid black; font-weight: bold;">Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>    
@endSection()

@section('footer')
    <div class="container-fluid line"></div>
@endSection