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
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->string('name');
            $table->string('description');
            $table->integer('price');
            $table->string('image');
            $table->uuid('category_uuid');
            $table->foreign('category_uuid')->references('uuid')->on('categories')->onDelete('cascade'); // Corrected foreign key
            $table->integer('stock');
            $table->uuid('promotions_uuid');
            $table->foreign('promotions_uuid')->references('uuid')->on('promotions')->onDelete('cascade'); // Corrected foreign key
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
        Schema::dropIfExists('products');
    }
};
