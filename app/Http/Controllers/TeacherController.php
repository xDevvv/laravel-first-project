<?php

namespace App\Http\Controllers;
use App\Http\Requests\AddStudent;
use Illuminate\Http\Request;
use App\Models\Teacher;
use App\Models\Students;
use Illuminate\Support\Facades\Auth;

class TeacherController extends Controller
{   

    public function dashboard()
    {
        $teacher = Teacher::where('teacher_id', Auth::user()->user_id)->first();

        $data['students'] =    Students::where('grade_level', $teacher['grade_level'])
                                            ->where('section', $teacher['section'])
                                            ->get();

        $data['boys']     = count(Students::where('gender', 'Male')
                                            ->where('grade_level', $teacher['grade_level'])
                                            ->where('section', $teacher['section'])
                                            ->get());

        $data['girls']    = count(Students::where('gender', 'Female')
                                            ->where('grade_level', $teacher['grade_level'])
                                            ->where('section', $teacher['section'])
                                            ->get());   
        
        $data['total']    = count(Students::where('gender', 'Female')
                                            ->where('grade_level', $teacher['grade_level'])
                                            ->where('section', $teacher['section'])
                                            ->get());

        $data['teacher'] = $teacher;

        $data['title_page'] = 'Dashboard';

        return view('pages.teacher.dashboard', $data);
    }

    public function studentInformation() {

        $data['teacher'] = Teacher::where('teacher_id', Auth::user()->user_id)->first();
        $data['title_page'] = 'Student Information';

        return view('pages.teacher.studentInformation', $data);
    }
    

    public function addStudent(AddStudent $request) {
        $validatedData = $request->validated();

        Students::create($validatedData);

        return redirect()->route('teacher.studentInformation')->with('add_successfully', 'Added successfully!');
    }

    public function deleteStudents(Request $request) {

        try {

            $ids = $request->input('ids');

            if (!$ids || !is_array($ids)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No students selected.'
                ]);
            }

            Students::whereIn('student_id', $ids)->delete();
            return response()->json(['success' => true]);

        } catch (\Exception $e) {
            return response()->json(['success' => false]);
        }

    }
}
