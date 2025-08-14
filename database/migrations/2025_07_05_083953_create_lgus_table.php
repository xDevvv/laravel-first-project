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
        Schema::create('lgus', function (Blueprint $table) {
            $table->unsignedBigInteger('lgu_id');
            $table->primary('lgu_id');
            // $table->foreign('lgu_id')->references('approved_user_id')->on('approved_users')->onDelete('cascade');
            $table->string('name');
            $table->string('email')->unique();
            $table->enum('role', ['Teacher', 'Admin', 'Lgu']);
            $table->string('lgu_type');
            $table->string('area');
            $table->date('verification_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lgus');
    }
};
