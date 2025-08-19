<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddStudent extends FormRequest
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
            'student_id' => 'required|unique:students,student_id',
            'teacher_id' => 'required',
            'first_name' => 'required|alpha',
            'middle_name' => 'nullable|alpha',
            'last_name' => 'required|alpha',
            'contact_number' => 'required|integer|digits:11',
            'age' => 'required|integer',
            'gender' => 'required',
            'grade_level' => 'required|integer',
            'section' => 'required',
            'weight' => 'required|integer',
            'height' => 'required|integer',
            't_shirt_size' => 'required',
            'pants_size' => 'required',
            'polo_blouse_size' => 'required',
            'slacks_skirt_size' => 'required',
            'shoe_size' => 'required|integer|digits:2',
            'school_supplies' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'student_id' => 'Student ID is required',
            'first_name.required' => 'Firstname is required',
            'first_name' => 'Firstname cannot accept numerical or spaces',

            'middle_name.alpha' => 'Middle name cannot accept numerical spaces',

            'last_name.required' => 'Lastname is required',
            'last_name.alpha' => 'Lastname cannot accept numerical spaces',

            'contact_no.required' => 'Contact no. is required',
            'contact_number.integer' => 'Invalid Contact no.',
            'contact_number.digits' => 'Contact no. must be exactly 10 digits',

            'age.required' => 'Age is required',
            'age.integer' => 'Invalid Age',

            'gender.required' => 'Gender is required',

            'grade_level.required' => 'Grade Level is required',
            'grade_level.integer' => 'Invalid Grade Level',

            'section.required' => 'Section is required',

            'weight.required' => 'Weight is required',
            'weight.integer' => 'Invalid Weight',

            'height.required' => 'Height is required',
            'height.integer' => 'Invalid Height',

            't_shirt_size.required' => 'T-Shirt Size is required',

            'pants_size.required' => 'Pants Size is required',

            'polo_blouse_size.required' => 'Polo / Blouse Size is required',

            'slacks_skirt_size.required' => 'Slacks / Skirt Size is required',

            'shoe_size.required' => 'T-Shirt Size is required',
            'shoe_size.integer' => 'Invalid Shoe Size',
            'shoe_size.digits' => 'Invalid Size',

            'school_supplies.required' => 'School Supplies is required',
        ];
    }
}
