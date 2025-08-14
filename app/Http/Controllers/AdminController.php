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
        $pendingUser = new PendingUsers();
        $validatedData = $request->validated();
        $validatedData['veriication_date'] = date('Y-m-d');

        $userLoginData = collect($validatedData)
            ->except(['username', 'password', 'status'])
            ->toArray();

        $pendingUser = PendingUsers::find('pending_user_id', $id);

        if(!$pendingUser || !in_array($pendingUser['role'], ['lgu', 'teacher'])) {
            return response()->json([
                'redirect' => url('/request'),
                'error'    => 'Request Denied!'
            ]);
        }

        if($validatedData['role'] == 'lgu' && $pendingUser) {
            Lgu::create($userLoginData);
        }

        if($validatedData['role'] == 'teacher' && $pendingUser) {
            Teacher::create($userLoginData);
        }

        UserLoginInfos::create([
            'user_id' => $pendingUser['pending_user_id'],
            'name' => $pendingUser['name'],
            'username' => $pendingUser['username'],
            'password' => $pendingUser['password'],
            'role' => $pendingUser['role'],
            'email' => $pendingUser['email'],
        ]);

        ApprovedUser::create([
            'name' => $pendingUser['name'],
            'id' => $pendingUser['id'],
            'role' => $pendingUser['role'],
            'date_approved' => date('l, F j, Y')
        ]);


        // Delete the pending user record
        $pendingUser->where('id', $id)->delete();

        return response()->json(
            [
                'redirect' => url('/request'),
                'success' => 'Request Approve Successfully!'
            ]
        );

    }

    public function declineRequest($id) {
        $pendingUser = PendingUsers::find('pending_user_id', $id);

        if($pendingUser) 
        {
            $pendingUser->where('id', $id)->delete();
            return redirect()->route('admin.pendingRequests')->with('success', 'Request Decline Successfully!');
        }
        else 
        {
            return redirect()->route('admin.pendingRequests')->with('error', 'Request Not Found!!');
        }
    }

    public function requestDetails($id) {
        $user = PendingUsers::find('pending_user_id', $id);
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
            'assign_teacher' => ''
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
