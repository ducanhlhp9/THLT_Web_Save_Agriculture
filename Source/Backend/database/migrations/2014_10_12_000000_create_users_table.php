<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id', true)->unsigned();
            $table->string('name', 99);
            $table->string('email', 99);
            $table->string('phone', 13);
            $table->string('address', 99);
            $table->string('avatar',200)->nullable();
            $table->string('password', 99);
            $table->rememberToken();
            $table->timestamps();
        });
        DB::connection('mysql')->table('users')->insert([
            [
                'name' 	=> 'Hoang Duc Anh',
                'email' 	=> 'ducanhllhp9@gmail.com',
                'phone' 	=>	'0942410953',
                'address'	=> 'Cát thành, Trực Ninh, Nam Định',
                'password' => 'hoangducanh'

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
        Schema::dropIfExists('users');
    }
}
