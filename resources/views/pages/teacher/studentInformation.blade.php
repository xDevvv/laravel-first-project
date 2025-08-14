@extends('base-layout.main')

@section('navBarList')
    <li><a href="/teacher">Home</a></li>
    <li><a href="/student_information">Input</a></li>
    <li><a href="/logout">Logout</a></li>
@endSection

@section('content')
    <div class="container-fluid">
        @if(session()->has('add_successfully'))
            <div class="alert fade show teacher-lgu-success-notif" role="alert">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ $message }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        @endif
        <div class="container-fluid container-title">Student's Information</div>
        <form action="" method="post">
            @csrf
            <div class="container-fluid student-information my-5">
                <div class="row d-flex justify-content-center mx-lg-5">
                    <div class="col-lg-5 col-md-12 my-5">
                        <div class="container-fluid student-info-input">
                            <label for="student-id">Student ID: </label>
                            <input type="text" class="form-control" placeholder="Student ID" id="student-id" name="student_id" value="{{ old('student_id') }}">
                            @error('student_id')
                                <div class="mt-2 input-lgu_type-error show">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="container-fluid student-info-input">
                            <label for="">Teacher ID:</label>
                            <input type="text" class="form-control" placeholder="Teacher ID" id="teacher-id" name="teacher_id" value="{{ $teacher['id'] }}" readonly>
                            @error('teacher_id')
                                <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                            @enderror
                        </div>
                        <div class="container-fluid student-info-input">
                            <label for="">Firstname:</label>
                            <input type="text" class="form-control" placeholder="Firstname" id="firstname" name="first_name" value="{{ old('first_name') }}">
                            @error('first_name')
                                <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                            @enderror
                        </div>
                        <div class="container-fluid student-info-input">
                            <label for="">Middle Name:</label>
                            <input type="text" class="form-control" placeholder="Middle Name" id="middle-name" name="middle_name" value="{{ old('middle_name') }}">
                            @error('middle_name')
                                <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                            @enderror
                        </div>
                        <div class="container-fluid student-info-input">
                            <label for="">Lastname:</label>
                            <input type="text" class="form-control" placeholder="Lastname" id="last-name" name="last_name" value="{{ old('last_name') }}">
                            @error('last_name')
                                <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                            @enderror
                        </div>
                        <div class="container-fluid student-info-input">
                            <label for="">Contact No:</label>
                            <input type="text" class="form-control" placeholder="Contact No." id="contact-no" name="contact_no" value="{{ old('contact_no') }}">
                            @error('contact_no')
                                <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                            @enderror
                        </div>
                    </div>    
                    <div class="col-lg-5 col-md-12 mt-lg-5 mb-5">
                        <div class="container-fluid input-2-col">
                            <div class="container px-0 student-info-input">
                                <label for="">Age:</label>
                                <input type="text" class="form-control" placeholder="Age " id="age" name="age" value="{{ old('age') }}">
                                @error('age')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                            <div class="container px-0 student-info-input">
                                <label for="">Gender:</label>
                                <select id="gender" name="gender">
                                    <option value="" hidden> -- Choose --</option>
                                    <option value="Male" {{ old('gender') == 'Male' ? 'Selected' : '' }}>Male</option>
                                    <option value="Female" {{ old('gender') == 'Female' ? 'Selected' : '' }}>Female</option>
                                </select>
                                @error('gender')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                        </div>
                        <div class="container-fluid input-2-col">
                            <div class="container px-0 student-info-input">
                                <label for="">Grade Level:</label>
                                <input type="text" class="form-control" placeholder="Grade Level" id="grade_level" name="grade_level" value="{{ $teacher['grade_level'] }}" readonly>
                                @error('grade_level')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                            <div class="container px-0 student-info-input">
                                <label for="">Section:</label>
                                <input type="text" class="form-control" placeholder="Section" id="section" name="section" value="{{ $teacher['section'] }}" readonly>
                                @error('section')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                        </div>    
                        <div class="container-fluid input-2-col">
                            <div class="container px-0 student-info-input">
                                <label for="">Height:</label>
                                <input type="text" class="form-control" placeholder="Height (cm)" id="height" name="height" value="{{ old('height') }}">
                                @error('height')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                            <div class="container px-0 student-info-input">
                                <label for="">Weight:</label>
                                <input type="text" class="form-control" placeholder="Weight (kg)" id="weight" name="weight" value="{{ old('weight') }}">
                                @error('weight')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                        </div>
                        <div class="container-fluid input-2-col">
                            <div class="container px-0 student-info-input">
                                <label for="">P.E Shirt Size:</label>
                                <select id="t-shirt-size" name="t_shirt_size">
                                    <option value="" hidden> -- Choose --</option>
                                    <option value="Extra Small" {{ old('t_shirt_size') == 'Extra Small' ? 'Selected' : '' }}>Extra Small</option>
                                    <option value="Small" {{ old('t_shirt_size') == 'Small' ? 'Selected' : '' }}>Small</option>
                                    <option value="Medium" {{ old('t_shirt_size') == 'Medium' ? 'Selected' : '' }}>Medium</option>
                                    <option value="Large" {{ old('t_shirt_size') == 'Large' ? 'Selected' : '' }}>Large</option>
                                    <option value="Extra Large" {{ old('t_shirt_size') == 'Extra Large' ? 'Selected' : '' }}>Extra Large</option>
                                    <option value="Double XL" {{ old('t_shirt_size') == 'Double XL' ? 'Selected' : '' }}>Double XL</option>
                                </select>
                                @error('t_shirt_size')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                            <div class="container px-0 student-info-input">
                                <label for="">P.E Pants Size:</label>
                                <select id="pants-size" name="pants_size">
                                    <option value="" hidden> -- Choose --</option>
                                    <option value="Extra Small" {{ old('pants_size') == 'Extra Small' ? 'Selected' : '' }}>Extra Small</option>
                                    <option value="Small" {{ old('pants_size') == 'Small' ? 'Selected' : '' }}>Small</option>
                                    <option value="Medium" {{ old('pants_size') == 'Medium' ? 'Selected' : '' }}>Medium</option>
                                    <option value="Large" {{ old('pants_size') == 'Large' ? 'Selected' : '' }}>Large</option>
                                    <option value="Extra Large" {{ old('pants_size') == 'Extra Large' ? 'Selected' : '' }}>Extra Large</option>
                                    <option value="Double XL" {{ old('pants_size') == 'Double XL' ? 'Selected' : '' }}>Double XL</option>
                                </select>
                                @error('pants_size')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                        </div>
                        <div class="container-fluid input-2-col">
                            <div class="container px-0 student-info-input">
                                <label for="">Polo / Blouse Size:</label>
                                <select id="polo-size" name="polo_blouse_size">
                                    <option value="" hidden> -- Choose --</option>
                                    <option value="Extra Small" {{ old('polo_blouse_size') == 'Extra Small' ? 'Selected' : '' }}>Extra Small</option>
                                    <option value="Small" {{ old('polo_blouse_size') == 'Small' ? 'Selected' : '' }}>Small</option>
                                    <option value="Medium" {{ old('polo_blouse_size') == 'Medium' ? 'Selected' : '' }}>Medium</option>
                                    <option value="Large" {{ old('polo_blouse_size') == 'Large' ? 'Selected' : '' }}>Large</option>
                                    <option value="Extra Large" {{ old('polo_blouse_size') == 'Extra Large' ? 'Selected' : '' }}>Extra Large</option>
                                    <option value="Double XL" {{ old('polo_blouse_size') == 'Double XL' ? 'Selected' : '' }}>Double XL</option>
                                </select>
                                @error('polo_blouse_size')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                            <div class="container px-0 student-info-input">
                                <label for="">Slacks / Skirt size:</label>
                                <select id="slacks-size" name="slacks_skirt_size">
                                    <option value="" hidden> -- Choose --</option>
                                    <option value="Extra Small" {{ old('slacks_skirt_size') == 'Extra Small' ? 'Selected' : '' }}>Extra Small</option>
                                    <option value="Small" {{ old('slacks_skirt_size') == 'Small' ? 'Selected' : '' }}>Small</option>
                                    <option value="Medium" {{ old('slacks_skirt_size') == 'Medium' ? 'Selected' : '' }}>Medium</option>
                                    <option value="Large" {{ old('slacks_skirt_size') == 'Large' ? 'Selected' : '' }}>Large</option>
                                    <option value="Extra Large" {{ old('slacks_skirt_size') == 'Extra Large' ? 'Selected' : '' }}>Extra Large</option>
                                    <option value="Double XL" {{ old('slacks_skirt_size') == 'Double XL' ? 'Selected' : '' }}>Double XL</option>
                                </select>
                                @error('slacks_skirt_size')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                        </div>
                        <div class="container-fluid input-2-col">
                            <div class="container px-0 student-info-input">
                                <label for="">Shoe size: </label>
                                <input type="text" class="form-control" placeholder="Shoe size" id="shoe-size" name="shoe_size" value="{{ old('shoe_size') }}">
                                @error('shoe_size')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                            <div class="container px-0 student-info-input">
                                <label for="">School Supplies: </label>
                                <select id="school-supplies" name="school_supplies">
                                    <option value="" hidden> -- Choose --</option>
                                    <option value="yes" {{ old('school_supplies') == 'yes' ? 'Selected' : '' }}>Yes</option>
                                    <option value="no" {{ old('school_supplies') == 'no' ? 'Selected' : '' }}>No</option>
                                </select>
                                @error('school_supplies')
                                    <div class="mt-2 input-lgu_type-error show"> {{ $message }} </div>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mb-4 mt-3 d-flex justify-content-end save-button-container">
                <button type="submit" class="btn btn-primary save-btn" id="save-button">Save</button>
            </div>
        </form>
    </div>
@endSection()

@section('footer')
    <div class="container-fluid line"></div>
@endsection