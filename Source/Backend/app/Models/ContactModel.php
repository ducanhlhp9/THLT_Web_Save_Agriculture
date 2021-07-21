<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactModel extends Model
{
    protected $table = "contact";
    protected $guarded  =   [''];
    protected $fillable = [
        'id',
        'name',
        'email',
        'phone',
        'address',
        'message',
        'created_at',
        'updated_at'
    ];
}
