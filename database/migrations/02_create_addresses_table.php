<?php

use App\Enums\Country;
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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('address', 255);
            $table->string('firstname', 255);
            $table->string('lastname', 255);
            $table->enum('type', ['Home', 'Work', 'Other']);
            $table->boolean('primary')->default(false);
            $table->enum('country', Country::getValues());
            $table->string('province', 255);
            $table->string('city', 255);
            $table->string('district', 255);
            $table->string('street', 255);
            $table->string('house_number', 255)->nullable();
            $table->string('apartment_number', 255)->nullable();
            $table->integer('postal_code');
            $table->string('phone_number', 20);
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
        Schema::dropIfExists('addresses');
    }
};
