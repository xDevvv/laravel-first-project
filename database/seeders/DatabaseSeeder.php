<?php

namespace Database\Seeders;
use Database\Seeders\SectionsSeeder;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        $this->call(SectionsSeeder::class);
    }
}
