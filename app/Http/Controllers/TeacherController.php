<?php

namespace App\Http\Controllers;

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

        $data['teacher'] = Teacher::where('id', Auth::user()->id)->first();
        $data['title_page'] = 'Student Information';

        return view('pages.teacher.studentInformation', $data);
    }
    
    public function addStudent(Request $request) {
        $validatedData = $request->validated();

        Students::create($validatedData);
    }
}
