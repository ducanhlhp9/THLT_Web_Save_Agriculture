<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use App\Models\OrganizationCategoryModel;
use App\Models\OrganizationModel;
use App\Models\RescueCategoryModel;
use App\Models\SpeciesModel;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public  function articleSpeciesList(){
        return response()->download(public_path(''));
    }
    public function FileCategory(Request $request){
        $category = new CategoryModel();
        if($request->hasFile('avatar')){
            upload_image('avatar');
        }
    }

    public function FileRescueCategory(Request $request){
        $rescueCategory = new RescueCategoryModel();
        if($request->hasFile('avatar')){
            upload_image('avatar');
        }
    }
    public function FileOrganizationCategory(Request $request){
        $organizationCategory = new OrganizationCategoryModel();
        if($request->hasFile('avatar')){
            upload_image('avatar');
        }
    }
    public function FileSpecies(Request $request){
        $Species = new SpeciesModel();
        if($request->hasFile('image1')){
            upload_image('image1');
        }
        if($request->hasFile('image2')){
            upload_image('image2');
        }
        if($request->hasFile('image3')){
            upload_image('image3');
        }
    }
    public function FileOrganization(Request $request){
        $organization = new OrganizationModel();
        if($request->hasFile('image1')){
            upload_image('image1');
        }
        if($request->hasFile('image2')){
            upload_image('image2');
        }
        if($request->hasFile('image3')){
            upload_image('image3');
        }
    }
}
