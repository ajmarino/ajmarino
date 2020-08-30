<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = require(database_path('data/projects.php'));

        $featured = collect($projects)->filter(function ($proj) {
            return $proj['is_featured'];
        })->take(-6);

        return inertia('Home', compact('featured'));
    }
}
