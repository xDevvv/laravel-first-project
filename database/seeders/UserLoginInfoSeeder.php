<?php

namespace Database\Seeders;

use App\Models\UserLoginInfos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserLoginInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserLoginInfos::create([
            'user_id' => 123993842,
            'name' => 'Alexander Rex',
            'username' => 'rexxy',
            'role' => 'admin',
            'password' => 'samplepassword'
        ]);
    }
}
