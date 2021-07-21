<?php

namespace App\Http\Controllers;

use App\Models\ContactModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        $contact = ContactModel::all();
        return response()->json($contact->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {
        $contact = new ContactModel;
        $rules = [
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'message' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $contact->name = $request['name'];
        $contact->email = $request['email'];
        $contact->phone = $request['phone'];
        $contact->message = $request['message'];
        $contact->save();
        return response()->json($contact, 201);
    }

    public function show($id)
    {
        $contact = ContactModel::find($id);
        if (is_null($contact)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($contact, 200);
    }


    public function destroy($id)
    {
        $contact = ContactModel::find($id);
        if (is_null($contact)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $contact->delete();
        return response()->json(null, 204);
    }
}
