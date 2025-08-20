<?php

namespace App\Policies;

use App\Models\Students;
use App\Models\UserLoginInfos;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Access\Response;

class StudentPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(UserLoginInfos $userLoginInfos): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(UserLoginInfos $userLoginInfos, Students $students): bool
    {
        return $userLoginInfos->role === 'admin' || $userLoginInfos->user_id === $students->teacher_id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(UserLoginInfos $userLoginInfos): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(UserLoginInfos $userLoginInfos, Students $students): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(UserLoginInfos $userLoginInfos, Students $students): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(UserLoginInfos $userLoginInfos, Students $students): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(UserLoginInfos $userLoginInfos, Students $students): bool
    {
        return false;
    }
}
