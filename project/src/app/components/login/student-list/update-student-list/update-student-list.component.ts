import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Information } from 'src/app/infor/information';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { StudentService } from '../../../../services/StudentService';

@Component({
  selector: 'app-update-student-list',
  templateUrl: './update-student-list.component.html',
  styleUrls: ['./update-student-list.component.css']
})

export class UpdateStudentListComponent implements OnInit {

  studentId: number = 0;
  infor: any;
  message: any;
  errorMessage: any;

  // userData: FormGroup;
  updateForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private studentService: StudentService) {
    this.updateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      studentId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['studentId']) {
        this.studentId = params['studentId'];
        this.studentService.getStudent(this.studentId)
          .subscribe({
            next: (response) => {
              // Xử lý kết quả thành công
              if (response.status === 200) {
                this.infor = response.body as Information;
                console.log(this.infor);
                this.FillForm();
              } else {
                // Xử lí nếu có các status khác
                console.error('Error occurred');
                throw new Error(response.body.error);
              }
            },
            error: (error) => {
              // Xử lý lỗi
              console.log(error.status, 'Error occurred');
              if (error.status === 0) {
                this.errorMessage = 'Can not connect to server';
              } else {
                this.errorMessage = error.error;
              }
            }
          });
      } else {
        //thêm trang lỗi vào đây nếu không có param được truyền
        console.error('Where is params??? ', 'Error occurred');
      }
    })
  }

  FillForm() {
    this.updateForm.patchValue({
      studentId: this.infor.studentId,
      email: this.infor.email,
      name: this.infor.name,
      gender: this.infor.gender ? 'male' : 'female',
      phone: this.infor.phone,
      address: this.infor.address,
      birthday: this.infor.birthday
    });
  }

  onSubmit() {
    this.studentService.editStudent({
      "student": {
        "studentId": this.updateForm.get('studentId')?.value,
        "name": this.updateForm.get('name')?.value,
        "birthday": this.updateForm.get('birthday')?.value,
        "gender": this.updateForm.get('gender')?.value === 'male',
        "address": this.updateForm.get('address')?.value,
        "phone": this.updateForm.get('phone')?.value,
        "email": this.updateForm.get('email')?.value
      },
      "actived": true
    }).subscribe({
      next: (response) => {
        // Xử lý kết quả thành công
        if (response.status === 200) {
          this.message = response.body.message;
          console.log(this.message);
          this.router.navigate(['/student']);
        } else {
          // Xử lí nếu có các status khác
          console.error('Error occurred');
          throw new Error(response.body.error);
        }
      },
      error: (error) => {
        // Xử lý lỗi
        console.log(error.status, 'Error occurred');
        if (error.status === 0) {
          this.errorMessage = 'Can not connect to server';
        } else {
          this.errorMessage = error.error;
        }
      }
    });
  }

}
