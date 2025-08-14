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
        Schema::create('approved_users', function (Blueprint $table) {
            $table->unsignedBigInteger('approved_user_id');
            $table->primary('approved_user_id');
            $table->string('name');
            $table->string('role');
            $table->date('date_approved');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('approved_users');
    }
};
