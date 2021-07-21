<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class AdminModel extends Model implements \Tymon\JWTAuth\Contracts\JWTSubject
{
    use Notifiable;
    protected $table = "admins";

    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'created_at',
        'updated_at'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function getJWTIdentifier(){
        return $this->getKey();
    }
    public function getJWTCustomClaims(){
        return [];
    }
}
