import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subject, catchError, map, of, takeUntil } from 'rxjs';
import { LoginService } from '../../services/LoginService';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private ngUnsubscribe = new Subject();
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
    }).pipe(
      takeUntil(this.ngUnsubscribe),
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          const token = response.body.token;
          //giải mã token
          const decodedToken = jwt_decode(token);
          // Kiểm tra xem 'decodedToken' có thuộc tính 'email' và 'role' hay không
          if (typeof decodedToken === 'object' && decodedToken !== null && 'email' in decodedToken && 'role' in decodedToken) {
            localStorage.setItem('loginInfo', JSON.stringify({ email: decodedToken['email'], role: decodedToken['role'] }));
            return true;
          } else {
            throw new Error('Invalid decodedToken');
          }
        } else {
          // Xử lí nến có các status khác
          throw new Error(response.body.error);
        }
      })
      ,
      // Bắt lỗi các status khác 2xx hoặc 304
      catchError((error) => {
        // Có lỗi - thông báo lỗi ở đây
        console.error(error, 'Error occurred');
        this.errorMessage = error.error;
        return of();
      })
    ).subscribe((success) => {
      if (success) {
        this.router.navigate(['/student']);
      }
    });
  }

}
