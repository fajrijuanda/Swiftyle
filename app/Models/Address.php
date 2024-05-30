<?php

// App/Models/Address.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enums\Country;
use App\Helpers\UuidHelper;
use Illuminate\Validation\ValidationException;


class Address extends Model
{
    protected $fillable = [
        'id', 'user_id', 'country', 'postal_code',
    ];

    public static function boot()
    {

        static::saving(function ($model) {
            if (!Country::isValid($model->country)) {
                throw ValidationException::withMessages(['country' => 'Invalid country value.']);
            }
        });
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
