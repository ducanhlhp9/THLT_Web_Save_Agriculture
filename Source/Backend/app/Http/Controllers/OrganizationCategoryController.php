<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use App\Models\OrganizationCategoryModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrganizationCategoryController extends Controller
{
    public function index()
    {
        $organizationCategory = OrganizationCategoryModel::all();
        return response()->json($organizationCategory->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {
        $organizationCategory = new OrganizationCategoryModel;
        $rules = [
            'name' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $organizationCategory->name = $request['name'];
        $organizationCategory->slug = str_slug($request['name']);
        if($request->hasFile('avatar')){
            $file = upload_image('avatar');
            if(isset($file['name'])){
                $organizationCategory->avatar= $file['name'];
            }
        }
        $organizationCategory->save();
        return response()->json($organizationCategory, 201);
    }

    public function show($id)
    {
        $organizationCategory = OrganizationCategoryModel::find($id);
        if (is_null($organizationCategory)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($organizationCategory, 200);
    }

    public function update(Request $request, $id)
    {
        $organizationCategory = OrganizationCategoryModel::find($id);
        if (is_null($organizationCategory)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $rules = [
            'name' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $organizationCategory->name = $request['name'];
        $organizationCategory->slug = str_slug($request['name']);
        $organizationCategory->avatar = $request['avatar'];
        $organizationCategory->save();
        return response()->json($organizationCategory, 200);
    }

    public function destroy($id)
    {
        $organizationCategory = OrganizationCategoryModel::find($id);
        if (is_null($organizationCategory)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $organizationCategory->delete();
        return response()->json(null, 204);
    }
}
