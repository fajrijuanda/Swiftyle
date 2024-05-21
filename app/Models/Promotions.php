<?php

namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    use HasFactory;

    protected $keyType = 'uuid';
    public $incrementing = false;

    protected $fillable = [
        'uuid',
        'name',
        'description',
        'type',
        'discount_amount',
        'discount_percentage',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $attributes = [
        'type' => 'percentage_discount',
        'discount_amount' => null,
        'discount_percentage' => null,
    ];

    /**
     * Get the products associated with the promotion.
     */
    public function products()
    {
        return $this->belongsToMany(Product::class, 'promotion_product', 'promotion_uuid', 'product_uuid')
            ->withPivot('discount_amount', 'discount_percentage')
            ->withTimestamps();
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
