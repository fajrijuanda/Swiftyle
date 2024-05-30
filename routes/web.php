<?php

use App\Http\Controllers\SidebarController;
use App\Http\Controllers\Web\OrdersController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\CartController;
use App\Http\Controllers\Web\CategoriesController;
use App\Http\Controllers\Web\ProductsController;
use App\Http\Controllers\Web\UsersController;
use App\Http\Controllers\Web\AuthenticationController;
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
@include_once('admin_web.php');

Route::get('/', function () {
    return redirect()->route('login');
})->name('/');

Route::view('sample-page', 'admin.pages.sample-page')->name('sample-page');

Route::prefix('dashboard')->group(function () {
    Route::view('/', 'admin.dashboard.default')->name('index');
    Route::view('default', 'admin.dashboard.default')->name('dashboard.index');
});

Route::view('default-layout', 'multiple.default-layout')->name('default-layout');
Route::view('compact-layout', 'multiple.compact-layout')->name('compact-layout');
Route::view('modern-layout', 'multiple.modern-layout')->name('modern-layout');

Route::post('/toggle-sidebar', [SidebarController::class, 'toggleSidebar'])->name('toggle-sidebar');



// Authentication routes...
Route::get('login', [AuthenticationController::class, 'showLoginForm'])->name('login');
Route::post('login', [AuthenticationController::class, 'login']);
Route::post('logout', [AuthenticationController::class, 'logout'])->name('logout');

// Registration routes...
Route::get('register', [AuthenticationController::class, 'showRegistrationForm'])->name('register');
Route::post('register', [AuthenticationController::class, 'register']);


Route::prefix('web')->group(function () {
    Route::group(['prefix' => 'users'], function () {
        Route::get('/', [UsersController::class, 'index'])->name('users.index');
        Route::get('/create', [UsersController::class, 'create'])->name('users.create');
        Route::post('/', [UsersController::class, 'store'])->name('users.store');
        Route::get('/{uuid}', [UsersController::class, 'show'])->name('users.show');
        Route::get('/{uuid}/edit', [UsersController::class, 'edit'])->name('users.edit');
        Route::put('/{uuid}', [UsersController::class, 'update'])->name('users.update');
        Route::delete('/{uuid}', [UsersController::class, 'destroy'])->name('users.destroy');
    });
    Route::group(['prefix' => 'categories'], function () {
        Route::get('/', [CategoriesController::class, 'index'])->name('categories.index');
        Route::get('/create', [CategoriesController::class, 'create'])->name('categories.create');
        Route::post('/', [CategoriesController::class,'store'])->name('categories.store');
        Route::get('/{uuid}', [CategoriesController::class,'show'])->name('categories.show');
        Route::get('/{uuid}/edit', [CategoriesController::class, 'edit'])->name('categories.edit');
        Route::put('/{uuid}', [CategoriesController::class, 'update'])->name('categories.update');
        Route::delete('/{uuid}', [CategoriesController::class, 'destroy'])->name('categories.destroy');
    });
    Route::group(['prefix' => 'products'], function () {
        Route::get('/', [ProductsController::class, 'index'])->name('products.index');
        Route::get('/create', [ProductsController::class, 'create'])->name('products.create');
        Route::post('/', [ProductsController::class,'store'])->name('products.store');
        Route::get('/{uuid}', [ProductsController::class,'show'])->name('products.show');
        Route::get('/{uuid}/edit', [ProductsController::class, 'edit'])->name('products.edit');
        Route::put('/{uuid}', [ProductsController::class, 'update'])->name('products.update');
        Route::delete('/{uuid}', [ProductsController::class, 'destroy'])->name('products.destroy');
    });
    Route::group(['prefix' => 'cart'], function () {
        Route::get('/', [CartController::class, 'index'])->name('cart.index');
        Route::get('/create', [CartController::class, 'create'])->name('cart.create');
        Route::post('/', [CartController::class,'store'])->name('cart.store');
        Route::get('/{uuid}', [CartController::class,'show'])->name('cart.show');
        Route::get('/{uuid}/edit', [CartController::class, 'edit'])->name('cart.edit');
        Route::put('/{uuid}', [CartController::class, 'update'])->name('cart.update');
        Route::delete('/{uuid}', [CartController::class, 'destroy'])->name('cart.destroy');
    });
    Route::group(['prefix' => 'order'], function () {
        Route::get('/', [OrdersController::class, 'index'])->name('orders.index');
        Route::get('/create', [OrdersController::class, 'create'])->name('orders.create');
        Route::post('/', [OrdersController::class,'store'])->name('orders.store');
        Route::get('/{uuid}', [OrdersController::class,'show'])->name('orders.show');
        Route::get('/{uuid}/edit', [OrdersController::class, 'edit'])->name('orders.edit');
        Route::put('/{uuid}', [OrdersController::class, 'update'])->name('orders.update');
        Route::delete('/{uuid}', [OrdersController::class, 'destroy'])->name('orders.destroy');
    });
    Route::group(['prefix' => 'wishlist'], function () {
        Route::get('/', [WishlistController::class, 'index'])->name('wishlist.index');
        Route::get('/create', [WishlistController::class, 'create'])->name('wishlist.create');
        Route::post('/', [WishlistController::class,'store'])->name('wishlist.store');
        Route::get('/{uuid}', [WishlistController::class,'show'])->name('wishlist.show');
        Route::get('/{uuid}/edit', [WishlistController::class, 'edit'])->name('wishlist.edit');
        Route::put('/{uuid}', [WishlistController::class, 'update'])->name('wishlist.update');
        Route::delete('/{uuid}', [WishlistController::class, 'destroy'])->name('wishlist.destroy');
    });

});