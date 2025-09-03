<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Students;

class LguController extends Controller
{
    public function dashboard() {
        $title_page = 'Home';
        return view('pages.lgu.lgu_dashboard', ['title_page' => $title_page]);
    }


    public function studentRecords($gradeLevel, $productSelected) {

        $queryAlias = ($productSelected == 'school_supplies') ? 'school_supplies' : 'size';

        $data = Students::select('gender', $productSelected . ' as ' . $queryAlias, DB::raw('COUNT(*) as total'))
        ->where('grade_level', $gradeLevel)
        ->groupBy('gender', $productSelected)
        ->get();

        return response()->json($data);
    }


    public function sectionPerGradeLevel($gradeLevel, $section) {

        $boys = Students::where('gender', 'Male')
                        ->where('grade_level', $gradeLevel)
                        ->where('section', $section)->get();

        $girls = Students::where('gender', 'Female')
                         ->where('grade_level', $gradeLevel)
                         ->where('section', $section)->get();

        if (empty($boys) && empty($girls)) return response()->json(['message' => 'No Data Found ']);
        
        return response()->json(['boys' => $boys, 'girls' => $girls]);
    }

    public function overallStudentPerSection($gradeLevel) {

        $result = DB::table('students')
            ->selectRaw('section, teacher_id, COUNT(*) as total')
            ->where('grade_level', $gradeLevel)
            ->groupBy('section', 'teacher_id')
            ->get();

        if (empty($result)) return response()->json(['message' => 'No Data Found ']);

        return response()->json($result);
    }
}
