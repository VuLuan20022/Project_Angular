import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  token: string = '';
  error: string = '';
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {

    // Nó cung cấp một số phương thức để tạo ra các control như FormControl, FormGroup,
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    })

  }

  async ngOnInit() {
  }
  user = {
    email: 'luanvsce@gmail.com',
    password: 123
  }
  async onSubmit() {
      await this.checkLogin();
      console.log(this.token);
      if(this.token != null){
        this.router.navigate(['/student']);
      }
      else {
        this.error = 'Email or password invalid!';
      }

  }
  name: string = "";

  getData(): Observable<any>{
    //return list
    return this.http.get<any>('http://localhost:8080/api/login');
  }

  async checkLogin(): Promise<any>{
    const data = {
      email: "du@gmail.com",
      password: "123"
    }

    const rs: any = await this.http.post('http://localhost:8080/api/login', data).toPromise();
    this.token = rs.token;
  }
}
