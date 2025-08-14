<?php

namespace Database\Seeders;


use App\Models\ApprovedUser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApprovedUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ApprovedUser::create([
            'approved_user_id' => 123993842,
            'name' => 'Alexander Rex',
            'role' => 'admin',
            'date_approved' => now()->toDateString()
            ]);
    }
}
