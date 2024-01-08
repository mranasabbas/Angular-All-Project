import { Component, OnInit } from "@angular/core";
import { FormServices } from "./form.service";
import { ActivatedRoute } from "@angular/router";
import { apiService } from "../ApiServices/ApiService.service";

@Component({
    selector: 'app-createUser',
    templateUrl: './create.component.html'
})

export class createUserComponent implements OnInit{
    
    constructor(
        private formService: FormServices,
        private service: apiService,
        private router: ActivatedRoute
        ){ }
        
    success: any;
    userForm = this.formService.userForm;
    getParamID: any;


    ngOnInit(): void{
        // console.log(this.router.snapshot.paramMap.get('id'), 'getid');

        this.getParamID =  this.router.snapshot.paramMap.get('id');
        this.service.getSingleUser(this.getParamID).subscribe((res)=>{
            console.log(res, 'respone');
            this.userForm.patchValue({
                fullname: res.data[0].fullname,
                email: res.data[0].email,
                mobile: res.data[0].mobile
            })
            // this.success = res.message;
        })
        
    }

    // Creating User

    onSubmit(){
        console.log(this.userForm.value);
        this.service.createData(this.userForm.value).subscribe(res =>{
            // console.log(res, 'respone');
            this.success = res.message;
            
        })
        this.userForm.reset();  
    }

    // Creating User

    onUpdate(){
        console.log(this.userForm.value);
        this.service.updateUser(this.userForm.value, this.getParamID).subscribe(res =>{
            // console.log(res, 'respone');
            // this.success = res.message;
            
        })
        this.userForm.reset();  
    }

    
    
}