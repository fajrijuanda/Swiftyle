<?php

namespace App\Helpers;

use Ramsey\Uuid\Uuid;

class UuidHelper
{
    public static function generateUuid()
    {
        return Uuid::uuid4()->toString();
    }
}
