import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDataComponent } from './TASK-ONE/student-data/student-data.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';
import { StudentListComponent } from './TASK-ONE/student-list/student-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentDetailsListComponent } from './TASK-ONE/student-details-list/student-details-list.component';
import { FormComponent } from './TASK-ONE/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResolveGuard } from './Guard/resolve.guard';
import { AuthGuard } from './Guard/auth.guard';
import { FormDeactivateGuard } from './Guard/form-deactivate.guard';
import { StudentDataService } from './services/student-data.service';
import { apiService } from './TASK-TWO/ApiServices/ApiService.service';
import { readUserComponent } from './TASK-TWO/read/read.component';
import { createUserComponent } from './TASK-TWO/create/create.component';
import { FormServices } from './TASK-TWO/create/form.service';
import { taskTWoComponent } from './TASK-TWO/taskTwo.component';
import { BarComponent } from './TASK-TWO/top-bar/bar.component';
import { TopBarComponent } from './TASK-ONE/top-bar/top-bar.component';
import { taskOneComponent } from './TASK-ONE/taskOne.component';
import { TopBar3Component } from './TASK-THREE/top-bar3/top-bar3.component';
import { taskThreeComponent } from './TASK-THREE/taskThree.component';
import { blogsComponent } from './blogs/blogs.component';
import { BlogService } from './services/blog.service';
import { validatorComponent } from './TASK-THREE/ReactiveForms/AsyncValidators/validator.component';
import { UserFormComponent } from './TASK-THREE/ReactiveForms/Built-In-Validators/user-form.component';
import { taskFourComponent } from './TASK-FOUR/taskFour.component';
import { BarFourComponent } from './TASK-FOUR/top-bar/barFour.component';
import { pipesComponent } from './TASK-FOUR/Pipes/pipes.component';
import { TextPipePipe } from './TASK-FOUR/Pipes/age-pipe.pipe';
import { DirectiveFileDirective } from './shared/directive-file.directive';
import { customDirComponent } from './TASK-FOUR/Directives/AttributeDirectives/customDir.component';
import { ngContentComponent } from './TASK-FOUR/Directives/ngContent-ngContentProjection copy/ngContent.component';
import { NGForComponent } from './TASK-FOUR/Directives/ngFor-ngContainer/ngFor.component';
import { ngifComponent } from './TASK-FOUR/Directives/ngIF-ngTemplate/ngIf.component';
import { ngSwitchComponent } from './TASK-FOUR/Directives/ngSwitch/ngSwitch.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDataComponent,
    HeaderComponent,
    StudentListComponent,
    NotFoundComponent,
    StudentDetailsListComponent,
    FormComponent,
    readUserComponent,
    createUserComponent,
    taskTWoComponent,
    taskOneComponent,
    taskThreeComponent,
    BarComponent,
    TopBarComponent,
    TopBar3Component,
    BarFourComponent,
    blogsComponent,
    validatorComponent,
    UserFormComponent,
    taskFourComponent,
    pipesComponent,
    TextPipePipe,
    DirectiveFileDirective,
    customDirComponent,
    ngContentComponent,
    NGForComponent,
    ngifComponent,
    ngSwitchComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
  ],

  exports: [
    HeaderComponent,
    FormComponent,
    ReactiveFormsModule,
    FormsModule
    // DirectiveFileDirective
    
  ],

  providers: [
    ResolveGuard, 
    AuthGuard, 
    FormDeactivateGuard, 
    StudentDataService, 
    apiService, 
    FormServices, 
    BlogService,
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
