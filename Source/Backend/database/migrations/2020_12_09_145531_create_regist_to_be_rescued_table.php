<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistToBeRescuedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('regist_to_be_rescued', function (Blueprint $table) {
            $table->increments('id', true)->unsigned();
            $table->string('name', 99);
            $table->string('slug', 99)->nullable();
            $table->string('email', 99)->nullable();
            $table->string('phone', 99);
            $table->string('address', 99);
            $table->text('description')->nullable();
            $table->text('message')->nullable();
            $table->string('spe_name', 99)->nullable();
            $table->integer('species_category_id');
            $table->integer('cat_id');
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
        Schema::dropIfExists('regist_to_be_rescued');
    }
}
