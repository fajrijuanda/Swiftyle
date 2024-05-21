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
        'uuid', 'user_uuid', 'country', 'postal_code',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = UuidHelper::generateUuid();
            }
        });

        static::saving(function ($model) {
            if (!Country::isValid($model->country)) {
                throw ValidationException::withMessages(['country' => 'Invalid country value.']);
            }
        });
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_uuid', 'uuid');
    }
}
