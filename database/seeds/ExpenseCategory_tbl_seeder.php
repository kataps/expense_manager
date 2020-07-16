<?php

use Illuminate\Database\Seeder;
use App\ExpenseCategory;
class ExpenseCategory_tbl_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        ExpenseCategory::create([
                'name' => 'Sample Category'
        ]);

    }
}
