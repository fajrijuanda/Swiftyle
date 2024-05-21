<?php

namespace App\Models;

use App\Helpers\UuidHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Refund extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'refund_request_uuid', 
        'user_uuid', 
        'transaction_uuid', 
        'amount', 
        'status', 
        'reason'
    ];

    public function refundRequest()
    {
        return $this->belongsTo(RefundRequest::class, 'refund_request_uuid', 'uuid');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_uuid', 'uuid');
    }

    public function transaction()
    {
        return $this->belongsTo(Transaction::class, 'transaction_uuid', 'uuid');
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
