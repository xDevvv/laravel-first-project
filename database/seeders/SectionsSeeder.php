<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sections;

class SectionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sections = [
            ['section_name' => 'Mansanas', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Mangga', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Saging', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Pinya', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Papaya', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Pakwan', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Peras', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Bayabas', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Santol', 'grade_level' => 1, 'assigned_teacher_id' => null],
            ['section_name' => 'Dalandan', 'grade_level' => 1, 'assigned_teacher_id' => null],

            ['section_name' => 'Makadiyos', 'grade_level' => 2, 'assigned_teacher_id' => null],
            ['section_name' => 'Makatao', 'grade_level' => 2, 'assigned_teacher_id' => null],
            ['section_name' => 'Makakalikasan', 'grade_level' => 2, 'assigned_teacher_id' => null],
            ['section_name' => 'Matalino', 'grade_level' => 2, 'assigned_teacher_id' => null],
            ['section_name' => 'Matulungin', 'grade_level' => 2, 'assigned_teacher_id' => null],
            ['section_name' => 'Magaling', 'grade_level' => 2, 'assigned_teacher_id' => null],
            ['section_name' => 'Masipag', 'grade_level' => 2, 'assigned_teacher_id' => null],
            ['section_name' => 'Matapat', 'grade_level' => 2, 'assigned_teacher_id' => null],
            ['section_name' => 'Matiyaga', 'grade_level' => 2, 'assigned_teacher_id' => null],

            ['section_name' => 'Eagle', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Owl', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Stariling', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Sparrow', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Nightiangle', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Hawk', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Haribon', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Dove', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Turkey', 'grade_level' => 3, 'assigned_teacher_id' => null],
            ['section_name' => 'Hornbill', 'grade_level' => 3, 'assigned_teacher_id' => null],

            ['section_name' => 'Sampaguita', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Gumamela', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Kalachuchi', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Ilang-ilang', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Santan', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Waling-waling', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Camia', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Bougainvillea', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Rafflesia', 'grade_level' => 4, 'assigned_teacher_id' => null],
            ['section_name' => 'Sapria', 'grade_level' => 4, 'assigned_teacher_id' => null],

            ['section_name' => 'Diamond', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Ruby', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Emerald', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Sapphire', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Amethyst', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Topaz', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Garnet', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Aquamarine', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Opal', 'grade_level' => 5, 'assigned_teacher_id' => null],
            ['section_name' => 'Agate', 'grade_level' => 5, 'assigned_teacher_id' => null],

            ['section_name' => 'Rizal', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Bonifacio', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Aguinaldo', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Mabini', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Baltazar', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Del Pilar', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Luna', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Burgos', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Gomez', 'grade_level' => 6, 'assigned_teacher_id' => null],
            ['section_name' => 'Zamora', 'grade_level' => 6, 'assigned_teacher_id' => null],
        ];
        

        foreach ($sections as $section) {
            Sections::create($section);
        }
    }
}
