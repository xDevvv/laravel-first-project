<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->unsignedBigInteger('student_id');
            $table->primary('student_id');
            $table->unsignedBigInteger('teacher_id');
            // $table->foreign('teacher_id')->references('teacher_id')->on('teachers');
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('last_name');
            $table->smallInteger('age');
            $table->enum('gender', ['Female', 'Male']);
            $table->bigInteger('contact_number');
            $table->string('section');
            $table->tinyInteger('grade_level');
            $table->tinyInteger('height');
            $table->enum('t_shirt_size', ['Extra Small' ,'Small', 'Medium', 'Large', 'Extra Large']);
            $table->enum('pants_size', ['Extra Small' ,'Small', 'Medium', 'Large', 'Extra Large']);
            $table->enum('polo_blouse_size', ['Extra Small' ,'Small', 'Medium', 'Large', 'Extra Large']);
            $table->enum('slacks_skirt_size', ['Extra Small' ,'Small', 'Medium', 'Large', 'Extra Large']);
            $table->tinyInteger('shoe_size');
            $table->enum('school_supplies', ['yes', 'no']);
            // $table->foreign(['grade_level', 'section'])->references(['grade_level', 'section_name'])->on('sections')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
