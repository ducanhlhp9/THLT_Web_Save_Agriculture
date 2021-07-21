<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrganizationCategoryModel extends Model
{
    protected $table = "org_category";
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
