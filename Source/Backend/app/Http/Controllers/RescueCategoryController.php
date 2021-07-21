<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use App\Models\RescueCategoryModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RescueCategoryController extends Controller
{
    public function index()
    {
        $rescueCategory = RescueCategoryModel::all();
        return response()->json($rescueCategory->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {
        $rescueCategory = new RescueCategoryModel;
        $rules = [
            'name' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $rescueCategory->name = $request['name'];
        $rescueCategory->slug = str_slug($request['name']);
        if($request->hasFile('avatar')){
            $file = upload_image('avatar');
            if(isset($file['name'])){
                $rescueCategory->avatar= $file['name'];
            }
        }
        $rescueCategory->save();
        return response()->json($rescueCategory, 201);
    }

    public function show($id)
    {
        $rescueCategory = RescueCategoryModel::find($id);
        if (is_null($rescueCategory)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($rescueCategory, 200);
    }

    public function update(Request $request, $id)
    {
        $rescueCategory = RescueCategoryModel::find($id);
        if (is_null($rescueCategory)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $rules = [
            'name' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $rescueCategory->name = $request['name'];
        $rescueCategory->slug = str_slug($request['name']);
        $rescueCategory->avatar = $request['avatar'];

        $rescueCategory->save();
        return response()->json($rescueCategory, 201);
    }

    public function destroy($id)
    {
        $rescueCategory = RescueCategoryModel::find($id);
        if (is_null($rescueCategory)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $rescueCategory->delete();
        return response()->json(null, 204);
    }
}
