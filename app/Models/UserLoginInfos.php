<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class UserLoginInfos extends Authenticatable
{

    protected $primaryKey = 'user_id';
    public $incrementing = false;
    
    protected $table = 'user_login_infos';
    /** @use HasFactory<\Database\Factories\UserLoginInfoFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'username',
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
