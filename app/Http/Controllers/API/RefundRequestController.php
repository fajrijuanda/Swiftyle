<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RefundRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RefundRequestController extends Controller
{
    public function index()
    {
        $refundRequests = RefundRequest::all();
        return response()->json($refundRequests);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_uuid' => 'required|uuid',
            'order_uuid' => 'required|uuid',
            'reason' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $refundRequest = RefundRequest::create($request->all());
        return response()->json($refundRequest, 201);
    }

    public function show($uuid)
    {
        $refundRequest = RefundRequest::where('uuid', $uuid)->firstOrFail();
        return response()->json($refundRequest);
    }

    public function update(Request $request, $uuid)
    {
        $refundRequest = RefundRequest::where('uuid', $uuid)->firstOrFail();

        $validator = Validator::make($request->all(), [
            'reason' => 'sometimes|required|string',
            'status' => 'sometimes|required|in:pending,approved,rejected',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $refundRequest->update($request->all());
        return response()->json($refundRequest);
    }

    public function destroy($uuid)
    {
        $refundRequest = RefundRequest::where('uuid', $uuid)->firstOrFail();
        $refundRequest->delete();
        return response()->json(null, 204);
    }
}
