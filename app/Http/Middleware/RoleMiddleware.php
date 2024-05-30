<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // Jika pengguna tidak masuk, redirect ke halaman login
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        // Ambil peran pengguna yang sedang masuk
        $userRole = Auth::user()->role;

        // Jika peran pengguna tidak sesuai dengan peran yang diizinkan, kembalikan 403 Forbidden
        if ($userRole !== $role) {
            abort(403, 'Unauthorized action.');
        }

        // Lanjutkan ke rute berikutnya
        return $next($request);
    }
}
