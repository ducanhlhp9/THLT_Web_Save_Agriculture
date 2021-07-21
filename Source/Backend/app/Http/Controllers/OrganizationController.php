<?php

namespace App\Http\Controllers;

use App\Models\OrganizationModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrganizationController extends Controller
{
    public function index()
    {
        $organization = OrganizationModel::all();
        return response()->json($organization->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {

        $rules = [
            'name' => 'required',
            'title' => 'required',
            'title_seo' => 'required',
            'description' => 'required',
            'description_seo' => 'required',
            'content1' => 'required',
            'cat_id' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $organization = new OrganizationModel();
        $organization->name = $request['name'];
        $organization->slug = str_slug( $request['name']);
        $organization->title = $request['title'];
        $organization->title_seo = $request['title_seo'];
        $organization->description = $request['description'];
        $organization->description_seo = $request['description_seo'];
        $organization->content1 = $request['content1'];
        $organization->content2 = $request['content2'];
        $organization->content3 = $request['content3'];
        $organization->cat_id = $request['cat_id'];
        $organization->user_id = $request['user_id'];
        if ($request->hasFile('image1')) {
            $file = upload_image('image1');
            if (isset($file['name'])) {
                $organization->image1 = $file['name'];
            }
        }
        if ($request->hasFile('image2')) {
            $file = upload_image('image2');
            if (isset($file['name'])) {
                $organization->image2 = $file['name'];
            }
        }
        if ($request->hasFile('image3')) {
            $file = upload_image('image3');
            if (isset($file['name'])) {
                $organization->image3 = $file['name'];
            }
        }
        $organization->save();
        return response()->json($organization, 201);
    }

    public function show($id)
    {
        $organization = OrganizationModel::find($id);
        if (is_null($organization)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($organization, 200);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'name' => 'required',
            'title' => 'required',
            'title_seo' => 'required',
            'description' => 'required',
            'description_seo' => 'required',
            'content1' => 'required',
            'cat_id' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $organization = new OrganizationModel();
        if ($id) $organization = OrganizationModel::find($id);
        $organization->name = $request['name'];
        $organization->slug = str_slug( $request['name']);
        $organization->title = $request['title'];
        $organization->title_seo = $request['title_seo'];
        $organization->description = $request['description'];
        $organization->description_seo = $request['description_seo'];
        $organization->content1 = $request['content1'];
        $organization->content2 = $request['content2'];
        $organization->content3 = $request['content3'];
        $organization->cat_id = $request['cat_id'];
        $organization->user_id = $request['user_id'];
        $organization->image1 = $request['image1'];
        $organization->image2 = $request['image2'];
        $organization->image3 = $request['image3'];

        $organization->update($request->all());
//        $species->save();
        return response()->json($organization, 200);
    }

    public function destroy($id)
    {
        $organization = OrganizationModel::find($id);
        if (is_null($organization)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $organization->delete();
        return response()->json(null, 204);
    }
    public function changeStatus($id)
    {
        $organization = OrganizationModel::find($id);
        if (is_null($organization)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $organization->status = $organization->status ? 0 : 1;
        $organization->save();
        return response()->json($organization, 200);
    }
}
