<?php

// App/Models/Category.php
namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Product;
use Ramsey\Uuid\Uuid;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid', 'name',
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
     * Get the products for the category.
     */
    public function products()
    {
        return $this->hasMany(Product::class, 'category_uuid', 'uuid');
    }
}
