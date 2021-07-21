<?php

namespace App\Http\Controllers;

use App\Models\SpeciesModel;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request){
//        $species = SpeciesModel::Where('name', 'ilike', '%' . $request['name'] . '%')->get();
        $species = SpeciesModel::where('name', 'like', '%' . $request['name'] . '%')->get();
        return response()->json($species, 200);
    }
}
