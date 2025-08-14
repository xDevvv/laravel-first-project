<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; 

class LandingPageController extends Controller
{
    public function index()
    {
        $title_page = 'Home';
        return view('pages.landingPage', ['title_page' => $title_page]);
    }

    public function authChoicesPage()
    {
        $title_page = 'Authentication';
        return view('pages.authentication.authChoices', ['title_page' => $title_page]);
    }

    public function registerPage()
    {
        $title_page = 'Register';
        return view('pages.authentication.register', ['title_page' => $title_page]);
    }

    public function loginPage()
    {
        $title_page = 'Login';
        return view('pages.authentication.login', ['title_page' => $title_page]);
    }
}
