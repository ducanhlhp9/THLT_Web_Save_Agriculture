<?php

namespace App\Http\Controllers;

use App\Models\RescueModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class RescueController extends Controller
{
    public function index()
    {
        $rescue = RescueModel::all();
        return response()->json($rescue->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {

        $rules = [
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'job' => 'required',
            'message' => 'required',
            'species_id' => 'required',
            'user_id' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $rescue = new RescueModel();
        $rescue->species_id = $request['species_id'];
        $spe_cat_id = DB::table('species')->where('id', $request['species_id'])->value('spe_cat_id');
        $rescue->cat_id = $spe_cat_id;
        $rescue->name = $request['name'];
        $rescue->slug = str_slug( $request['name']);
        $rescue->email = $request['email'];
        $rescue->phone = $request['phone'];
        $rescue->address = $request['address'];
        $rescue->job = $request['job'];
        $rescue->message = $request['message'];
        $rescue->user_id = $request['user_id'];

        $rescue->save();
        return response()->json($rescue, 201);
    }

    public function show($id)
    {
        $rescue = RescueModel::find($id);
        if (is_null($rescue)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($rescue, 200);
    }


    public function destroy($id)
    {
        $rescue = RescueModel::find($id);
        if (is_null($rescue)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $rescue->delete();
        return response()->json(null, 204);
    }
    public function changeStatus($id)
    {
        $rescue = RescueModel::find($id);
        if (is_null($rescue)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $rescue->status = $rescue->status ? 0 : 1;
        $rescue->save();
        return response()->json($rescue, 200);
    }
}
