<?php

namespace App\Http\Controllers;

use App\Models\CommentModel;
use App\Models\RescueModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function index()
    {
        $comment = CommentModel::all();
        return response()->json($comment->sortByDesc('id')->values(), 200);
    }

    public function store(Request $request)
    {
        $comment = new CommentModel;
        $rules = [
            'content' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $comment->user_id = $request['user_id'];
        $comment->species_id = $request['species_id'];
        $comment->content = $request['content'];
        $comment->save();
        return response()->json($comment, 201);
    }

    public function show($id)
    {
        $comment = CommentModel::find($id);
        if (is_null($comment)) {
            return response()->json(["message" => "Record not found!!"], 404);
        }
        return response()->json($comment, 200);
    }


    public function destroy($id)
    {
        $comment = CommentModel::find($id);
        if (is_null($comment)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $comment->delete();
        return response()->json(null, 204);
    }
    public function changeStatus($id)
    {
        $comment = CommentModel::find($id);
        if (is_null($comment)) {
            return Response()->json(["message" => "Record not found!!"], 404);
        }
        $comment->status = $comment->status ? 0 : 1;
        $comment->save();
        return response()->json($comment, 200);
    }
}
