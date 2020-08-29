<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ResumeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/resume', [ResumeController::class, 'index']);
Route::get('/projects', [ProjectsController::class, 'index']);
Route::get('/contact', [ContactController::class, 'index']);
