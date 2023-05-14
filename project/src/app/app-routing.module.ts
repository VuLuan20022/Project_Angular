import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentListComponent } from './components/login/student-list/student-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetComponent } from './components/forget/forget.component';
import { AddStudentListComponent } from './components/login/student-list/add-student-list/add-student-list.component';
import { UpdateStudentListComponent } from './components/login/student-list/update-student-list/update-student-list.component';


const routes: Routes = [
  // "path": Thuộc tính này xác định đường dẫn. Trong trường hợp này, giá trị rỗng ('') biểu thị đường dẫn mặc định.
  // "pathMatch": Thuộc tính này xác định kiểu so khớp đường dẫn.
  // Giá trị 'full' nghĩa là kiểm tra toàn bộ URL để xem có khớp với đường dẫn được chỉ định hay không.

  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'forget', component : ForgetComponent},
  {path: 'student', component : StudentListComponent},
  {path: 'add-new', component : AddStudentListComponent},
  {path: 'edit-student', component : UpdateStudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
