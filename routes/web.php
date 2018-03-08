<?php

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

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/example', function () {
    return view('hello');
});

Route::get('/hello', function () {
    return view('hello');
});

Route::get('/hello2', function () {
    return view('hello');
});

Route::get('/view', function () {
    return view('hello');
});

Route::get('/view/{name}', function() {
    return view('hello');
})->where('name', '[A-Za-z0-9]+');
