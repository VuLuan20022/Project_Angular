import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { StudentService } from '../../../../services/StudentService';


@Component({
  selector: 'app-add-student-list',
  templateUrl: './add-student-list.component.html',
  styleUrls: ['./add-student-list.component.css']
})

export class AddStudentListComponent {
  
  message: any;
  errorMessage: any;
  // userData: FormGroup;
  createForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private studentService: StudentService){
    this.createForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.studentService.addStudent({
      "student": {
        "name": this.createForm.get('name')?.value,
        "birthday": this.createForm.get('birthday')?.value,
        "gender": this.createForm.get('gender')?.value === 'male',
        "address": this.createForm.get('address')?.value,
        "phone": this.createForm.get('phone')?.value,
        "email": this.createForm.get('email')?.value
      },
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
