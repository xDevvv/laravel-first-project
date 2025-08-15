<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApprovedUser extends Model
{
    protected $primaryKey = 'approved_user_id';
    public $incrementing = false;
    
    protected $table = 'approved_users';

    /** @use HasFactory<\Database\Factories\ApprovedUserFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'date_approved',
    ];
}
