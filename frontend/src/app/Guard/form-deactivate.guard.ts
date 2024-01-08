import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from '../TASK-ONE/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class FormDeactivateGuard implements CanDeactivate<FormComponent> {
  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // console.log(component)
      // console.log(currentRoute)
      // console.log(currentState)
      // console.log(nextState)

      if(component && component?.username && component?.username?.dirty){
        const confirmation = confirm('You have some unsaved changes, ARe you sure to go back?')
        if(confirmation){
        // in case confirmation true
          return true
        }else{
          return false
        }
      }
    return true;
  }
  
}
