@extends('base-layout.main')


@section('navBarList')
    <li><a href="#">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Info</a></li>
    <li><a href="#">Contact Us</a></li>
@endSection

@section('content')
    <div class="container-fluid" style="margin-bottom: 1px;">
        <div class="row d-flex justify-content-center px-0">
            <div class="col-md-12 col-lg-6 col-xxl-5 p-4 p-lg-0 p-sm-0 first-column">
                <div class="d-none d-lg-block d-xxl-block line-deco-top">
                    <div class="dark-color-line"></div>
                    <div class="light-color-line"></div>
                </div>
                <div class="container-fluid component-holder px-sm-5 px-md-5 ">
                    <h1>RECORDRACK</h1>
                    <h6>Say Goodbye To Long Lines and Manual Errors</h6>
                    <p>
                        It's time to modernize the system with RECORDRACK - a streamlined, automated solution that ensures a smoother experience for students, teachers, and LGU staff alike.
                    </p>
                    <a href="/auth" class="get-started-btn rounded-5 px-4">GET STARTED</a>
                </div>
                <div class="d-none d-lg-block d-xxl-block line-deco-bottom">
                    <div class="dark-color-line"></div>
                    <div class="light-color-line"></div>
                </div>
            </div>
            <div class="col-md-12 col-lg-6 col-xxl-5 p-4 p-lg-0 px-sm-4 second-column">
                <div class="d-none d-lg-block d-xxl-block line-deco-top">
                    <div class="dark-color-line"></div>
                    <div class="light-color-line"></div>
                </div>
                <div class="landing-page-img-container">
                    <img src="{{ asset('images/landingPage.png') }}" class="img-fluid" alt="..." style="height: 500px;">
                </div>
            </div>
        </div>
    </div>
@endSection

@section('footer')
    <div class="container-fluid line"></div>
@endSection