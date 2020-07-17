<?php

namespace App\Http\Controllers;
use GuzzleHttp\Client;

use Illuminate\Http\JsonResponse;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //

    public function  login(Request $request ) 
    {
        request()->validate([
             'email' => 'email|required',
             'password' => 'required',
        ]);
        $http = new Client;
        try {
            $response = $http->post('http://localhost:8080/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => 2,
                    'client_secret' => 'Ub05xk0QbFatgmL8HtBDPBVZ55FuLA8X2BcsiVYg',
                    'username' => $request->email,
                    'password' => $request->password,
                ]
            ]);
           return $response->getBody();

        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
                    if ($e->getCode() === 400) {
                        return response()->json("Wrong email or password", $e->getCode());
                    } else if ($e->getCode() === 401) {
                        return response()->json('You are not authorized to perfom this action', $e->getCode());
             }
           return response()->json('Something went wrong on the server.', $e->getCode());
        } 
    }
    public function logout()  
    {
        auth()->user()->tokens->each(function($token, $key){
                $token->delete();
        });
       response()->json(['Logout Successfully'],200);

    }
}
