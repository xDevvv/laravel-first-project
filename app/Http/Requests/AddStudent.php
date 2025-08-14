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
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'label' => 'required|alpha',
            'middle_name' => 'nullable|alpha',
            'last_name' => 'required|alpha',
            'contact_no' => 'required|integer|digits:10',
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
            'label.required' => 'Firstname is required',
            'label.alpha' => 'Firstname cannot accept numerical or spaces',

            'middle_name.alpha' => 'Middle name cannot accept numerical spaces',

            'last_name.required' => 'Lastname is required',
            'last_name.alpha' => 'Lastname cannot accept numerical spaces',

            'contact_no.required' => 'Contact no. is required',
            'contact_no.integer' => 'Invalid Contact no.',
            'contact_no.digits' => 'Contact no. must be exactly 10 digits',

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
