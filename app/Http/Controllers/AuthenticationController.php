<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Models\PendingUsers;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $validatedData = $request->validated();

        $id = 0;

        if(Str::of($validatedData['role'])->trim() == 'teacher') {$id = rand(400000000, 499999999);}
        if(Str::of($validatedData['role'])->trim() == 'lgu') {$id = rand(300000000, 399999999);}
        

        PendingUsers::create([
            'pending_user_id' => $id,
            'name'          => Str::of($validatedData['name'])->trim(),
            'username'      => Str::of($validatedData['username'])->trim(),
            'email'         => Str::of($validatedData['email'])->trim(),
            'role'          => Str::of($validatedData['role'])->trim(),
            'password'      => bcrypt($validatedData['password']),
        ]);

        return redirect()->route('auth.register')->with('success', 'Registration Successful! Please wait for Admin Approval.');
    }

    public function login(LoginRequest $request)
    {
        $validatedData = $request->validated();

        $pendingUser = PendingUsers::where('username', $validatedData['username'])->first();

        if($pendingUser) {
            return redirect()->route('auth.login')->with('error', 'Your Account is on Processing.');
        }

        $credentials = [
            'username' => $validatedData['username'],
            'password' => $validatedData['password']
        ];

        if(Auth::attempt($credentials)) {
            session()->regenerate();
            
            if(Auth::user()->role == 'teacher') {
                return redirect()->intended('/teacher');
            }
            if(Auth::user()->role == 'lgu') {
                return redirect()->intended('/lgu');
            }

            return redirect()->intended('/admin');
        }

        return redirect()->back()->with('error', 'Invalid Credentials!');
    }

    
    public function logout()
    {
        Auth::logout();
        return redirect()->route('landingPage.index');
    }
}
