<?php

use App\Http\Controllers\Web\OrdersController;
use App\Http\Controllers\Web\WhatsAppController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\CartController;
use App\Http\Controllers\Web\CategoriesController;
use App\Http\Controllers\Web\ProductsController;
use App\Http\Controllers\Web\UsersController;
use App\Http\Controllers\Web\AuthenticationController;
use App\Http\Controllers\Web\ProviderController;
use App\Http\Controllers\Web\PasswordResetController;
use App\Http\Controllers\Web\WishlistController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

@require ('admin_web.php');

Route::get('/', function () {
    return redirect()->route('login');
})->name('/');

Route::view('sample-page', 'admin.pages.sample-page')->name('sample-page');

Route::middleware('auth')->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::view('/', 'admin.dashboard.default')->name('index');
        Route::view('default', 'admin.dashboard.default')->name('dashboard.index');
    });
});


Route::get('auth/{provider}/redirect', [ProviderController::class, 'redirect'])->name('google-auth');
Route::get('auth/{provider}/callback', [ProviderController::class, 'callback']);

Route::get('/authenticate/redirect/{social}', [AuthenticationController::class, 'sociaLiteRedirect'])->name('sociaLite-Redirect');
Route::get('/authenticate/callback/{social}', [AuthenticationController::class, 'sociaLiteCallback'])->name('sociaLite-Callback');

Route::view('default-layout', 'multiple.default-layout')->name('default-layout');
Route::view('compact-layout', 'multiple.compact-layout')->name('compact-layout');
Route::view('modern-layout', 'multiple.modern-layout')->name('modern-layout');

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticationController::class, 'showLoginForm'])->name('login');
    Route::post('login', [AuthenticationController::class, 'login']);

    Route::post('register', [WhatsAppController::class, 'register'])->name('register');
    Route::get('verify-email-otp', [WhatsAppController::class, 'showEmailOtpForm'])->name('verify.email.otp.form');
    Route::post('verify-email-otp', [WhatsAppController::class, 'verifyEmailOtp'])->name('verify.email.otp');
    Route::get('resend-email-otp', [WhatsAppController::class, 'resendEmailOtp'])->name('resend.email.otp');
    Route::get('whatsapp-number', [WhatsAppController::class, 'showWhatsAppNumberForm'])->name('whatsapp.number.form');
    Route::post('whatsapp-number', [WhatsAppController::class, 'sendWhatsAppOtp'])->name('whatsapp.number');
    Route::get('verify-whatsapp-otp', [WhatsAppController::class, 'showWhatsAppOtpForm'])->name('verify.whatsapp.otp.form');
    Route::post('verify-whatsapp-otp', [WhatsAppController::class, 'verifyWhatsAppOtp'])->name('verify.whatsapp.otp');
    Route::get('resend-whatsapp-otp', [WhatsAppController::class, 'resendWhatsAppOtp'])->name('resend.whatsapp.otp');
    
    Route::get('forget-password', [PasswordResetController::class, 'index'])->name('forget.password');
});

Route::post('logout', [AuthenticationController::class, 'logout'])->name('logout');

Route::prefix('web')->group(function () {
    Route::group(['prefix' => 'users'], function () {
        Route::get('/', [UsersController::class, 'index'])->name('users.index');
        Route::get('/create', [UsersController::class, 'create'])->name('users.create');
        Route::post('/', [UsersController::class, 'store'])->name('users.store');
        Route::get('/{id}', [UsersController::class, 'show'])->name('users.show');
        Route::get('/{id}/edit', [UsersController::class, 'edit'])->name('users.edit');
        Route::put('/{id}', [UsersController::class, 'update'])->name('users.update');
        Route::delete('/{id}', [UsersController::class, 'destroy'])->name('users.destroy');
        Route::get('/{id}', [UsersController::class, 'showProfile'])->middleware('auth');



    });
    Route::group(['prefix' => 'categories'], function () {
        Route::get('/', [CategoriesController::class, 'index'])->name('categories.index');
        Route::get('/create', [CategoriesController::class, 'create'])->name('categories.create');
        Route::post('/', [CategoriesController::class, 'store'])->name('categories.store');
        Route::get('/{id}', [CategoriesController::class, 'show'])->name('categories.show');
        Route::get('/{id}/edit', [CategoriesController::class, 'edit'])->name('categories.edit');
        Route::put('/{id}', [CategoriesController::class, 'update'])->name('categories.update');
        Route::delete('/{id}', [CategoriesController::class, 'destroy'])->name('categories.destroy');
    });
    Route::group(['prefix' => 'products'], function () {
        Route::get('/', [ProductsController::class, 'index'])->name('products.index');
        Route::get('/create', [ProductsController::class, 'create'])->name('products.create');
        Route::post('/', [ProductsController::class, 'store'])->name('products.store');
        Route::get('/{id}', [ProductsController::class, 'show'])->name('products.show');
        Route::get('/{id}/edit', [ProductsController::class, 'edit'])->name('products.edit');
        Route::put('/{id}', [ProductsController::class, 'update'])->name('products.update');
        Route::delete('/{id}', [ProductsController::class, 'destroy'])->name('products.destroy');
    });
    Route::group(['prefix' => 'cart'], function () {
        Route::get('/', [CartController::class, 'index'])->name('cart.index');
        Route::get('/create', [CartController::class, 'create'])->name('cart.create');
        Route::post('/', [CartController::class, 'store'])->name('cart.store');
        Route::get('/{id}', [CartController::class, 'show'])->name('cart.show');
        Route::get('/{id}/edit', [CartController::class, 'edit'])->name('cart.edit');
        Route::put('/{id}', [CartController::class, 'update'])->name('cart.update');
        Route::delete('/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
    });
    Route::group(['prefix' => 'order'], function () {
        Route::get('/', [OrdersController::class, 'index'])->name('orders.index');
        Route::get('/create', [OrdersController::class, 'create'])->name('orders.create');
        Route::post('/', [OrdersController::class, 'store'])->name('orders.store');
        Route::get('/{id}', [OrdersController::class, 'show'])->name('orders.show');
        Route::get('/{id}/edit', [OrdersController::class, 'edit'])->name('orders.edit');
        Route::put('/{id}', [OrdersController::class, 'update'])->name('orders.update');
        Route::delete('/{id}', [OrdersController::class, 'destroy'])->name('orders.destroy');
    });
    Route::group(['prefix' => 'wishlist'], function () {
        Route::get('/', [WishlistController::class, 'index'])->name('wishlist.index');
        Route::get('/create', [WishlistController::class, 'create'])->name('wishlist.create');
        Route::post('/', [WishlistController::class, 'store'])->name('wishlist.store');
        Route::get('/{id}', [WishlistController::class, 'show'])->name('wishlist.show');
        Route::get('/{id}/edit', [WishlistController::class, 'edit'])->name('wishlist.edit');
        Route::put('/{id}', [WishlistController::class, 'update'])->name('wishlist.update');
        Route::delete('/{id}', [WishlistController::class, 'destroy'])->name('wishlist.destroy');
    });

});