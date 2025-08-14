<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingUsers extends Model
{
    /** @use HasFactory<\Database\Factories\PendingUsersFactory> */
    use HasFactory;

    protected $fillable = [
        'pending_user_id',
        'name',
        'username',
        'email',
        'role',
        'password',
        'registered_at',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'password' => 'hashed'
    ];
}
