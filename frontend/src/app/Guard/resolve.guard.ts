import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentDataService } from '../services/student-data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(
    private studentData: StudentDataService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <any> {
    
    return this.studentData.getdata();


  }
  
  
}
