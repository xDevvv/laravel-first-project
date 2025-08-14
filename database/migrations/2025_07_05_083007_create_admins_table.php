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
        Schema::create('admins', function (Blueprint $table) {
            $table->unsignedBigInteger('admin_id');
            $table->primary('admin_id');
            // $table->foreign('admin_id')->references('approved_user_id')->on('approved_users')->onDelete('cascade');
            $table->string('name');
            $table->string('email')->unique();
            $table->enum('role', ['Teacher', 'Admin', 'Lgu']);
            $table->date('verification_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
