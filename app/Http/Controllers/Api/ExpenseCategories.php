<?php

declare(strict_types = 1);

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


use App\Http\Requests\CategoriesRequestStore;

use App\ExpenseCategory;

class ExpenseCategories extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request ) : JsonResponse
    {   
        $result = ExpenseCategory::all();
        return  response()->json( $result, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoriesRequestStore  $request) : JsonResponse
    {
        //
         $expenseCategory = ExpenseCategory::create([
                'name' => $request->name,  
         ]);
         return response()->json($expenseCategory,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) : JsonResponse
    {
        //
       
        $request->validate([
             'name' => 'required',
        ]);
    
        $category = ExpenseCategory::findOrFail($id);
        $category->name = $request->name;
        $category->save();
      
        return response()->json($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) : JsonResponse
    {
       $expenseCategory = ExpenseCategory::findOrFail($id);
       $expenseCategory->delete();

       return  response()->json( $expenseCategory,200);
    }
}
