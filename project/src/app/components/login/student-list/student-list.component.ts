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
    Birthay: '2002-02-01'
      },
      {
        ID: 2,
    Name: 'Giang Seo Ao',
    Email: 'Aovs@gmail.com',
    Phone: '0123456789',
    Address: 'Ha Giang',
    Birthay: '2002-02-01'
      },
      {
        ID: 3,
    Name: 'Hoang Quoc Anh',
    Email: 'quocanh@gmail.com',
    Phone: '0123456789',
    Address: 'Bac Ninh',
    Birthay: '2002-02-01'
      }
      ,
      {
        ID: 4,
    Name: 'Hoang Quoc Anh',
    Email: 'quocanh@gmail.com',
    Phone: '0123456789',
    Address: 'Bac Ninh',
    Birthay: '2002-02-01'
      }
      ,
      {
        ID: 5,
    Name: 'Hoang Quoc Anh',
    Email: 'quocanh@gmail.com',
    Phone: '0123456789',
    Address: 'Bac Ninh',
    Birthay: '2002-02-01'
      }
      ,
      {
        ID: 6,
    Name: 'Hoang Quoc Anh',
    Email: 'quocanh@gmail.com',
    Phone: '0123456789',
    Address: 'Bac Ninh',
    Birthay: '2002-02-01'
      }
      ,
      {
        ID: 7,
    Name: 'Hoang Quoc Anh',
    Email: 'quocanh@gmail.com',
    Phone: '0123456789',
    Address: 'Bac Ninh',
    Birthay: '2002-02-01'
      }
    ]

    passUpdate(id: number){
      this.route.navigate(['/edit'], {queryParams: {id}})
    }
}
