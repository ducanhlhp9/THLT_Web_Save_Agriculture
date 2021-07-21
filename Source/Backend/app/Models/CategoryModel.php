<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    protected $table = "category";
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
