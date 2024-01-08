import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDataComponent } from './TASK-ONE/student-data/student-data.component';
import { StudentListComponent } from './TASK-ONE/student-list/student-list.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentDetailsListComponent } from './TASK-ONE/student-details-list/student-details-list.component';
import { AuthGuard } from './Guard/auth.guard';
import { FormComponent } from './TASK-ONE/form/form.component';
import { FormDeactivateGuard } from './Guard/form-deactivate.guard';
import { ResolveGuard } from './Guard/resolve.guard';
import { createUserComponent } from './TASK-TWO/create/create.component';
import { readUserComponent } from './TASK-TWO/read/read.component';
import { taskTWoComponent } from './TASK-TWO/taskTwo.component';
import { taskOneComponent } from './TASK-ONE/taskOne.component';
import { taskThreeComponent } from './TASK-THREE/taskThree.component';
import { blogsComponent } from './blogs/blogs.component';
import { taskFourComponent } from './TASK-FOUR/taskFour.component';

const routes: Routes = [
  {
    path: 'student-data',
    component: StudentDataComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: ResolveGuard
    }
  },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id/:name', component: StudentDetailsListComponent },
  { path: 'form', component: FormComponent, canDeactivate: [FormDeactivateGuard] },
  { path: 'create-user', component: createUserComponent },
  { path: 'create-user/:id', component: createUserComponent, resolve: { data: ResolveGuard }  },
  { path: 'read-user', component: readUserComponent, resolve: { data: ResolveGuard } },
  { path: 'blogs', component: blogsComponent, resolve: { data: ResolveGuard } },
  { path: 'task-one', component: taskOneComponent, resolve: { data: ResolveGuard } },
  { path: 'task-two', component: taskTWoComponent, resolve: { data: ResolveGuard }  },
  { path: 'task-three', component: taskThreeComponent },
  { path: 'task-four', component: taskFourComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
