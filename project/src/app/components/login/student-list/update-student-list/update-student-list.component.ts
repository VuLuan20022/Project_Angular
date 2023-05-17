import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Information } from 'src/app/infor/information';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-student-list',
  templateUrl: './update-student-list.component.html',
  styleUrls: ['./update-student-list.component.css']
})

export class UpdateStudentListComponent {

id: number = 0;
// user: user ;
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

// userData: FormGroup;
myForm: FormGroup = new FormGroup({});
constructor(private route: ActivatedRoute, private fb: FormBuilder) {
  this.route.queryParams.subscribe(params => {
    if(params['id']){
      this.id = params['id'];
      this.myForm = this.fb.group({
        ID: this.infor.find((e)=> {
          return e.ID == this.id;
        })?.ID,
        Name: this.infor.find((e)=> {
          return e.ID == this.id;
        })?.Name,
        Email: this.infor.find((e)=> {
          return e.ID == this.id;
        })?.Email,
        Phone: this.infor.find((e)=> {
          return e.ID == this.id;
        })?.Phone,
        Address: this.infor.find((e)=> {
          return e.ID == this.id;
        })?.Address,
        Birthday: this.infor.find((e)=> {
          return e.ID == this.id;
        })?.Birthay
      });
    };
  })
}

ngOnInit() {

}
}
