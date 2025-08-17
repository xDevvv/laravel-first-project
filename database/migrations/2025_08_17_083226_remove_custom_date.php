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
            $table->dropColumn('verification_date'); 
        });
        Schema::table('approved_users', function (Blueprint $table) {
            $table->dropColumn('date_approved'); 
        });
        Schema::table('lgus', function (Blueprint $table) {
            $table->dropColumn('verification_date'); 
        });
        Schema::table('pending_users', function (Blueprint $table) {
            $table->dropColumn('registered_at'); 
        });
        Schema::table('teachers', function (Blueprint $table) {
            $table->dropColumn('verification_date'); 
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
