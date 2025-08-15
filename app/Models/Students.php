<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    protected $primaryKey = 'student_id';
    public $incrementing = false;
    
    protected $table = 'students';
    /** @use HasFactory<\Database\Factories\StudentsFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'teacher_id',
        'first_name',
        'middle_name',
        'last_name',
        'age',
        'gender',
        'contact_number',
        'section',
        'grade_level',
        'height',
        'weight',
        't_shirt_size',
        'pants_size',
        'polo_blouse_size',
        'slacks_skirt_size',
        'shoe_size',
        'school_supplies',
    ];
}
