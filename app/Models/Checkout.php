<?php

namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Model;

class Checkout extends Model
{

    protected $fillable = [
        'uuid','order_uuid', 'user_uuid', 'payment_method',
    ];
    protected $primaryKey = 'uuid';
    // Relationships
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_uuid', 'uuid');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_uuid', 'uuid');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = UuidHelper::generateUuid();
            }
        });
    }
}
