import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject} from 'rxjs';
import { LoginService } from '../../services/LoginService';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: any;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    // Nó cung cấp một số phương thức để tạo ra các control như FormControl, FormGroup,
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login({
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }).subscribe({
      next: (response) => {
        if (response.status === 200) {
          const token = response.body.token;
          console.log(token);
          
          //giải mã token
          const decodedToken = jwt_decode(token);
          // Kiểm tra xem 'decodedToken' có thuộc tính 'email' và 'role' hay không
          if (typeof decodedToken === 'object' && decodedToken !== null && 'email' in decodedToken && 'role' in decodedToken) {
            localStorage.setItem('loginInfo', JSON.stringify({ email: decodedToken['email'], role: decodedToken['role'] }));
            this.router.navigate(['/student']); 
          } else {
            throw new Error('Invalid decodedToken');
          }
        } else {
          // Xử lí các status khác không phải lỗi nếu có
          throw new Error(response.body);
        }
      },
      error: (error) => {
        console.log(error.status, 'Error occurred');
        if (error.status === 0) {
          this.errorMessage = 'Can not connect to server';
        } else {
          this.errorMessage = error.error;
        }
      }
    })
  }

}
