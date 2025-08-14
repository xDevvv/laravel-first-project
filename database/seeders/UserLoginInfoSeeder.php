<?php

namespace Database\Seeders;

use App\Models\UserLoginInfo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserLoginInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserLoginInfo::create([
            'user_id' => 123993842,
            'name' => 'Alexander Rex',
            'username' => 'rexxy',
            'role' => 'admin',
            'password' => 'samplepassword'
        ]);
    }
}
