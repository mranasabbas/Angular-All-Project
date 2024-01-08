import { Component, OnInit } from "@angular/core";
import { apiService } from "../ApiServices/ApiService.service";


@Component({
    selector: 'app-read-user',
    templateUrl: './read.component.html'
})


export class readUserComponent implements OnInit {


    success: any;
    newdata: any = [{}];

    constructor(private apiService: apiService) { }


    ngOnInit(): void {
        this.getAllDAta()
    }

    // Deleting User Data

    deleteData(id: any) {
        this.apiService.deleteData(id).subscribe((res) => {
            console.log(id, 'user deleted');
            this.success = res.message
            this.getAllDAta()
        })
    }

    // Get All Data
    // SUBSCRIBE IS A OBSERVABLE ( res is parameter )

    getAllDAta() {
        this.apiService.getData().subscribe((res) => {
            this.newdata = res;
            console.log(this.newdata);
        });
    }


}