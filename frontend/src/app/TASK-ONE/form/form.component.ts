import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
      <div class="container">
        <h4> Can Deactivate Guard </h4>
        <p>After filling the field when you try to leave this page Can Deactivate will ask you to leave the page.</p>
        <input type="text" class="form-control" placeholder="Enter Username" [formControl]="username" required/>
      </div>
  `,
  styles: ['.container { width: 50%; text-align: center; } h4 { margin-bottom: 20px; }']
})

export class FormComponent {

  username = new FormControl('', Validators.required)


}
