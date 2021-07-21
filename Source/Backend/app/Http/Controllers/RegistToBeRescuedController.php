<?php

namespace App\Http\Controllers;

use App\Models\OrganizationModel;
use App\Models\RegistToBeRescuedModel;
use App\Models\SpeciesModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class RegistToBeRescuedController extends Controller
{
    public function index()
    {
        $regist = RegistToBeRescuedModel::all();
        return response()->json($regist->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {

        $rules = [
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'description' => 'required',
            'message' => 'required',
            'spe_name' => 'required',
            'species_category_id' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $regist = new RegistToBeRescuedModel();
        $cat_id = DB::table('species_category')->where('id', $request['species_category_id'])->value('cat_id');
        $regist->cat_id = $cat_id;
        $regist->name = $request['name'];
        $regist->slug = str_slug( $request['name']);
        $regist->email = $request['email'];
        $regist->phone = $request['phone'];
        $regist->address = $request['address'];
        $regist->description = $request['description'];
        $regist->message = $request['message'];
        $regist->spe_name = $request['spe_name'];
        $regist->species_category_id = $request['species_category_id'];
        $regist->status = $request['status'];

        $regist->save();
        return response()->json($regist, 201);
    }

    public function show($id)
    {
        $regist = RegistToBeRescuedModel::find($id);
        if (is_null($regist)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($regist, 200);
    }


    public function destroy($id)
    {
        $regist = RegistToBeRescuedModel::find($id);
        if (is_null($regist)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $regist->delete();
        return response()->json(null, 204);
    }
    public function changeStatus($id)
    {
        $regist = RegistToBeRescuedModel::find($id);
        if (is_null($regist)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $regist->status = $regist->status ? 0 : 1;
        $regist->save();
        return response()->json($regist, 200);
    }
}
