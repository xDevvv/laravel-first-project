<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sections extends Model
{
    /** @use HasFactory<\Database\Factories\SectionsFactory> */
    use HasFactory;

    protected $fillable = [
        'section_name',
        'grade_level',
        'assigned_teacher_id',
    ];
}
