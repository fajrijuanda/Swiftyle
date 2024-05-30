<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SidebarController extends Controller
{
    public function toggleSidebar(Request $request)
    {
        // Dapatkan status sidebar saat ini dari session
        $currentSidebar = $request->session()->get('sidebar', 'default');
        
        // Tentukan sidebar baru berdasarkan status saat ini
        $newSidebar = $currentSidebar === 'default' ? 'compact' : 'default';
        
        // Simpan status baru di session
        $request->session()->put('sidebar', $newSidebar);
        
        // Redirect kembali ke halaman sebelumnya
        return redirect()->back();
    }
}
