<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lgu extends Model
{
    /** @use HasFactory<\Database\Factories\LguFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'role',
        'lgu_type',
        'area',
        'verification_date'
    ];
}
