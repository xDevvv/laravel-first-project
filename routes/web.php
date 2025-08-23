<?php


use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\LguController;
use App\Http\Controllers\TeacherController;

use Illuminate\Support\Facades\Route;


// Register - Login - Logout Handler
Route::post('/register_user', [AuthenticationController::class, 'register'])->name('register.submit');
Route::post('/login_user', [AuthenticationController::class, 'login'])->name('login.submit');
Route::get('/logout_user', [AuthenticationController::class, 'logout']);


Route::middleware('is_login')->group(function () {

    // Landing Page Routes
    Route::get('/', [LandingPageController::class, 'index'])->name('landingPage.index');
    Route::get('auth', [LandingPageController::class, 'authChoicesPage'])->name('auth.choices');

    // Authentication Choices
    Route::get('auth/register', [LandingPageController::class, 'registerPage'])->name('auth.register');
    Route::get('auth/login', [LandingPageController::class, 'loginPage'])->name('auth.login');
});

Route::middleware(['is_logout'])->group(function () {
    // Admin Pages Routes
    Route::get('admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('request', [AdminController::class, 'pendingRequests'])->name('admin.pendingRequests');
    Route::get('approve', [AdminController::class, 'showApprovedRequests'])->name('admin.showApprovedRequest');

    // Admin and Teacher Functionality
    Route::get('request/student/{student}', [AdminController::class, 'fetchSpecificStudent']);
    
    // Teacher Pages Route
    Route::get('teacher', [TeacherController::class, 'dashboard'])->name('teacher.dashboard');
    Route::get('student_information', [TeacherController::class, 'studentInformation'])->name('teacher.studentInformation');

    // LGU Pages Routes
    Route::get('lgu', [LguController::class, 'dashboard'])->name('lgu.dashboard');
});


Route::middleware('is_admin_user')->group(function () {
    // Admin Functionality
    Route::post('/request/accept/{id}', [AdminController::class, 'acceptRequest'])->name('admin.acceptRequest');
    Route::get('request/decline/{id}', [AdminController::class, 'declineRequest']);
    Route::get('request/details/{id}', [AdminController::class, 'requestDetails']);
    Route::get('request/sections/available/{id}', [AdminController::class, 'fetchAvailableSections']);
    Route::get('request/sections/all/{gradeLevel}', [AdminController::class, 'fetchAllSections']);
    Route::get('request/students/{gradeLevel}/{section}', [AdminController::class, 'fetchStudents']);
    Route::get('request/teacher/{gradeLevel}/{section}', [AdminController::class, 'fetchTeachers']);
    
});

Route::middleware('is_teacher_user')->group(function () {
    // Teacher Request Functionality
    Route::post('/add_student', [TeacherController::class, 'addStudent'])->name('teacher.addStudent');
});

Route::middleware('is_lgu_user')->group(function () {
    
    // Lgu Request Functionality
    Route::get('request/section/{gradeLevel}/{section}', [LguController::class, 'sectionPerGradeLevel']);
    Route::get('request/student/per_section/{gradeLevel}', [LguController::class, 'overallStudentPerSection']);
    Route::get('request/info/{gradeSelected}/{productSelected}', [LguController::class, 'studentRecords'])->name('lgu.dashboard');
});