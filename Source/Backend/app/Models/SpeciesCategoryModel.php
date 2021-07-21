<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SpeciesCategoryModel extends Model
{
    protected $table = "species_category";
    protected $guarded  =   [''];
    protected $fillable = [
        'id',
        'name',
        'slug',
        'active',
        'status',
        'cat_id',
        'created_at',
        'updated_at'
    ];
}
