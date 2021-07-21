<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommentModel extends Model
{
    protected $table = "comment";
    protected $guarded  =   [''];
    protected $fillable = [
        'id',
        'user_id',
        'species_id',
        'content',
        'status',
        'created_at',
        'updated_at'
    ];
}
