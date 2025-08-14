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
        Schema::table('admins', function (Blueprint $table) {

            $table->foreign('admin_id')->references('approved_user_id')->on('approved_users')->onDelete('cascade');
        });

        Schema::table('lgus', function (Blueprint $table) {

            $table->foreign('lgu_id')->references('approved_user_id')->on('approved_users')->onDelete('cascade');
        });

        Schema::table('sections', function (Blueprint $table) {

            $table->foreign('assigned_teacher_id')->references('teacher_id')->on('teachers');
        });

        Schema::table('students', function (Blueprint $table) {

            $table->foreign('teacher_id')->references('teacher_id')->on('teachers');

            $table->foreign(['grade_level', 'section'])->references(['grade_level', 'section_name'])->on('sections')->onDelete('cascade');
        });

        Schema::table('teachers', function (Blueprint $table) {

            $table->foreign('teacher_id')->references('approved_user_id')->on('approved_users')->onDelete('cascade');

            $table->foreign(['grade_level', 'section'])->references(['grade_level', 'section_name'])->on('sections')->onDelete('cascade');

        });

        Schema::table('user_login_infos', function (Blueprint $table) 
        {
            $table->foreign('user_id')->references('approved_user_id')->on('approved_users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('table', function (Blueprint $table) {
            //
        });
    }
};
