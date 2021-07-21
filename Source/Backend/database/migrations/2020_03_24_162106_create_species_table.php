<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpeciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql')->create('species', function (Blueprint $table) {
            $table->increments('id', true)->unsigned();
            $table->string('name', 99)->nullable();
            $table->string('slug', 99)->nullable();
            $table->integer('spe_cat_id')->nullable();
            $table->integer('status')->nullable()->default(1);
            $table->integer('active')->nullable()->default(1);
            $table->integer('cat_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->string('image1', 200)->nullable();
            $table->string('image2', 200)->nullable();
            $table->string('image3', 200)->nullable();
            $table->text('description')->nullable();
            $table->text('description_seo')->nullable();
            $table->string('title', 1000)->nullable();
            $table->string('title_seo', 1000)->nullable();
            $table->text('content1')->nullable();
            $table->text('content2')->nullable();
            $table->text('content3')->nullable();
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
        Schema::dropIfExists('species');
    }
}
