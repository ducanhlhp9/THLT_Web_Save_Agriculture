<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpeciesCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('species_category', function (Blueprint $table) {
            $table->increments('id', true)->unsigned();
            $table->string('name',99);
            $table->string('slug', 100)->nullable();
            $table->tinyInteger('active')->nullable()->default(1);
            $table->tinyInteger('status')->nullable()->default(1);
            $table->integer('cat_id')->nullable();
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
        Schema::dropIfExists('species_category');
    }
}
