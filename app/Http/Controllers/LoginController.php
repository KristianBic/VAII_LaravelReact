<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function store(LoginRequest $request)
    {
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        if (Auth::attempt($request->validated())) {
            $request->session()->regenerate();
            return response()->json([
                'message' => 'Logged Successfully!!'
            ]);
        } else {
            return response()->json([
                'message' => 'Logged Unsuccessfully!!'
            ]);
        }
    }
}
