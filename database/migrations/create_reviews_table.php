<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('user_uuid');
            $table->foreign('user_uuid')->references('uuid')->on('users')->onDelete('cascade');
            $table->uuid('product_uuid');
            $table->foreign('product_uuid')->references('uuid')->on('products')->onDelete('cascade');
            $table->text('content');
            $table->integer('rating')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
};
