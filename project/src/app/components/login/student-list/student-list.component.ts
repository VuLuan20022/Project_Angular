import { Component, OnInit } from '@angular/core';
import { Information } from 'src/app/infor/information';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/StudentService';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private route: Router, private studentService: StudentService) {
  }
  message: any;
  errorMessage: any;
  infor: Information[] = [];

  ngOnInit(): void {
    this.studentService.getList()
      .subscribe({
        next: (response) => {
          // Xử lý kết quả thành công
          if (response.status === 200) {
            this.infor = response.body;
            console.log(this.infor);
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

  passUpdate(studentId: number) {
    this.route.navigate(['/student/update'], { queryParams: { studentId } })
  }

  passDelete(studentId: number) {
    if(confirm('Do you want delete this student?')){
      this.studentService.removeStudent(studentId)
      .subscribe({
        next: (response) => {
          // Xử lý kết quả thành công
          if (response.status === 200) {
            this.message = response.body.message;
            console.log(this.message);
            this.ngOnInit();
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
}
