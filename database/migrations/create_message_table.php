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
        Schema::create('messages', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('chat_uuid');
            $table->foreign('chat_uuid')->references('uuid')->on('chats')->onDelete('cascade');
            $table->uuid('sender_uuid');
            $table->foreign('sender_uuid')->references('uuid')->on('users')->onDelete('cascade');
            $table->text('message');
            $table->enum('status', ['sent', 'delivered', 'read'])->default('sent');
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
        Schema::dropIfExists('messages');
    }
};
