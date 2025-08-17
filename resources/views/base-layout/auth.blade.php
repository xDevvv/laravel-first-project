<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    @vite(['resources/sass/app.scss'])
    @vite(['resources/js/pagesBehavior.js'])
    @vite(['resources/js/authChoices.js'])
    @vite(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'])
    <title>{{ $title_page }}</title>
</head>
<body>

    @if (Request::is('/register'))
        <header>
            <div class="container-fluid line"></div>
            <div class="container-fluid line2"></div>
            <div class="row col-container w-100">
                <div class="col-6 text-logo mx-0">
                    <div class="header-text">RECORDRACK</div>
                </div>
                <div class="col-6 mx-0 d-flex justify-content-end align-items-center pe-3 pe-md-5 nav-bar-container">
                    <div class="d-none d-md-block header-nav">
                        <ul class="d-flex gap-5 justify-content-center align-items-center">
                            @yield('navBarList')
                        </ul>
                    </div>
                    <nav class="d-block d-md-none navbar navbar-expand-md">
                        <div class="container-fluid p-0 d-flex flex-column" id="burger-menu">
                            <!-- Hamburger toggle button -->
                            <button class="btn toggle-btn-md"  class="burger-menu-btn">
                                <span style="font-size: 30px; color: white;">
                                    <i id="burger-menu" class="fa-solid fa-bars"></i>
                                </span>
                            </button>
                                <!-- Sidebar -->
                            <div id="sidebar" class="sidebar">
                                @yield('navBarList')
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    @endif
    <main>
        <div class="container-fluid d-flex justify-content-center align-items-center">
            @yield('content')
        </div>    
    </main>

    <footer>
        @yield('footer')
    </footer>

    @yield('script')
</body>
</html>