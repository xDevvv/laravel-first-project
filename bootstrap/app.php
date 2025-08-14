<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

use App\Http\Middleware\isAdmin;
use App\Http\Middleware\isTeacher;
use App\Http\Middleware\isLgu;
use App\Http\Middleware\isLogOut;
use App\Http\Middleware\isLoggedIn;


return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {

        $middleware->alias([
            'is_login' => isLoggedIn::class,
            'is_logout' => isLogOut::class,
            'is_admin_user' => isAdmin::class,
            'is_teacher_user' => isTeacher::class,
            'is_lgu_user' => isLgu::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
