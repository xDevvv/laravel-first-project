<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lgu extends Model
{
    protected $primaryKey = 'lgu_id';
    public $incrementing = false;
    
    protected $table = 'lgus';
    /** @use HasFactory<\Database\Factories\LguFactory> */
    use HasFactory;

    protected $fillable = [
        'lgu_id',
        'name',
        'email',
        'role',
        'lgu_type',
        'area',
        'verification_date'
    ];
}
