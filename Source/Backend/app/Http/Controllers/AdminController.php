<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\AdminModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{

    public function index()
    {
        $admin = AdminModel::all();
        return response()->json($admin->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|min:1',
            'password' => 'required|min:1'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $admin = AdminModel::create($request->all());
        return response()->json($admin, 201);
    }

    public function show($id)
    {
        $admin = AdminModel::find($id);
        if (is_null($admin)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($admin, 200);
    }


    public function update(Request $request, $id)
    {
        $admin = AdminModel::find($id);
        if (is_null($admin)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $admin->update($request->all());
        return response()->json($admin, 200);
    }

    public function destroy($id)
    {
        $admin = AdminModel::find($id);
        if (is_null($admin)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $admin->delete();
        return response()->json(null, 204);
    }
}
