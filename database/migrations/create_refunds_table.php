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
        Schema::create('refunds', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->uuid('refund_request_uuid');
            $table->foreign('refund_request_uuid')->references('uuid')->on('refund_requests')->onDelete('cascade');
            $table->uuid('user_uuid');
            $table->foreign('user_uuid')->references('uuid')->on('users');
            $table->uuid('transaction_uuid');
            $table->foreign('transaction_uuid')->references('uuid')->on('transactions');
            $table->decimal('amount', 10, 2); 
            $table->string('status'); 
            $table->text('reason')->nullable();
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
        Schema::dropIfExists('refunds');
    }
};
