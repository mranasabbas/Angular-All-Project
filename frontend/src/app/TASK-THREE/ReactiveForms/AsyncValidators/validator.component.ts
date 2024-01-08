import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
    selector: 'app-Async-Validator',
    templateUrl: './validator.component.html'
})

export class validatorComponent{

  userForm: any = FormGroup;
  dataTable: any[] = [];

  constructor(
    private formBuilder: FormBuilder
  ){}
    

    emailNotAllowed(control: FormControl): Promise<any> | Observable<any>{
        const response = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (control.value === 'aneeqBhai@gmail.com') {
                    return resolve({emailNotAllowed: true})
                } else {
                    return resolve(null)
                }
            }, 3000)
        });
        return response
    }

  
  ngOnInit(){
    this.userForm = this.formBuilder.group({
      firstname: ["", [Validators.required]],
      lastname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],

      address: this.formBuilder.group({
        street:["", Validators.required],
        city:["", Validators.required],
        zipCode:["", [Validators.required]]
      })
    }) as any;
  }

  onSubmit(){
    if(this.userForm.valid){
      //console.log(this.userForm.value);
      const formData = this.userForm.value
      this.dataTable.push(formData)
      this.userForm.reset();
    }
  }

  // For Error Messages
  get firstname(){
    return this.userForm.get('firstname')
  }
  get lastname(){
    return this.userForm.get('lastname')
  }
  get email(){
    return this.userForm.get('email')
  }

 

}

