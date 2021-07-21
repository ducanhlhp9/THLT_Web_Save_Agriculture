<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RescueCategoryModel extends Model
{
    protected $table = "rescue_category";
    protected $guarded  =   [''];
    protected $fillable = [
        'id',
        'name',
        'slug',
        'avatar',
        'status',
        'created_at',
        'updated_at'
    ];
}
