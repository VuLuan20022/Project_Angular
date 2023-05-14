import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './components/login/student-list/student-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetComponent } from './components/forget/forget.component';
import { UpdateStudentListComponent } from './components/login/student-list/update-student-list/update-student-list.component';
import { AddStudentListComponent } from './components/login/student-list/add-student-list/add-student-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListComponent,
    SignupComponent,
    ForgetComponent,
    UpdateStudentListComponent,
    AddStudentListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // xu l form
    FormsModule // xu li form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
