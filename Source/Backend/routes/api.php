<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//
////Route::get('articleSpecies','ArticleSpeciesController@ArticleSpecies');
////Route::get('articleSpecies/{id}','ArticleSpeciesController@ArticleSpeciesByID');
////Route::post('articleSpecies','ArticleSpeciesController@ArticleSpeciesSave');
////Route::put('articleSpecies/{id}','ArticleSpeciesController@ArticleSpeciesUpdate');
////Route::delete('articleSpecies/{id}','ArticleSpeciesController@ArticleSpeciesDelete');
//
//Route::get('file/articleSpecies_list','FileController@articleSpeciesList');
//Route::post('file/articleSpecies_list','FileController@articleSpeciesSave');
//
////Route::get('category','CategoryController@Category');
////Route::get('category/{id}','CategoryController@CategoryByID');
////Route::post('category','CategoryController@CategorySave');
////Route::put('category/{id}','CategoryController@CategoryUpdate');
////Route::delete('category/{id}','CategoryController@CategoryDelete');
//Route::apiResource('articleSpecies','ArticleSpecies');
//Route::get("articleSpecies/articleSpeciesSame/{id}","ArticleSpecies@ArticlesSpeciesSame");
//
//
//Route::apiResource('category','Category');
//Route::post("category/changeStatus/{id}","Category@changeStatus");
//
//
//Route::apiResource('species','Species');
//Route::post("species/changeStatus/{id}","species@changeStatus");
//Route::post("species/changeHot/{id}","species@changeHot");
//
//
//
//Route::post('uploadFileSave','FileController@FileSave');
//Route::post('uploadFileArticles','FileController@FileSaveArticles');
//
//
//Route::apiResource('admin','AdminController');

//--------------------------------------------------------------------------------------
//authentication
//user
Route::post('/register','UserController@register');
Route::post('/login','UserController@login');
Route::post('/user','UserController@index');

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('/profile', 'UserController@getAuthenticatedUser');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('user','UserController');


    //admin
Route::post('admin/register','AdminAuthController@register');
Route::post('admin/login','AdminAuthController@login');
Route::get('admin/getAdminInfo','AdminAuthController@getAdminInfo');

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('getAdminInfo', 'AdminAuthController@getAdminInfo');
});
Route::apiResource('admin','AdminController');

//api action
Route::apiResource('category','CategoryController');
Route::post('category/changeStatus/{id}','CategoryController@changeStatus');

Route::apiResource('speciesCategory','SpeciesCategoryController');
Route::post("speciesCategory/changeStatus/{id}","SpeciesCategoryController@changeStatus");
Route::post("speciesCategory/changeActive/{id}","SpeciesCategoryController@changeActive");


Route::apiResource('species','SpeciesController');
Route::post("species/changeStatus/{id}","SpeciesController@changeStatus");
Route::post("species/changeActive/{id}","SpeciesController@changeActive");

Route::apiResource('contact','ContactController');

Route::apiResource('comment','CommentController');
Route::post("comment/changeStatus/{id}","CommentController@changeStatus");

Route::apiResource('organizationCategory','OrganizationCategoryController');

Route::apiResource('organization','OrganizationController');
Route::post("organization/changeStatus/{id}","OrganizationController@changeStatus");


Route::apiResource('rescueCategory','RescueCategoryController');

Route::apiResource('rescue','RescueController');

Route::apiResource('registToBeRescued','RegistToBeRescuedController');
Route::post("registToBeRescued/changeStatus/{id}","RegistToBeRescuedController@changeStatus");


Route::post('uploadFileCategory','FileController@FileCategory');
Route::post('uploadFileSpecies','FileController@FileSpecies');
Route::post('uploadFileOrganization','FileController@FileOrganization');
Route::post('uploadFileOrganizationCategory','FileController@FileOrganizationCategory');
Route::post('uploadFileFileRescueCategory','FileController@FileRescueCategory');

Route::post('search','SearchController@search');
