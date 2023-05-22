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
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.getData(1).subscribe((val: any) => {
      // this.items = val.data;
      console.log(val);
    })
    // Nó cung cấp một số phương thức để tạo ra các control như FormControl, FormGroup,
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit() {
  }
  user = {
    email: 'luanvsce@gmail.com',
    password: 123
  }
  onSubmit() {

    if(this.loginForm.get('email')?.value == this.user.email
     && this.loginForm.get('password')?.value == this.user.password)  this.router.navigate(['/student']);

  }
  name: string = "";

  getData(id: number): Observable<any>{
    //return list
    return this.http.get<any>('http://localhost:8080/api/student/get?studentId='+id);
  }
}
