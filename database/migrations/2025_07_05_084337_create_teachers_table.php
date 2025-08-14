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
        Schema::create('teachers', function (Blueprint $table) {
            $table->unsignedBigInteger('teacher_id');
            $table->primary('teacher_id');
            // $table->foreign('teacher_id')->references('approved_user_id')->on('users')->onDelete('cascade');
            $table->string('name');
            $table->string('email')->unique();
            $table->enum('role', ['Teacher', 'Admin', 'Lgu']);
            $table->tinyInteger('grade_level');
            $table->string('section');
            // $table->foreign(['grade_level', 'section'])->references(['grade_level', 'section_name'])->on('sections')->onDelete('cascade');
            $table->date('verification_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
