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
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->uuid('user_uuid');
            $table->foreign('user_uuid')->references('uuid')->on('users');
            $table->uuid('product_uuid');
            $table->foreign('product_uuid')->references('uuid')->on('products');
            $table->integer('quantity');
            $table->integer('total');
            $table->unsignedBigInteger('address_uuid')->nullable();
            $table->foreign('address_uuid')->references('uuid')->on('addresses');
            $table->unsignedBigInteger('user_payment_uuid')->nullable();
            $table->foreign('user_payment_uuid')->references('uuid')->on('user_payments');
            $table->string('status');
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
        Schema::dropIfExists('order');
    }
};
