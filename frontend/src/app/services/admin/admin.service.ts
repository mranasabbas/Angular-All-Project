import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminPassword: any;

  constructor() { }

  studentDataClick(){

    let password = prompt('Please Enter Admin Password: ')

    if(password != null){
      this.adminPassword = parseInt(password);
      
    }else{
      this.adminPassword = 0;
    }

  }

}
