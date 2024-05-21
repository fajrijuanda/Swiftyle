<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\UserPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Ramsey\Uuid\Uuid;

class UserPaymentsController extends Controller
{
    public function index()
    {
        $payments = UserPayment::all();
        return response()->json($payments);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_uuid' => 'required|exists:users,uuid',
            'payment_method' => 'required|string',
            'payment_details' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $payment = UserPayment::create([
            'uuid' => Uuid::uuid4(),
            'user_uuid' => $request->user_uuid,
            'payment_method' => $request->payment_method,
            'payment_details' => $request->payment_details,
        ]);

        return response()->json($payment, 201);
    }

    public function show($uuid)
    {
        $payment = UserPayment::where('uuid', $uuid)->firstOrFail();
        return response()->json($payment);
    }

    public function update(Request $request, $uuid)
    {
        $payment = UserPayment::where('uuid', $uuid)->firstOrFail();

        $validator = Validator::make($request->all(), [
            'payment_method' => 'sometimes|required|string',
            'payment_details' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $payment->update($request->all());

        return response()->json($payment);
    }

    public function destroy($uuid)
    {
        $payment = UserPayment::where('uuid', $uuid)->firstOrFail();
        $payment->delete();

        return response()->json(null, 204);
    }
}
