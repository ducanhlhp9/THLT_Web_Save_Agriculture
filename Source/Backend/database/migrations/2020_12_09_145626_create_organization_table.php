<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization', function (Blueprint $table) {
            $table->increments('id', true)->unsigned();
            $table->string('name', 99)->nullable();
            $table->string('title', 99)->nullable();
            $table->string('title_seo', 99)->nullable();
            $table->string('slug', 99)->nullable();
            $table->text('description')->nullable();
            $table->text('description_seo')->nullable();
            $table->text('content1')->nullable();
            $table->text('content2')->nullable();
            $table->text('content3')->nullable();
            $table->string('image1', 99)->nullable();
            $table->string('image2', 99)->nullable();
            $table->string('image3', 99)->nullable();
            $table->integer('cat_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->tinyInteger('status')->nullable()->default(1);
            $table->tinyInteger('active')->nullable()->default(1);
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
        Schema::dropIfExists('organization');
    }
}
