@extends('base-layout.auth')

@section('navBarList')
    <li><a href="/">Home</a></li>
    <li><a href="/register_user">Sign Up</a></li>
@endSection

@section('content')
    @if(session()->has('error'))
        <div class="fade show teacher-lgu-success-notif" role="alert">
            <div class="alert alert-success fade show fw-bold" role="alert">
                {{ session('error') }}
            </div>
        </div>
    @endif
    <div class="container-fluid component-container d-flex justify-content-center flex-column">
        <div class="img-container d-flex justify-content-center">
            <div class="spinner-wrapper">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <img src="{{ asset('images/logo.png') }}" alt="RecordRack Logo" class="img-fluid img-logo" style="width: 200px;">
        </div>
        <form method="POST" action="{{ route('login.submit') }}">
            @csrf
            <div class="d-flex justify-content-center">
                <div class="d-flex justify-content-center flex-column">
                    @error('username') 
                        <div class="alert alert-danger alert-dismissible fade show error-container" role="alert">
                            {{ $message }}
                        </div>
                    @endif
                    
                    <div class="form-group login-input d-flex justify-content-center flex-column mb-2">
                        <input type="text" id="username" placeholder="Username" class="rounded-3 mb-2" name="username">
                        <label for="username">Username</label>
                    </div>
                    
                    @error('password') 
                        <div class="alert alert-danger alert-dismissible fade show error-container" role="alert">
                            {{ $message }}
                        </div>
                    @endif
                        
                    <div class="form-group login-input d-flex justify-content-center flex-column">
                        <input type="password" id="password" placeholder="Password" class="rounded-3 mb-2" name="password">
                        <label for="password">Password</label>
                    </div>
                </div>
            </div>
            <div class="container d-flex justify-content-center" style="width: 250px;">
                <div style=" border: 1px solid #3a3a3a; width: 350px; margin-top: 5px;"></div>
            </div>
            <div class="reg-info d-flex justify-content-center mt-2">
                Don't have an Account? <span><a href="{{ route('auth.register') }}">Sign Up</a></span>
            </div>
            <div class="container d-flex justify-content-center">
                <button type="submit" class="sign-up-btn">Sign In</button>
            </div>
        </form>
    </div>
@endsection() 

@section('footer')
    <div class="container-fluid line"></div>
@endSection

@section('script')
    @vite('resources/js/authentication.js')
@endsection