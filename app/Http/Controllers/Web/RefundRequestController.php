<?php

namespace App\Http\Controllers;

use App\Models\RefundRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RefundRequestController extends Controller
{
    public function index()
    {
        $refundRequests = RefundRequest::all();
        return view('refundRequests.index', compact('refundRequests'));
    }

    public function show($uuid)
    {
        $refundRequest = RefundRequest::findOrFail($uuid);
        return view('refundRequests.show', compact('refundRequest'));
    }

    public function create()
    {
        return view('refundRequests.create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_uuid' => 'required|uuid',
            'order_uuid' => 'required|uuid',
            'reason' => 'required|string',
            'status' => 'required|string'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $refundRequest = RefundRequest::create($validator->validated());

        return redirect()->route('refundRequests.show', $refundRequest->uuid)->with('success', 'Refund request created successfully');
    }

    public function edit($uuid)
    {
        $refundRequest = RefundRequest::findOrFail($uuid);
        return view('refundRequests.edit', compact('refundRequest'));
    }

    public function update(Request $request, $uuid)
    {
        $refundRequest = RefundRequest::findOrFail($uuid);

        $validator = Validator::make($request->all(), [
            'user_uuid' => 'uuid',
            'order_uuid' => 'uuid',
            'reason' => 'string',
            'status' => 'string'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $refundRequest->update($validator->validated());

        return redirect()->route('refundRequests.show', $refundRequest->uuid)->with('success', 'Refund request updated successfully');
    }

    public function destroy($uuid)
    {
        $refundRequest = RefundRequest::findOrFail($uuid);
        $refundRequest->delete();

        return redirect()->route('refundRequests.index')->with('success', 'Refund request deleted successfully');
    }
}
