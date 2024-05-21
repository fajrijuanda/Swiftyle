<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('promotions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->enum('type', ['percentage_discount', 'fixed_discount', 'buy_one_get_one'])->default('percentage_discount');
            $table->decimal('discount_amount', 10, 2)->nullable();
            $table->decimal('discount_percentage', 10, 2)->nullable();
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();
        });

        Schema::table('promotions', function (Blueprint $table) {
            $table->foreignId('catalog_id')->nullable()->constrained('catalogs')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('promotions');
    }
};
