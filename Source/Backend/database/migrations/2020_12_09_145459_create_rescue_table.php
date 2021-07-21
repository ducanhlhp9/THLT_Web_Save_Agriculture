<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRescueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rescue', function (Blueprint $table) {
            $table->increments('id', true)->unsigned();
            $table->string('name', 99);
            $table->string('slug', 99)->nullable();
            $table->string('email', 99)->nullable();
            $table->string('phone', 99)->nullable();
            $table->string('address', 99)->nullable();
            $table->string('job', 99)->nullable();
            $table->text('message')->nullable();
            $table->integer('species_id')->nullable();
            $table->integer('cat_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->tinyInteger('status')->nullable()->default(1);
            $table->timestamps();

            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rescue');
    }
}
