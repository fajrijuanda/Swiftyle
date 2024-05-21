<?php

namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid', 'order_uuid', 'address', 'city', 'state', 'postal_code', 'country',
        'shipping_method', 'shipping_cost', 'status'
    ];

    protected $primaryKey = 'uuid';
    public $incrementing = false;
    protected $keyType = 'string';

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_uuid', 'uuid');
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
