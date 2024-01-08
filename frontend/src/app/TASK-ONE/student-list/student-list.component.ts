import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: 'student-list.component.html'
})
export class StudentListComponent {


  constructor(private router: Router){}

  public StudentList = [
    {id:1, name:"Student One"},
    {id:2, name:"Student Two"},
    {id:3, name:"Student Three"},
    {id:4, name:"Student Four"},
    {id:5, name:"Student Five"},
  ]


  // Getting the student Id in the params

  studentClick(student: any){
    this.router.navigate(['/students', student.id, student.name]);
    // console.log(student.id);
  }


}
