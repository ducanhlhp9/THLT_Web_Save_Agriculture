<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RegistToBeRescuedModel extends Model
{
    protected $table = "regist_to_be_rescued";
    protected $guarded  =   [''];
    protected $fillable = [
        'id',
        'name',
        'slug',
        'email',
        'phone',
        'address',
        'image1',
        'image2',
        'image3',
        'description',
        'message',
        'spe_name',
        'species_category_id',
        'cat_id',
        'user_id',
        'status',
        'created_at',
        'updated_at'
    ];
}
