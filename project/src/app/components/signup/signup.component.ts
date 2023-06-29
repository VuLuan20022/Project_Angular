import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  singupForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    // Nó cung cấp một số phương thức để tạo ra các control như FormControl, FormGroup,
    this.singupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required],Validators.pattern('')]
      
    })




  }

  onSubmit() {



  }
}
