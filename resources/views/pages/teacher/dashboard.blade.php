@extends('base-layout.main')

@section('navBarList')
    <li><a href="/teacher">Home</a></li>
    <li><a href="/student_information">Input</a></li>
    <li><a href="/logout">Logout</a></li>
@endSection


@section('content')
    <div class="container-fluid">
        <div class="dashboard-header row mt-sm-4 mx-sm-5">
            <div class="col-6 name-container">
                <h2>{{ $teacher['grade_level'] . ' - ' . $teacher['section'] }}</h2>
                <div class="teacher-name-container">Adviser : {{ $teacher['name'] }}</div>
            </div>
            <div class="col-6 total-student-container" style="display: flex; align-items: end;">
                <div class="number-of-student">
                    <span>Boys: {{ $boys }}</span>
                    <span>Girls: {{ $girls }}</span>
                    <span style="color: white;">Total: {{ $total }}</span>
                </div>
            </div>
        </div>
        <div style="min-height: 391px;">
            <div class="table-list row mx-5 pt-4 mb-4 d-sm-none d-lg-block">
                <table class="rounded-table" style="border-radius: 10px; ">
                    <thead>
                        <tr>
                            <th scope="col" style="border-right: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);"></th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Student Name</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">School Supplies</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">P.E Shirt Size</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">P.E Pants Size</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Polo / Blouse Size</th>
                            <th style="text-align: center; border-inline: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Slacks / Skirts Size</th>
                            <th style="text-align: center; border-left: 1px solid var(--light-blue); border-bottom: 1px solid var(--light-blue);" scope="col">Shoe Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($students as $student)
                            <tr>
                                <td style="border-right: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><input style="margin-left: 20px;" type="checkbox"></td>
                                <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><?= $student['first_name'] . ' ' . $student['last_name'] ?></td>
                                <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><?= $student['school_supplies'] ?></td>
                                <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><?= $student['t_shirt_size'] ?></td>
                                <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><?= $student['pants_size'] ?></td>
                                <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><?= $student['polo_blouse_size'] ?></td>
                                <td style="text-align: center; border-inline: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><?= $student['slacks_skirt_size'] ?></td>
                                <td style="text-align: center; border-left: 1px solid var(--light-blue); border-block: 1px solid var(--light-blue);"><?= $student['shoe_size'] ?></td>
                            </tr>   
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div class="card-list mx-sm-5 pt-4 d-sm-block d-lg-none">
                <table class="rounded-table w-100">
                    <thead>
                        <th style="text-align: center;">Student Name</th>
                        <th style="text-align: center;">Gender</th>
                        <th style="text-align: center;">Action</th>    
                    </thead>
                    <tbody class="student-card-body">
                        @foreach ($students as $student )
                            <tr>
                                <td style="text-align: center;"><?= $student['first_name'] . ' ' . $student['last_name'] ?></td>
                                <td style="text-align: center;"><?= $student['gender'] ?></td>
                                <td style="text-align: center;">
                                    <button class="btn btn-sm btn-primary" onclick="fetchSpecificStudent(<?= $student['student_id'] ?>, <?= $student['grade_level'] ?>, '<?= $student['section'] ?>')">
                                        View
                                    </button>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection

@section('footer')
    <div class="container-fluid line"></div>
@endsection