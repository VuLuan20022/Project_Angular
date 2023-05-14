import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentListComponent } from './add-student-list.component';

describe('AddStudentListComponent', () => {
  let component: AddStudentListComponent;
  let fixture: ComponentFixture<AddStudentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStudentListComponent]
    });
    fixture = TestBed.createComponent(AddStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
