import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details-list',
  templateUrl: './student-details-list.component.html',
  styleUrls: ['./student-details-list.component.css']
})
export class StudentDetailsListComponent {


public stdID :any;
public stdNAME :any;


constructor( 
  private route: ActivatedRoute, 
  private router: Router,
  ){}

  ngOnInit() {

    // Getting id With Snapshot
    // this.stdID = this.route.snapshot.params['id'];
    // this.stdNAME = this.route.snapshot.params['name'];

    // Display Student ID in the Component
    this.route.params.subscribe(data => {
    this.stdID = data['id'];
    this.stdNAME = data['name'];
    console.log(this.stdID);

  })
  
}





}
