import { Component } from "@angular/core";

@Component({
    selector: 'app-NGIF',
    templateUrl: './ngIf.component.html'
})

export class ngifComponent {

    active: boolean = true;
    display: boolean = false;


    showNGIFdescription(){
        this.display = !this.display;
    }

}