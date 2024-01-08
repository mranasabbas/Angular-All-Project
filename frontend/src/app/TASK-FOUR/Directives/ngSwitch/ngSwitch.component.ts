import { Component } from "@angular/core";

@Component({
    selector: 'app-ngSwitch',
    templateUrl: './ngSwitch.component.html'
})


export class ngSwitchComponent{

    userRole: string = 'admin';

    items: item[] = [
        {name: 'One', val: 1}, 
        {name: 'Two', val: 2}, 
        {name: 'Three', val: 3}, 
        {name: 'Four', val: 3}, 
        {name: 'Five', val: 3}
    ];
    selectedValue: string= 'One';

}

class item {
    name!: string;
    val!: number;
}
