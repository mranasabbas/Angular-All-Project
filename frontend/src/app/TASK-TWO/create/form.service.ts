import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class FormServices {


    constructor(
        private formBuilder: FormBuilder,
    ) { }


    userForm = this.formBuilder.group({

        fullname: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email, 
                    Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$")]
                ],
        mobile: ['', [Validators.required, Validators.min(7)]],

    })

}