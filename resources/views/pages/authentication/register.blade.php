@extends('base-layout.auth')

@section('navBarList')
    <li><a href="/">Home</a></li>
    <li><a href="login">Sign In</a></li>
@endSection

@section('content')
    @if(session()->has('success'))
        <div class="fade show teacher-lgu-success-notif" role="alert">
            <div class="alert alert-success fade show fw-bold" role="alert">
                {{ session('success') }}
            </div>
        </div>
    @endif
    <div class="container-fluid position-relative d-flex justify-content-center flex-column">
        <div class="position-absolute top-0 start-0 ms-4 img-logo-container">
            <img src="{{ asset('images/logo.png') }}" alt="RecordRack Logo" class="img-fluid img-logo">
        </div>
        <div class="form-header mt-5 mb-3">
            <h2 class="d-flex justify-content-center">Registration Form</h2>
        </div>
        <div class="d-flex justify-content-center pb-4">
            <div class="d-flex justify-content-center flex-column">
                <form method="POST" action="{{ route('register.submit') }}">
                    @csrf
                    @error('name') 
                        <div class="alert alert-danger alert-dismissible fade show error-container" role="alert">
                            {{ $message }}
                        </div>
                    @enderror
                    <div class="form-group register-input">
                        <input type="text" id="name" placeholder="Name" class="rounded-3 mb-4" name="name" value="{{ old('name') }}">
                        <label for="name">Name</label>
                    </div>

                    @error('username') 
                        <div class="alert alert-danger alert-dismissible fade show error-container" role="alert">
                            {{ $message }}
                        </div>
                    @enderror
                    
                    <div class="form-group register-input">
                        <input type="text" id="username" placeholder="Username" class="rounded-3 mb-4" name="username" value="{{ old('username') }}">
                        <label for="username">Username</label>
                    </div>

                    @error('email') 
                        <div class="alert alert-danger alert-dismissible fade show error-container" role="alert">
                            {{ $message }}
                        </div>
                    @enderror
                    <div class="form-group register-input">
                        <input type="email" id="email" placeholder="Email" class="rounded-3 mb-4" name="email" value="{{ old('email') }}">
                        <label for="email">Email</label>
                    </div>

                    @error('role') 
                        <div class="alert alert-danger alert-dismissible fade show error-container" role="alert">
                            {{ $message }}
                        </div>
                    @enderror
                    <div class="form-group register-input">
                        <select class="rounded-3 mb-4 reg-role-option" name="role" value="{{ old('role') }}">
                            <option value="" hidden>Select Role</option>
                            <option value="teacher" {{ old('role') == 'teacher' ? 'Selected' : '' }}>Teacher</option>
                            <option value="lgu" {{ old('role') == 'lgu' ? 'Selected' : '' }}>Lgu</option>
                        </select>
                    </div>

                    @error('password') 
                        <div class="alert alert-danger alert-dismissible fade show error-container" role="alert">
                            {{ $message }}
                        </div>
                    @endif
                    <div class="form-group register-input">
                        <input type="password" id="password" placeholder="Password" class="rounded-3 mb-4" name="password" value="{{ old('password') }}">
                        <label for="password">Password</label>
                    </div>

                    @error('ConfirmPassword') 
                        <div class="alert alert-danger alert-dismissible fade show error-container" role="alert">
                            {{ $message }}
                        </div>
                    @enderror
                    <div class="form-group register-input">
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" class="rounded-3 mb-4" name="ConfirmPassword" value="{{ old('ConfirmPassword') }}">
                        <label for="confirmPassword">Password Confirm</label>
                    </div>
                    <div class="line-container d-flex justify-content-center">
                        <div style=" border: 1px solid #3a3a3a; width: 250px;"></div>
                    </div>
                    <div class="reg-info d-flex justify-content-center mt-2">
                        Already have an Account? <span><a href="{{ route('auth.login') }}">Sign In</a></span>
                    </div>
                    <div class="container d-flex justify-content-center">
                        <button type="submit" class="sign-up-btn">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endSection

@section('footer')
    <div class="container-fluid line"></div>
@endSection

@section('script')
    @vite('resources/js/authentication.js')
@endsection