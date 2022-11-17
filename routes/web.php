<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiteController;

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

Route::get('/{path?}', function () {
    return view('welcome');
});

//Contact
Route::post('formSubmit', 'App\Http\Controllers\ContactController@submit');

//Login
Route::post('/login', 'App\Http\Controllers\LoginController@store');
Route::get('/nastavenia', 'App\Http\Controllers\AdminController@show')->name('nastavenia');
