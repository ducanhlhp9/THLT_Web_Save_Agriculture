<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use App\Models\SpeciesModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index()
    {
        $category = CategoryModel::all();
        return response()->json($category->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {
        $category = new CategoryModel;
        $rules = [
            'name' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $category->name = $request['name'];
        $category->slug = str_slug($request['name']);
        if($request->hasFile('avatar')){
            $file = upload_image('avatar');
            if(isset($file['name'])){
                $category->avatar= $file['name'];
            }
        }
        $category->save();
        return response()->json($category, 201);
    }

    public function show($id)
    {
        $category = CategoryModel::find($id);
        if (is_null($category)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($category, 200);
    }

    public function update(Request $request, $id)
    {
        $category = CategoryModel::find($id);
        if (is_null($category)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $rules = [
            'name' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $category->name = $request['name'];
        $category->slug = str_slug($request['name']);
        $category->avatar = $request['avatar'];

        $category->save();
        return response()->json($category, 201);
    }

    public function destroy($id)
    {
        $category = CategoryModel::find($id);
        if (is_null($category)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $category->delete();
        return response()->json(null, 204);
    }
    public function changeStatus($id)
    {
        $category = CategoryModel::find($id);
        if (is_null($category)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $category->status = $category->status ? 0 : 1;
        $category->save();
        return response()->json($category, 200);
    }
}
