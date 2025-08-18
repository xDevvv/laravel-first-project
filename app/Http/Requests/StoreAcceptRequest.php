<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class StoreAcceptRequest extends FormRequest
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
        $rules = [
                'id' => 'required',
                'name' => 'required',
                'role' => 'required',
                'email' => 'required',
                'status' => 'required',
        ];

        $role = request()->input('role');

        if ($role == 'teacher') {
            $rules['grade_level'] = 'required';
            $rules['section'] = 'required';
        }

        if($role == 'lgu') {
            $rules['lgu_type'] = 'required';
            $rules['area'] = 'required';
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'id.required' => 'ID is required',
            'name.required' => 'Name is required',
            'role.required' => 'Role is required',
            'email.required' => 'Email is required',
            'status.required' => 'Status is required',
            'gradeLevel.required' => 'Grade Level is required',
            'section.required' => 'Section is required',
            'area.required' => 'Area is required',
        ];
    }
}
