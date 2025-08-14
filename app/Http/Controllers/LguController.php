<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Students;

class LguController extends Controller
{
    public function dashboard() {
        $title_page = 'Home';
        return view('pages.lgu.lgu_dashboard', ['title_page' => $title_page]);
    }

    public function studentRecords(Request $request) {

        $data = $request->json()->all();

        $result = Students::table('students') // change 'students' to your table name
            ->select('gender',  Students::raw($data['product'] . ' as size'), Students::raw('COUNT(*) as total'))
            ->where('grade_level', $data['gradeLevel'])
            ->groupBy('gender', $data['product'])
            ->get();

        return response()->json($result);
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
