<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrganizationModel extends Model
{
    protected $table = "organization";
    protected $guarded  =   [''];
    protected $fillable = [
        'id',
        'name',
        'title',
        'title_seo',
        'slug',
        'description',
        'description_seo',
        'content1',
        'content2',
        'content3',
        'image1',
        'image2',
        'image3',
        'cat_id',
        'user_id',
        'created_at',
        'updated_at'
    ];
}
