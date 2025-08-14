<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'username' => ['required', 'unique:pending_users,username'],
            'email' => ['required', 'email', 'unique:pending_users,email' ],
            'role' => 'required',
            'password' => ['required', 'min:8', 'max:15'],
            'ConfirmPassword' => 'required|same:password',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Name is required',
            'username.required' => 'Username is required',
            'username.unique' => 'Username already exists',
            'email.required' => 'Email is required',
            'email.email' => 'Invalid email format',
            'email.unique' => 'Email already exists',
            'role.required' => 'Role is required',
            'password.required' => 'Password is required',
            'password.min' => 'Password must be between 8 to 15 digits',
            'password.max' => 'Password must be between 8 to 15 digits',
            'ConfirmPassword.required' => 'Confirm Password is required',
            'ConfirmPassword.same' => 'Password and Confirm Password do not match',
        ];
    }
}
