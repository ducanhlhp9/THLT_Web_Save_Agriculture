<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\AdminModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;


class AdminAuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->json()->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins',
            'password' => 'required|string|min:6',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $admin = AdminModel::create([
            'name'=> $request->json()->get('name'),
            'email'=>$request->json()->get('email'),
            'password'=>Hash::make($request->json()->get('password')),
        ]);
        $token = JWTAuth::fromUser($admin);
        return response()->json(compact('admin','token'), 201);
    }

    public function login(Request $request){
        $credentials = $request->json()->all();

        try{
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json(['error'=>'invalid_credentials'], 400);
            }
        }catch (JWTException $e){
            return response()->json(['error'=>'could not create token'], 500);
        }
        return response()->json(compact('token'));
//        $credentials = $request->json()->all();
//        try {
//            if (!$token = JWTAuth::attempt($credentials)) {
//                return response()->json(['error' => 'Tài khoản mật khẩu không khớp'], 400);
//            }
//        } catch (JWTException $e) {
//            return response()->json(['error' => 'could not create token'], 500);
//        }
//        $admin = AdminModel::where([
//            'email' => $request->email
//        ])->get();
//        return response()->json(compact('admin', 'token'));
    }

    public function getAdminInfo(){
        try{
            if(!$admin = JWTAuth::parseToken()->authenticate()){
                return response()->json(['admin not found'],404);
            }
        }catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e){
            return response()->json(['token expired'], $e->getStatusCode());
        }catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e){
            return response()->json(['token invalid'], $e->getStatusCode());
        }catch (Tymon\JWTAuth\Exceptions\JWTExeption $e){
            return response()->json(['token absent'], $e->getStatusCode());
        }

        return response()->json(compact('admin'));
    }
}

