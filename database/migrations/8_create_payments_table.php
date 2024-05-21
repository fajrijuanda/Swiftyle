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
        Schema::create('payments', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->uuid('user_uuid');
            $table->foreign('user_uuid')->references('uuid')->on('users');
            $table->uuid('order_uuid')->nullable();
            $table->foreign('order_uuid')->references('uuid')->on('orders');
            $table->decimal('amount', 10, 2);
            $table->string('method'); 
            $table->enum('status', ['pending', 'completed', 'failed']);
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
        Schema::dropIfExists('payments');
    }
};
