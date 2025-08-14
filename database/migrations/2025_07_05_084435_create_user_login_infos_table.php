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
        Schema::create('user_login_infos', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->primary('user_id');
            $table->foreign('user_id')->references('approved_user_id')->on('users')->onDelete('cascade');
            $table->string('name');
            $table->string('username');
            $table->string('role');
            $table->string('password');
        });

        Schema::table('user_login_infos', function (Blueprint $table) {
            $table->timestamps('created_at'); // 👈 Adds created_at and updated_at
            $table->timestamps('updated_at'); // 👈 Adds created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_login_infos');
    }
};
