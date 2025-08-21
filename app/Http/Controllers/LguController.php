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

        $data = Students::select('gender', $productSelected . ' as size', DB::raw('COUNT(*) as total'))
        ->where('grade_level', 1)
        ->groupBy('gender')
        ->get();

        return response()->json($data);
    }

    public function studentsSectionPerGradeLevel($gender, $gradeLevel, $section) {

        $result = Students::table('students')
                    ->where('grade_level', $gradeLevel)
                    ->where('section', $section)
                    ->where('gender', ucfirst($gender))
                    ->findAll();

        if (empty($result)) return response()->json(['message' => 'No Data Found ']);
        
        return response()->json($result);
    }

    public function overallStudentPerSection($gradeLevel) {

        $result = Students::table('students')
                    ->select('*, COUNT(*) as total')
                    ->groupBy('section')
                    ->where('grade_level', $gradeLevel)
                    ->findAll();

        if (empty($result)) return response()->json(['message' => 'No Data Found ']);

        return response()->json($result);
    }
}
