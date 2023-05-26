import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { SignupService } from '../../services/SignupService';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  singupForm: FormGroup;
  errorMessage: any;
  message: any;
  constructor(private fb: FormBuilder, private router: Router, private signupService: SignupService) {
    // Nó cung cấp một số phương thức để tạo ra các control như FormControl, FormGroup,
    this.singupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]],
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]]
    })
  }
  setColor() {
    const dateInput = document.getElementById("myDateInput") as HTMLInputElement;
    if (dateInput.value !== '') {
      dateInput.style.color = "black";
    } else {
      dateInput.style.color = "white";
    }
  }

  onSubmit() {
    this.signupService.register({
      account: {
        email: this.singupForm.get('email')?.value,
        password: this.singupForm.get('password')?.value
      },
      repassword: this.singupForm.get('repassword')?.value,
      student: {
        name: this.singupForm.get('name')?.value,
        birthday: this.singupForm.get('birthday')?.value,
        gender: this.singupForm.get('gender')?.value === 'male',
        address: this.singupForm.get('address')?.value,
        phone: this.singupForm.get('phone')?.value
      }
    }).subscribe({
      next: (response) => {
        // Xử lý kết quả thành công
        if (response.status === 200) {
          this.message = response.body.message;
          console.log(this.message);
          this.router.navigate(['/login']);
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
