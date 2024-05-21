<?php

namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = ['chat_uuid', 'sender_uuid', 'message', 'status'];

    public function chat()
    {
        return $this->belongsTo(Chat::class, 'chat_uuid', 'uuid');
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_uuid', 'uuid');
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
