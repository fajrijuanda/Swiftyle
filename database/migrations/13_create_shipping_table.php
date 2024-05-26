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
        Schema::create('shipping', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('checkout_id');
            $table->foreign('checkout_id')->references('id')->on('checkouts')->onDelete('cascade');
            $table->string('shipping_address', 255);
            $table->string('tracking_number', 255);
            $table->date('shipped_date');
            $table->enum('shipping_method', ['car', 'ship','plane']);
            $table->decimal('shipping_cost', 10, 2);
            $table->enum('shipping_status', ['pending', 'shipped', 'delivered', 'cancelled'])->default('pending');
            $table->enum('payment_status', ['cod', 'paid']);
            $table->date('estimated_delivery_date');
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
        Schema::dropIfExists('shipping');
    }
};
