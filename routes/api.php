<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login','AuthController@login');
Route::post('/logout','AuthController@logout')->middleware('auth:api');
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth:api')->group( function(){
//     Route::resource('categories', 'ExpenseCategories')->namespace('Api');
// });


Route::middleware('auth:api')->namespace('Api')->group(function(){
    Route::resource('expense_categories', 'ExpenseCategories')->except(['show','edit']);
});