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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_uuid');
            $table->foreign('user_uuid')->references('uuid')->on('users');
            $table->unsignedBigInteger('product_uuid')->nullable();
            $table->foreign('product_uuid')->references('uuid')->on('products');
            $table->decimal('amount', 10, 2);
            $table->enum('type', ['purchase', 'refund', 'payment', 'withdrawal']);
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
        Schema::dropIfExists('transactions');
    }
};
