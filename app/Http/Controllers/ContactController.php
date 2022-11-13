<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

use App\Mail\SendMail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        /*
        $data = $request->validate([
            'Name'  => $request->input('firstName'),
            'Surname' => $request->input('surname'),
            'Phone'  => $request->input('telephone'),
            'Email' => $request->input('email'),
            'Subject' => $request->input('subject'),
            'Message' => $request->input('message')
        ]);
         */
        $mailData = [
            'title' => 'Mail from ItSolutionStuff.com',
            'body' => 'This is for testing email using smtp.'
        ];

        Mail::to('krstnbicanovsky@gmail.com')->send(new SendMail($mailData));

        /*
        //Mail Function
        Mail::send(['email.contact'], ['data1' => $data], function ($m) {

            $m->to('krstnbicanovsky@gmail.com')->subject('Contact Form Mail!');
        });
        */
        //return response()->json(["message" => "Email sent successfully."]);
    }
}
