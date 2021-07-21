<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RescueModel extends Model
{
    protected $table = "rescue";
    protected $guarded  =   [''];
    protected $fillable = [
        'id',
        'name',
        'slug',
        'email',
        'phone',
        'address',
        'job',
        'message',
        'species_id',
        'cat_id',
        'user_id',
        'created_at',
        'updated_at'
    ];
}
