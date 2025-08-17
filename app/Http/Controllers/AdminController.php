<?php

namespace App\Http\Controllers;

use App\Models\PendingUsers;
use App\Models\ApprovedUser;
use App\Models\Students;
use App\Http\Requests\StoreAcceptRequest;
use App\Models\Lgu;
use App\Models\Teacher;
use App\Models\UserLoginInfos;
use App\Models\Sections;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $data['pendingRequestsCount'] = PendingUsers::all()->count();
        $data['title_page'] = 'Dashboard';
        
        return view('pages.admin.adminPage', $data);
    }

    public function pendingRequests()
    {
        $data['pendingRequestsCount'] = PendingUsers::all()->count();
        $data['pendingUsers'] = PendingUsers::all();
        $data['title_page'] = 'Pending Requests';
        
        return view('pages.admin.pendingRequest', $data);
    }

    public function showApprovedRequests()
    {
        $data['approvedUsers'] = ApprovedUser::all();
        $data['pendingRequestsCount'] = ApprovedUser::all()->count();
        $data['title_page'] = 'Approved Requests';
        
        return view('pages.admin.approvedRequest', $data);
    }

    public function acceptRequest(StoreAcceptRequest $request, $id)
    {
        $validatedData = $request->validated();

        $userLoginData = collect($validatedData)
            ->except(['username', 'password', 'status'])
            ->toArray();

        $pendingUser = PendingUsers::find($id);

        if(!$pendingUser || !in_array($pendingUser['role'], ['lgu', 'teacher'])) {
            return response()->json(['success'    => false,'redirect' => url('/request')]);
        }

        ApprovedUser::create([
            'approved_user_id' => $pendingUser['pending_user_id'],
            'name' => $pendingUser['name'],
            'role' => $pendingUser['role'],
        ]);

        UserLoginInfos::create([
            'user_id' => $pendingUser['pending_user_id'],
            'name' => $pendingUser['name'],
            'username' => $pendingUser['username'],
            'password' => $pendingUser['password'],
            'role' => $pendingUser['role'],
            'email' => $pendingUser['email'],
        ]);

        if($validatedData['role'] == 'lgu' && $pendingUser) {
            Lgu::create([
                'lgu_id' => $pendingUser['pending_user_id'],
                'name' => $pendingUser['name'],
                'email' => $pendingUser['email'],
                'role' => $pendingUser['role'],
                'lgu_type' => $validatedData['lgu_type'],
                'area' => $validatedData['area'],
            ]);
        }

        if($validatedData['role'] == 'teacher' && $pendingUser) {
            Teacher::create([
                'teacher_id' => $pendingUser['pending_user_id'],
                'name' => $pendingUser['name'],
                'email' => $pendingUser['email'],
                'role' => $pendingUser['role'],
                'grade_level' => $validatedData['grade_level'],
                'section' => $validatedData['section'],
            ]);

        }

        // Delete the pending user record
        PendingUsers::where('pending_user_id', $id)->delete();

        return response()->json(['success' => true, 'url' => url('/request')]);
    }

    public function declineRequest($id) {
        
        $pendingUser = PendingUsers::find($id);

        if($pendingUser) 
        {
            PendingUsers::where('pending_user_id', $pendingUser['pending_user_id'])->delete();
            return redirect()->route('admin.pendingRequests')->with('success', 'Request Decline Successfully!');
        }
        else 
        {
            return redirect()->route('admin.pendingRequests')->with('error', 'Request Not Found!!');
        }
    }

    public function requestDetails($id) {

        $user = PendingUsers::find($id);
        try 
        {
            if(!$user) return redirect()->route('admin.pendingRequests')->with('error', 'Request Not Found!!');
            
            return response()->json($user);
        }
        catch(\Exception $e) {
            return redirect()->route('admin.pendingRequests')->with('error', 'Request Not Found!!');
        }
    }

    public function fetchAvailableSections($id) {

        $availableSections = Sections::where([
            'grade_level'   => $id,
            'assigned_teacher_id' => null
        ])->get();
        

        return response()->json($availableSections);
    }

    public function fetchAllSections($gradeLevel) {
        $allSections = Sections::where([
            'grade_level'   => $gradeLevel,
        ])->get();

        return response()->json($allSections);
    }

    public function fetchStudents($gradeLevel, $section) {
        $students = Students::where([
            'grade_level'   => $gradeLevel,
            'section'       => $section
        ])->get();

        return response()->json($students);
    }

    public function fetchSpecificStdent($id, $gradeLevel, $section) { 
        $student = Students::where([
            'student_id'    => $id,
            'grade_level'   => $gradeLevel,
            'section'       => $section
        ])->get();
    }

    public function fetchTeachers($gradeLevel, $section) {
        $teachers = Teacher::where([
            'grade_level'   => $gradeLevel,
            'section'       => $section
        ])->get();

        return response()->json($teachers);
    }
}
