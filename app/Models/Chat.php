<?php

namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $keyType = 'uuid';
    public $incrementing = false;

    protected $fillable = [
        'uuid',
        'user1_uuid',
        'user2_uuid',
    ];

    public function user1()
    {
        return $this->belongsTo(User::class, 'user1_uuid', 'uuid');
    }

    public function user2()
    {
        return $this->belongsTo(User::class, 'user2_uuid', 'uuid');
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
