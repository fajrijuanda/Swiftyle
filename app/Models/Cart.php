<?php

// App/Models/Cart.php
namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Product;

class Cart extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid', 'product_uuid', 'quantity', 'price', 'discount', 'total_discount', 'subtotal', 'total_price',
    ];

    /**
     * Boot method for the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = UuidHelper::generateUuid();
            }
        });
    }

    /**
     * Get the product that owns the cart item.
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_uuid', 'uuid');
    }
}
