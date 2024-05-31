<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\UserPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Ramsey\Uuid\Uuid;

class UserPaymentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $payments = UserPayment::all();
        return view('user_payments.index', compact('payments'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('user_payments.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_uuid' => 'required|exists:users,uuid',
            'payment_method' => 'required|string',
            'payment_details' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        UserPayment::create([
            'uuid' => Uuid::uuid4(),
            'user_uuid' => $request->user_uuid,
            'payment_method' => $request->payment_method,
            'payment_details' => $request->payment_details,
        ]);

        return redirect()->route('user-payments.index')->with('success', 'Payment method created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $uuid
     * @return \Illuminate\View\View
     */
    public function show($uuid)
    {
        $payment = UserPayment::where('uuid', $uuid)->firstOrFail();
        return view('user_payments.show', compact('payment'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $uuid
     * @return \Illuminate\View\View
     */
    public function edit($uuid)
    {
        $payment = UserPayment::where('uuid', $uuid)->firstOrFail();
        return view('user_payments.edit', compact('payment'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $uuid
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $uuid)
    {
        $payment = UserPayment::where('uuid', $uuid)->firstOrFail();

        $validator = Validator::make($request->all(), [
            'payment_method' => 'sometimes|required|string',
            'payment_details' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $payment->update($request->all());

        return redirect()->route('user-payments.index')->with('success', 'Payment method updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $uuid
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($uuid)
    {
        $payment = UserPayment::where('uuid', $uuid)->firstOrFail();
        $payment->delete();

        return redirect()->route('user-payments.index')->with('success', 'Payment method deleted successfully.');
    }
}
