import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/LoginService'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './components/login/student-list/student-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupService } from './services/SignupService'; 
import { ForgetComponent } from './components/forget/forget.component';
import { UpdateStudentListComponent } from './components/login/student-list/update-student-list/update-student-list.component';
import { AddStudentListComponent } from './components/login/student-list/add-student-list/add-student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService} from './services/StudentService'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListComponent,
    SignupComponent,
    ForgetComponent,
    UpdateStudentListComponent,
    AddStudentListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // xu l form
    FormsModule, // xu li form
    HttpClientModule
  ],
  providers: [
    LoginService,
    SignupService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
