<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class UserLoginInfos extends Authenticatable
{

    protected $primaryKey = 'username';
    public $incrementing = false;
    protected $keyType = 'string';
    
    protected $table = 'user_login_infos';
    /** @use HasFactory<\Database\Factories\UserLoginInfoFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'username',
        'email',
        'role',
        'password'
    ];

    protected $hidden = [
        'password',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }
}
