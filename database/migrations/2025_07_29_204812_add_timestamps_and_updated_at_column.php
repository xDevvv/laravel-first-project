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
        Schema::table('teachers', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('students', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('sections', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('pending_users', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('lgus', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('approved_users', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('admins', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('user_login_infos', function (Blueprint $table) {
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
