<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        $payments = Payment::all();
        return view('payments.index', compact('payments'));
    }

    public function show($id)
    {
        $payment = Payment::findOrFail($id);
        return view('payments.show', compact('payment'));
    }

    public function create()
    {
        return view('payments.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_uuid' => 'required|uuid',
            'order_uuid' => 'uuid|nullable',
            'amount' => 'required|numeric',
            'method' => 'required|string',
            'status' => 'required|in:pending,completed,failed',
        ]);

        $payment = Payment::create($validatedData);

        return redirect()->route('payments.show', $payment->uuid)->with('success', 'Payment created successfully');
    }

    public function edit($id)
    {
        $payment = Payment::findOrFail($id);
        return view('payments.edit', compact('payment'));
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'user_uuid' => 'uuid',
            'order_uuid' => 'uuid|nullable',
            'amount' => 'numeric',
            'method' => 'string',
            'status' => 'in:pending,completed,failed',
        ]);

        $payment = Payment::findOrFail($id);
        $payment->update($validatedData);

        return redirect()->route('payments.show', $payment->uuid)->with('success', 'Payment updated successfully');
    }

    public function destroy($id)
    {
        $payment = Payment::findOrFail($id);
        $payment->delete();

        return redirect()->route('payments.index')->with('success', 'Payment deleted successfully');
    }
}
