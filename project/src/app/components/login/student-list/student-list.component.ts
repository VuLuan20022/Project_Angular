import { Component } from '@angular/core';
import { Information } from 'src/app/infor/information';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  constructor(private route: Router){

  }
    infor: Information[] = [
      {
        ID: 1,
  Name: 'Vu Sy Luan',
  Email: 'luanvs@gmail.com',
  Phone: '0123456789',
  Address: 'Ha Noi',
  Birthay: '01-02-2002'
      },
      {
        ID: 2,
  Name: 'Giang Seo Ao',
  Email: 'Aovs@gmail.com',
  Phone: '0123456789',
  Address: 'Ha Giang',
  Birthay: '01-02-2002'
      },
      {
        ID: 3,
  Name: 'Giang Seo Hung',
  Email: 'Aovs@gmail.com',
  Phone: '0123456789',
  Address: 'Ha Giang',
  Birthay: '01-02-2002'
      }
    ]

    passUpdate(id: number){
      this.route.navigate(['/edit'], {queryParams: {id}})
    }
}
