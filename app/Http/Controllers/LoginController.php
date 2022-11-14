<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;;

class LoginController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Login/Login');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Product Updated Successfully!!'
            ]);

            $request->session()->regenerate();
            return redirect()->intended('dashboard');
        }


        /*
        if (Auth::attempt($request->validate())) {
            $request->session()->regenerate();
            return redirect()->intended('dashboard');
        }

        return back()->withErrors(['name' => 'Doesnt match']);
        */
    }
}
