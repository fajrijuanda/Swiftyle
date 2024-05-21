<?php

namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'user_uuid',
        'product_uuid',
        'quantity',
        'total',
        'address_uuid',
        'user_payment_uuid',
        'status',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = UuidHelper::generateUuid();
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_uuid', 'uuid');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_uuid', 'uuid');
    }

    public function address()
    {
        return $this->belongsTo(Address::class, 'address_uuid', 'uuid');
    }

    public function userPayment()
    {
        return $this->belongsTo(UserPayment::class, 'user_payment_uuid', 'uuid');
    }
}
