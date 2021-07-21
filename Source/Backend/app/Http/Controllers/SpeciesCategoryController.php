<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use App\Models\SpeciesCategoryModel;
use App\Models\SpeciesModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SpeciesCategoryController extends Controller
{
    public function index()
    {
        $speciesCategory = SpeciesCategoryModel::all();
        return response()->json($speciesCategory->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {
        $speciesCategory = new SpeciesCategoryModel;
        $rules = [
            'name' => 'required',
            'cat_id' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $speciesCategory->name = $request['name'];
        $speciesCategory->slug = str_slug($request['name']);
        $speciesCategory->cat_id = $request['cat_id'];

        $speciesCategory->save();
        return response()->json($speciesCategory, 201);
    }

    public function show($id)
    {
        $speciesCategory = SpeciesCategoryModel::find($id);
        if (is_null($speciesCategory)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($speciesCategory, 200);
    }

    public function update(Request $request, $id)
    {
        $speciesCategory = SpeciesCategoryModel::find($id);
        if (is_null($speciesCategory)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $rules = [
            'name' => 'required',
            'cat_id' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $speciesCategory->name = $request['name'];
        $speciesCategory->slug = str_slug($request['name']);
        $speciesCategory->cat_id = $request['cat_id'];

        $speciesCategory->save();
        return response()->json($speciesCategory, 200);
    }

    public function destroy($id)
    {
        $speciesCategory = SpeciesCategoryModel::find($id);
        if (is_null($speciesCategory)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $speciesCategory->delete();
        return response()->json(null, 204);
    }
    public function changeStatus($id)
    {
        $speciesCategory = SpeciesCategoryModel::find($id);
        if (is_null($speciesCategory)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $speciesCategory->status = $speciesCategory->status ? 0 : 1;
        $speciesCategory->save();
        return response()->json($speciesCategory, 200);
    }

    public function changeActive($id)
    {
        $speciesCategory = SpeciesCategoryModel::find($id);
        if (is_null($speciesCategory)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $speciesCategory->active = $speciesCategory->active ? 0 : 1;
        $speciesCategory->save();
        return response()->json($speciesCategory, 200);
    }
}
