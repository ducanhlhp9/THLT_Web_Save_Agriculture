<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category', function (Blueprint $table) {
            $table->increments('id', true)->unsigned();
            $table->string('name', 99);
            $table->string('slug', 99)->nullable();
            $table->string('avatar', 99)->nullable();
            $table->tinyInteger('status')->nullable()->default(1);
            $table->timestamps();

            $table->engine = 'InnoDB';
        });

        DB::connection('mysql')->table('category')->insert([
            [
                'name' => 'Nông sản',
                'slug' => 'nong-san'
            ],
            [
                'name' => 'Động vật',
                'slug' => 'dong-vat'
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category');
    }
}
